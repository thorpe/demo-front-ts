import React from 'react'
import intl from 'react-intl-universal'
import { find } from 'lodash'
import { LocaleProvider } from 'antd'
import { Locale } from 'antd/lib/locale-provider'
import { useOnMount } from '@helpers/reactExt'
import { COOKIE_KEYS } from '@constants/index'
// import PageLoading from '@components/PageLoading'
import LayoutLoading from '@views/Layout/LayoutLoading'
import { SUPPOER_LOCALES, LOCALES_KEYS, getLocaleLoader } from '@locales/loader'

interface Props {
  children?: React.ReactNode
}

export default function IntlWrapper({ children }: Props) {
  const [currentLocale, setCurrentLocale] = React.useState('')
  const [antdLocaleData, setAntdLocaleData] = React.useState<Locale>(null)

  function loadLocales() {
    let targetLocale = intl.determineLocale({ cookieLocaleKey: COOKIE_KEYS.LANG }) as LOCALES_KEYS
    // default is English
    if (!find(SUPPOER_LOCALES, { value: targetLocale })) {
      targetLocale = LOCALES_KEYS.EN_US
    }
    getLocaleLoader(targetLocale).then(res => {
      intl.init({ currentLocale: targetLocale, locales: { [targetLocale]: res.localeData } }).then(() => {
        setCurrentLocale(targetLocale)
        setAntdLocaleData(res.antdLocaleData)
      })
    })
  }

  /*
   function onSelectLocale(val: string) {
   setCookie(COOKIE_KEYS.LANG, val)
   window.location.reload()
   } */

  useOnMount(loadLocales)

  if (!currentLocale) {
    return <LayoutLoading />
    // return <PageLoading />
  }
  /* const selectLanguage = (
   <Select
   css={{ position: 'absolute', top: '15px', right: '15px', width: '100px' }}
   onChange={onSelectLocale}
   value={currentLocale}
   >
   {SUPPOER_LOCALES.map(l => (
   <Select.Option key={l.value} value={l.value}>
   {l.name}
   </Select.Option>
   ))}
   </Select>
   ) */
  return (
    <LocaleProvider locale={antdLocaleData}>
      <React.Fragment>
        {/* {selectLanguage} */}
        {children}
      </React.Fragment>
    </LocaleProvider>
  )
}
