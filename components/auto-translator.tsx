"use client";

import { useEffect, useRef } from "react";

const LANGUAGE_KEY = "horizon_translate_language";
const AUTO_KEY = "horizon_auto_translate";
const ATTR_KEY = "data-translate-attr";
const TARGET_SELECTORS = ["main", "header", "footer"];
const CACHE = new Map<string, string>();

const mapGoogleLocaleToLanguage = (locale: string | undefined) => {
  if (!locale) return "en";
  const lower = locale.toLowerCase();
  const base = lower.split("-")[0];
  const map: Record<string, string> = {
    en: "en",
    es: "es",
    fr: "fr",
    de: "de",
    ru: "ru",
    pt: "pt",
    it: "it",
    nl: "nl",
    pl: "pl",
    tr: "tr",
    ja: "ja",
    ko: "ko",
    zh: "zh-CN",
    ar: "ar",
    he: "he",
    uk: "uk",
    cs: "cs",
    sv: "sv",
    no: "no",
    da: "da",
    fi: "fi",
    vi: "vi",
    id: "id",
    th: "th",
  };
  return map[base] ?? "en";
};

async function translateText(text: string, target: string) {
  const cacheKey = `${target}:${text}`;
  if (CACHE.has(cacheKey)) return CACHE.get(cacheKey)!;

  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${encodeURIComponent(
    target,
  )}&dt=t&q=${encodeURIComponent(text)}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Translate failed: ${response.status}`);
  const data = (await response.json()) as unknown;
  const translated =
    Array.isArray(data) && Array.isArray(data[0])
      ? data[0]
          .map((entry: unknown) => (Array.isArray(entry) ? entry[0] : ""))
          .join("")
      : text;

  CACHE.set(cacheKey, translated || text);
  return translated || text;
}

function collectTextNodes(root: Element) {
  const nodes: Text[] = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (parent.closest("[data-translate='false']")) return NodeFilter.FILTER_REJECT;
      if (["SCRIPT", "STYLE"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  let current = walker.nextNode();
  while (current) {
    nodes.push(current as Text);
    current = walker.nextNode();
  }
  return nodes;
}

async function translateElement(root: Element, target: string) {
  const textNodes = collectTextNodes(root);
  const tasks: Promise<void>[] = [];

  textNodes.forEach((node) => {
    const original = node.nodeValue?.trim() || "";
    if (!original) return;
    const task = translateText(original, target)
      .then((translated) => {
        if (translated && translated !== original) {
          node.nodeValue = node.nodeValue?.replace(original, translated) ?? translated;
        }
      })
      .catch(() => {
        // skip errors silently to avoid blocking others
      });
    tasks.push(task);
  });

  // translate specific attributes if opted in
  const attributeElements = Array.from(
    root.querySelectorAll<HTMLElement>(`[${ATTR_KEY}]`),
  );
  for (const el of attributeElements) {
    const attrs = el.getAttribute(ATTR_KEY);
    if (!attrs) continue;
    for (const attrName of attrs.split(",").map((a) => a.trim()).filter(Boolean)) {
      const value = el.getAttribute(attrName);
      if (!value) continue;
      const task = translateText(value, target)
        .then((translated) => {
          if (translated && translated !== value) {
            el.setAttribute(attrName, translated);
          }
        })
        .catch(() => {
          // ignore individual attribute failures
        });
      tasks.push(task);
    }
  }

  if (tasks.length) {
    await Promise.all(tasks);
  }
}

export function AutoTranslator() {
  const observerRef = useRef<MutationObserver | null>(null);
  const isTranslating = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const enabledRaw = localStorage.getItem(AUTO_KEY);
    const enabled = enabledRaw === null ? true : enabledRaw === "true";
    if (!enabled) return;

    const targetLanguage = (() => {
      const stored = localStorage.getItem(LANGUAGE_KEY);
      if (stored) return stored;
      const mapped = mapGoogleLocaleToLanguage(navigator.language);
      localStorage.setItem(LANGUAGE_KEY, mapped);
      return mapped;
    })();

    if (!targetLanguage || targetLanguage === "en") return;

    const runTranslation = async () => {
      if (isTranslating.current) return;
      isTranslating.current = true;
      try {
        for (const selector of TARGET_SELECTORS) {
          const el = document.querySelector(selector);
          if (el) {
            await translateElement(el, targetLanguage);
          }
        }
      } finally {
        isTranslating.current = false;
      }
    };

    const scheduleRun = () => {
      if (rafRef.current !== null || isTranslating.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        void runTranslation();
      });
    };

    runTranslation();

    observerRef.current = new MutationObserver(() => {
      scheduleRun();
    });
    observerRef.current.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      observerRef.current?.disconnect();
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return null;
}
