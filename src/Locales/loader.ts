import { Locale } from 'antd/lib/locale-provider'

export enum LOCALES_KEYS {
  EN_US = 'en-US',
  KO_KR = 'ko-KR'
}

export const SUPPOER_LOCALES = [
  {
    name: 'English',
    value: LOCALES_KEYS.EN_US
  },
  {
    name: 'korean',
    value: LOCALES_KEYS.KO_KR
  }
]

export interface LocaleResponse {
  localeData: StringObject
  antdLocaleData: Locale
}

export function getLocaleLoader(locale: string): Promise<LocaleResponse> {
  switch (locale) {
    case LOCALES_KEYS.KO_KR:
      return new Promise(async resolve => {
        const loc = await import(/* webpackChunkName: "zh-CN" */ './ko_KR.json').then(m => m.default)
        const antdLoc = await import(
          /* webpackChunkName: "antd-zh-CN" */ 'antd/lib/locale-provider/ko_KR'
          ).then(m => m.default)
        resolve({ localeData: loc, antdLocaleData: antdLoc })
      })
    default:
      return new Promise(async resolve => {
        const loc = await import(/* webpackChunkName: "en-US" */ './en_US.json').then(m => m.default)
        const antdLoc = await import(
          /* webpackChunkName: "antd-en-US" */ 'antd/lib/locale-provider/en_US'
          ).then(m => m.default)
        resolve({ localeData: loc, antdLocaleData: antdLoc })
      })
  }
}
