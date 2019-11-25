import { Locale } from 'antd/lib/locale-provider'

export enum LOCALES_KEYS {
  KO_KR = 'ko-KR'
}

export const SUPPOER_LOCALES = [
  {
    name: 'korean',
    value: LOCALES_KEYS.KO_KR,
  },
]

export interface LocaleResponse {
  localeData: StringObject
  antdLocaleData: Locale
}

export function getLocaleLoader(locale: string): Promise<LocaleResponse> {
  switch (locale) {
    case LOCALES_KEYS.KO_KR:
      return new Promise(async resolve => {
        const loc = await import('./ko_KR.json').then(m => m.default)
        const antdLoc = await import('antd/lib/locale-provider/ko_KR').then(m => m.default)
        resolve({ localeData: loc, antdLocaleData: antdLoc })
      })
  }
}
