import React, { Fragment } from 'react'
import intl from 'react-intl-universal'
import { find } from 'lodash'
import { LocaleProvider } from 'antd-mobile'
import { Locale } from 'antd/lib/locale-provider'
import { useOnMount } from '@helpers/reactExt'
import { COOKIE_KEYS } from '@constants/index'


import { SUPPOER_LOCALES, LOCALES_KEYS, getLocaleLoader } from '@locales/loader'

interface Props {
  children?: React.ReactNode
}


export default function IntlWrapper({ children }: Props) {

  const [antDesignLocaleData, setAntDesignLocaleData] = React.useState<Locale>(null)

  function loadLocales():void {
    let targetLocale = intl.determineLocale({ cookieLocaleKey: COOKIE_KEYS.LANG }) as LOCALES_KEYS

    if (!find(SUPPOER_LOCALES, { value: targetLocale })) {
      targetLocale = LOCALES_KEYS.EN_US
    }

    getLocaleLoader(targetLocale).then(res => {
      intl.init({ currentLocale: targetLocale, locales: { [targetLocale]: res.localeData } }).then(() => {
        setAntDesignLocaleData(res.antdLocaleData)
      })
    })

  }

  useOnMount(loadLocales)

  return (
    <LocaleProvider locale={antDesignLocaleData}>
      <Fragment>
        {children}
      </Fragment>
    </LocaleProvider>
  )
}
