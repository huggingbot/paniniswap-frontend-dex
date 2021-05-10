import { LangType } from '@paniniswap/paniniswap-uikit'

export const AR: LangType = { locale: 'ar-SA', language: 'العربية', code: 'ar' }
export const EN: LangType = { locale: 'en-US', language: 'English', code: 'en' }
export const DE: LangType = { locale: 'de-DE', language: 'Deutsch', code: 'de' }
export const EL: LangType = { locale: 'el-GR', language: 'Ελληνικά', code: 'el' }
export const ESES: LangType = { locale: 'es-ES', language: 'Español', code: 'es-ES' }
export const FI: LangType = { locale: 'fi-FI', language: 'Suomalainen', code: 'fi' }
export const FIL: LangType = { locale: 'fil-PH', language: 'Filipino', code: 'fil' }
export const FR: LangType = { locale: 'fr-FR', language: 'Français', code: 'fr' }
export const HI: LangType = { locale: 'hi-IN', language: 'हिंदी', code: 'hi' }
export const HU: LangType = { locale: 'hu-HU', language: 'Magyar', code: 'hu' }
export const ID: LangType = { locale: 'id-ID', language: 'Bahasa Indonesia', code: 'id' }
export const IT: LangType = { locale: 'it-IT', language: 'Italiano', code: 'it' }
export const JA: LangType = { locale: 'ja-JP', language: '日本語', code: 'ja' }
export const KO: LangType = { locale: 'ko-KR', language: '한국어', code: 'ko' }
export const NL: LangType = { locale: 'nl-NL', language: 'Nederlands', code: 'nl' }
export const PTBR: LangType = { locale: 'pt-BR', language: 'Português (Brazil)', code: 'pt-br' }
export const RO: LangType = { locale: 'ro-RO', language: 'Română', code: 'ro' }
export const RU: LangType = { locale: 'ru-RU', language: 'Русский', code: 'ru' }
export const SVSE: LangType = { locale: 'sv-SE', language: 'Svenska', code: 'sv' }
export const TA: LangType = { locale: 'ta-IN', language: 'தமிழ்', code: 'ta' }
export const TR: LangType = { locale: 'tr-TR', language: 'Türkçe', code: 'tr' }
export const UK: LangType = { locale: 'uk-UA', language: 'Українська', code: 'uk' }
export const VI: LangType = { locale: 'vi-VN', language: 'Tiếng Việt', code: 'vi' }
export const ZHCN: LangType = { locale: 'zh-CN', language: '简体中文', code: 'zh-cn' }
export const ZHTW: LangType = { locale: 'zh-TW', language: '繁體中文', code: 'zh-tw' }

export const allLanguages = {
  'ar-SA': AR,
  'en-US': EN,
  'de-DE': DE,
  'el-GR': EL,
  'es-ES': ESES,
  'fi-FI': FI,
  'fil-PH': FIL,
  'fr-FR': FR,
  'hi-IN': HI,
  'hu-HU': HU,
  'id-ID': ID,
  'it-IT': IT,
  'ja-JP': JA,
  'ko-KR': KO,
  'nl-NL': NL,
  'pt-BR': PTBR,
  'ro-RO': RO,
  'ru-RU': RU,
  'sv-SE': SVSE,
  'ta-IN': TA,
  'tr-TR': TR,
  'uk-UA': UK,
  'vi-VN': VI,
  'zh-CN': ZHCN,
  'zh-TW': ZHTW,
}

export const languageList = Object.values(allLanguages)
