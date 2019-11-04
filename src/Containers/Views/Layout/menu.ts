import Loadable from 'react-loadable'
import { filter } from 'lodash'

import PageLoading from '@components/PageLoading'
import {
  ClubPotalIco,
} from '@shared/Icon/MenuIcon'

const loadComponent = (loader: () => Promise<any>) => Loadable({ loader, loading: PageLoading })

export const asynchronousComponents = {
  SocketDebugger: loadComponent(() => import('@views/SocketDebugger')),
  Users: loadComponent(() => import('@views/Users')),

  Test: loadComponent(() => import('@views/Test')),
}

// all routers key
export type AsynchronousComponentKeys = keyof typeof asynchronousComponents

export interface RouteMenu {
  id: string
  exact: boolean
  pid?: number
  signedin?: boolean
  path?: string
  name?: string
  icon?: () => JSX.Element
  component?: AsynchronousComponentKeys
  namespace?: string // models's namespace to set popup page
  locale?: string
  invisible?: boolean
}
export interface MenuInTree extends RouteMenu {
  children?: MenuInTree[]
}

export const menu: RouteMenu[] = [
  {
    id: '1',
    path: '/',
    name: 'SocketDebugger',
    icon: ClubPotalIco,
    component: 'SocketDebugger',
    locale: 'menu.sider.search-club',
    signedin: false,
    exact: true,
  },
  {
    id: '2',
    path: '/users',
    name: 'Users',
    icon: ClubPotalIco,
    component: 'Users',
    locale: 'menu.sider.search-club',
    signedin: false,
    exact: true,
  },
  {
    id: '3',
    path: '/test',
    name: 'Test',
    icon: ClubPotalIco,
    component: 'Test',
    locale: 'menu.sider.search-club',
    signedin: false,
    exact: true,
  },
]


export function filterMenus(signedin: boolean) {

  const filtered = filter(menu, (el: RouteMenu) => {
    return el.id.length > 0
  })
  if (signedin === true) {
    return filtered
  }

  return filter(filtered, (el: RouteMenu) => {
    return el.signedin === false
  })
}

export default menu
