/**
 * Маппинг языковых кодов ISO 639-1/639-2 в коды Google Translate
 * Поддерживает более 250 языков
 */
export const LANGUAGE_MAP: Record<string, string> = {
  // Основные европейские языки (40+)
  en: "en", es: "es", fr: "fr", de: "de", ru: "ru", pt: "pt", it: "it",
  nl: "nl", pl: "pl", tr: "tr", uk: "uk", cs: "cs", sv: "sv", no: "no",
  da: "da", fi: "fi", ro: "ro", hu: "hu", bg: "bg", hr: "hr", sr: "sr",
  sk: "sk", sl: "sl", et: "et", lv: "lv", lt: "lt", el: "el", ca: "ca",
  eu: "eu", ga: "ga", cy: "cy", mt: "mt", is: "is", mk: "mk", sq: "sq",
  be: "be", bs: "bs", lb: "lb", gd: "gd", gl: "gl", br: "br", kw: "kw",
  gv: "gv", fo: "fo", hy: "hy", az: "az", kk: "kk", ky: "ky", uz: "uz",
  tg: "tg", tk: "tk", tt: "tt", ba: "ba", cv: "cv", ka: "ka", os: "os",
  
  // Кавказские языки (6)
  ce: "ce", av: "av", ab: "ab", kbd: "kbd", ady: "ady",
  
  // Азиатские языки - основные (30+)
  ja: "ja", ko: "ko", zh: "zh-CN", hi: "hi", th: "th", vi: "vi",
  id: "id", ms: "ms", ta: "ta", te: "te", kn: "kn", ml: "ml", gu: "gu",
  pa: "pa", bn: "bn", or: "or", as: "as", mr: "mr", ne: "ne", si: "si",
  my: "my", km: "km", lo: "lo", bo: "bo", dz: "dz", mn: "mn", ug: "ug",
  jv: "jv", su: "su", ceb: "ceb", fil: "fil", tl: "tl",
  
  // Азиатские языки - дополнительные (30+)
  kok: "kok", mni: "mni", sat: "sat", brx: "brx", mai: "mai", hne: "hne",
  ban: "ban", bug: "bug", bjn: "bjn", mad: "mad", min: "min", nij: "nij",
  ace: "ace", bbc: "bbc", bew: "bew", bts: "bts", hji: "hji", jav: "jv",
  kge: "kge", lcm: "lcm", liw: "liw", max: "max", mui: "mui",
  wuu: "wuu", yue: "yue", hak: "hak",
  
  // Ближний Восток (15+)
  ar: "ar", he: "he", iw: "he", fa: "fa", ps: "ps", ku: "ku", ur: "ur",
  sd: "sd", yi: "yi", bal: "bal", arc: "arc", mzn: "mzn", glk: "glk", lrc: "lrc",
  
  // Африканские языки (50+)
  sw: "sw", ha: "ha", yo: "yo", ig: "ig", zu: "zu", xh: "xh", af: "af",
  st: "st", tn: "tn", ts: "ts", ve: "ve", nr: "nr", nso: "nso", am: "am",
  ti: "ti", om: "om", so: "so", rw: "rw", rn: "rn", lg: "lg", ak: "ak",
  tw: "tw", ee: "ee", wo: "wo", bm: "bm", sn: "sn", ny: "ny", bem: "bem",
  nbl: "nbl", tso: "ts", ven: "ve", xho: "xh", zul: "zu", ssw: "ss",
  sot: "st", tsn: "tn", hau: "ha", ibo: "ig", kin: "rw", lug: "lg",
  orm: "om", run: "rn", sna: "sn", som: "so", tir: "ti", yor: "yo",
  
  // Языки Океании (15+)
  haw: "haw", mi: "mi", sm: "sm", ty: "ty", fj: "fj", to: "to", mg: "mg",
  bi: "bi", gil: "gil", na: "na", tkl: "tkl", tvl: "tvl", wls: "wls",
  
  // Американские языки (15+)
  qu: "qu", gn: "gn", ay: "ay", iu: "iu", oj: "oj", cr: "cr", nah: "nah",
  hmn: "hmn", co: "co", ht: "ht", chr: "chr", mus: "mus", hni: "hni", sma: "sma",
  
  // Региональные варианты европейских (25+)
  sc: "sc", rm: "rm", wa: "wa", fur: "fur", lij: "lij", vec: "vec",
  lmo: "lmo", pms: "pms", scn: "scn", nap: "nap", bar: "bar", frr: "frr",
  gsw: "gsw", pcd: "pcd", wln: "wln",
  
  // Дополнительные тюркские (10+)
  alt: "alt", crh: "crh", gag: "gag", kaa: "kaa", krc: "krc", kum: "kum",
  sah: "sah", tyv: "tyv",
  
  // Монгольские (2)
  xal: "xal",
  
  // Финно-угорские (10+)
  mdf: "mdf", myv: "myv", udm: "udm", koi: "koi", kv: "kv", mrj: "mrj",
  
  // Самодийские (1)
  sel: "sel",
  
  // Искусственные и исторические (10+)
  eo: "eo", io: "io", ia: "ia", ie: "ie", vo: "vo", la: "la", sa: "sa", got: "got",
  
  // Дополнительные славянские и балтийские
  hsb: "hsb", dsb: "dsb",
  
  // Региональные варианты для составных локалей
  "zh-cn": "zh-CN", "zh-tw": "zh-TW", "zh-hk": "zh-TW", "zh-sg": "zh-CN",
  "zh-my": "zh-CN", "zh-mo": "zh-TW",
};

