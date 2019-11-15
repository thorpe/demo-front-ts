import React, { createContext, ReactElement } from 'react'
import { Observer } from 'mobx-react'

import * as store from '@store/index'
import { RootStore } from '../../../../typings/store'


interface ChildrenProps<T> {
  children: (value: T) => ReactElement<any>
}

export const RootContext = createContext<RootStore>(null)

/**
 * 已包含Observer
 * @param param0
 */
export const RootConsumer = ({ children }: ChildrenProps<RootStore>) => <Observer>{() => children(store)}</Observer>

export default function Provider({ children }: { children?: React.ReactNode }) {
  console.log('3--------------------------------------------')
  console.log('Container > Shared > App > Provider')
  return <RootContext.Provider value={{ ...store }}>{children}</RootContext.Provider>
}
