"use client";

import { useEffect, useRef } from "react";
import { LANGUAGE_MAP } from "./languages-map";

const LANGUAGE_KEY = "horizon_translate_language";
const AUTO_KEY = "horizon_auto_translate";
const ATTR_KEY = "data-translate-attr";
const TARGET_SELECTORS = ["main", "header", "footer"];
const CACHE = new Map<string, string>();

const mapGoogleLocaleToLanguage = (locale: string | undefined) => {
  if (!locale) return "en";
  const lower = locale.toLowerCase();
  const base = lower.split("-")[0];
  
  // Проверяем полный локаль сначала (например, zh-CN, zh-TW)
  if (LANGUAGE_MAP[lower]) {
    return LANGUAGE_MAP[lower];
  }
  
  // Затем проверяем базовый код языка
  return LANGUAGE_MAP[base] ?? "en";
};

/**
 * Определяет язык пользователя с приоритетом:
 * 1. Настройки браузера (navigator.language, navigator.languages) - приоритет #1
 * 2. Настройки устройства (navigator.userLanguage и другие) - приоритет #2
 * 3. Настройки региона (Intl API, timezone) - приоритет #3
 */
const detectUserLanguage = (): string => {
  if (typeof navigator === "undefined") {
    return "en";
  }

  // Расширенный тип для поддержки различных свойств браузера
  const navigatorAny = navigator as Navigator & { 
    systemLanguage?: string;
    userLanguage?: string;
    browserLanguage?: string;
    languages?: readonly string[];
  };

  // 1. ПРИОРИТЕТ #1: Настройки браузера (Google Chrome, Firefox, Safari, Edge и т.д.)
  // 1.1. Проверяем основной язык браузера (navigator.language)
  // Это основной язык, установленный в настройках браузера
  if (navigator.language) {
    const mapped = mapGoogleLocaleToLanguage(navigator.language);
    // Возвращаем язык, даже если это английский (пользователь явно выбрал его)
    // Английский будет обработан позже в AutoTranslator и не будет переводиться
    if (mapped) return mapped;
  }

  // 1.2. Проверяем полный список предпочитаемых языков браузера (navigator.languages)
  // В Google Chrome это настройка: Настройки → Языки → Предпочитаемые языки
  // Это массив языков в порядке приоритета, установленных пользователем в браузере
  if (navigator.languages && navigator.languages.length > 0) {
    for (const lang of navigator.languages) {
      const mapped = mapGoogleLocaleToLanguage(lang);
      if (mapped) {
        // Возвращаем первый поддерживаемый язык из списка предпочтений
        return mapped;
      }
    }
  }

  // 1.3. Дополнительная проверка: язык системы браузера (для некоторых браузеров)
  if (navigatorAny.systemLanguage) {
    const mapped = mapGoogleLocaleToLanguage(navigatorAny.systemLanguage);
    if (mapped) return mapped;
  }

  // 1.4. Для браузеров на базе Chromium (Chrome, Edge, Opera)
  // Проверяем дополнительный способ получения языка
  if (navigatorAny.languages && Array.isArray(navigatorAny.languages)) {
    for (const lang of navigatorAny.languages) {
      const mapped = mapGoogleLocaleToLanguage(lang);
      if (mapped) return mapped;
    }
  }

  // 2. ПРИОРИТЕТ #2: Настройки устройства (для старых браузеров и IE)
  // userLanguage используется в старых версиях Internet Explorer
  if (navigatorAny.userLanguage) {
    const mapped = mapGoogleLocaleToLanguage(navigatorAny.userLanguage);
    if (mapped) return mapped;
  }
  
  // browserLanguage используется в некоторых старых браузерах
  if (navigatorAny.browserLanguage) {
    const mapped = mapGoogleLocaleToLanguage(navigatorAny.browserLanguage);
    if (mapped) return mapped;
  }

  // 3. Приоритет: Настройки региона через Intl API
  try {
    // Локаль из Intl.DateTimeFormat
    const dateFormat = new Intl.DateTimeFormat();
    const dateLocale = dateFormat.resolvedOptions().locale;
    if (dateLocale) {
      const mapped = mapGoogleLocaleToLanguage(dateLocale);
      if (mapped !== "en") return mapped;
    }

    // Локаль из Intl.NumberFormat
    const numberFormat = new Intl.NumberFormat();
    const numberLocale = numberFormat.resolvedOptions().locale;
    if (numberLocale) {
      const mapped = mapGoogleLocaleToLanguage(numberLocale);
      if (mapped !== "en") return mapped;
    }

    // Попытка определить язык по часовому поясу (косвенный метод)
    // Некоторые регионы имеют типичные языки
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timeZone) {
      const timezoneToLanguage: Record<string, string> = {
        "Europe/Moscow": "ru",
        "Asia/Tokyo": "ja",
        "Asia/Shanghai": "zh-CN",
        "Asia/Seoul": "ko",
        "Asia/Bangkok": "th",
        "Asia/Jakarta": "id",
        "Asia/Ho_Chi_Minh": "vi",
        "Europe/Berlin": "de",
        "Europe/Paris": "fr",
        "Europe/Madrid": "es",
        "Europe/Rome": "it",
        "Europe/Amsterdam": "nl",
        "Europe/Warsaw": "pl",
        "Europe/Prague": "cs",
        "Europe/Stockholm": "sv",
        "Europe/Oslo": "no",
        "Europe/Copenhagen": "da",
        "Europe/Helsinki": "fi",
        "America/Sao_Paulo": "pt",
        "America/Mexico_City": "es",
        "America/Argentina/Buenos_Aires": "es",
        "Africa/Cairo": "ar",
        "Asia/Dubai": "ar",
        "Asia/Riyadh": "ar",
        "Asia/Tel_Aviv": "he",
        "Europe/Kiev": "uk",
        "Europe/Istanbul": "tr",
      };

      const langFromTimezone = timezoneToLanguage[timeZone];
      if (langFromTimezone) {
        return langFromTimezone;
      }
    }
  } catch (error) {
    // Игнорируем ошибки Intl API
    console.debug("Intl API detection failed:", error);
  }

  // По умолчанию английский
  return "en";
};

async function translateText(text: string, target: string): Promise<string> {
  const cacheKey = `${target}:${text}`;
  if (CACHE.has(cacheKey)) return CACHE.get(cacheKey)!;

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${encodeURIComponent(
      target,
    )}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    if (!response.ok) {
      console.warn(`Translate failed for "${text}" to ${target}: ${response.status}`);
      return text;
    }
    const data = (await response.json()) as unknown;
    const translated =
      Array.isArray(data) && Array.isArray(data[0])
        ? data[0]
            .map((entry: unknown) => (Array.isArray(entry) ? entry[0] : ""))
            .join("")
            .trim()
        : text;

    const result = translated || text;
    CACHE.set(cacheKey, result);
    return result;
  } catch (error) {
    console.warn(`Translation error for "${text}":`, error);
    return text;
  }
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
      const detected = detectUserLanguage();
      localStorage.setItem(LANGUAGE_KEY, detected);
      return detected;
    })();

    if (!targetLanguage || targetLanguage === "en") return;

    const runTranslation = async () => {
      if (isTranslating.current) return;
      isTranslating.current = true;
      try {
        // Ждем полной загрузки DOM
        await new Promise((resolve) => {
          if (document.readyState === "complete") {
            resolve(undefined);
          } else {
            window.addEventListener("load", () => resolve(undefined), { once: true });
          }
        });
        
        // Небольшая задержка для гарантии, что все элементы загружены
        await new Promise((resolve) => setTimeout(resolve, 100));

        for (const selector of TARGET_SELECTORS) {
          const el = document.querySelector(selector);
          if (el) {
            await translateElement(el, targetLanguage);
          }
        }
      } catch (error) {
        console.error("Translation error:", error);
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

    // Запускаем перевод после небольшой задержки для загрузки DOM
    const timeoutId = setTimeout(() => {
      void runTranslation();
    }, 300);

    observerRef.current = new MutationObserver(() => {
      scheduleRun();
    });
    observerRef.current.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      clearTimeout(timeoutId);
      observerRef.current?.disconnect();
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return null;
}
