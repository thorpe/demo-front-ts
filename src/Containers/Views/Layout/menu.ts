import Loadable from 'react-loadable'
import { filter } from 'lodash'

import PageLoading from '@components/Loading'
import {
  ClubPortalIco,
} from '@components/Icon/MenuIcon'

const loadComponent = (loader: () => Promise<any>) => Loadable({ loader, loading: PageLoading })

export const asynchronousComponents = {
  SocketDebugger: loadComponent(() => import('@views/Socket')),
  Users: loadComponent(() => import('@views/Test')),

  Test: loadComponent(() => import('@views/Test')),
  Bettor: loadComponent(() => import('@views/Bettor')),
  List: loadComponent(() => import('@views/List')),
  Login: loadComponent(() => import('@views/Login')),
  Toast: loadComponent(() => import('@views/Toast')),
  Dialog: loadComponent(() => import('@views/Dialog')),
  Modal: loadComponent(() => import('@views/Modal')),
  Carousel: loadComponent(() => import('@views/Carousel')),
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
    name: 'Socket',
    icon: ClubPortalIco,
    component: 'SocketDebugger',
    locale: 'menu.sider.socket',
    signedin: false,
    exact: true,
  },
  {
    id: '2',
    path: '/users',
    name: 'Users',
    icon: ClubPortalIco,
    component: 'Users',
    locale: 'menu.sider.users',
    signedin: true,
    exact: true,
  },
  {
    id: '3',
    path: '/test',
    name: 'Test',
    icon: ClubPortalIco,
    component: 'Test',
    locale: 'menu.sider.test',
    signedin: false,
    exact: true,
  },
  {
    id: '4',
    path: '/bettor',
    name: 'Test',
    icon: ClubPortalIco,
    component: 'Bettor',
    locale: 'menu.sider.bettor',
    signedin: false,
    exact: true,
  }, {
    id: '5',
    path: '/list',
    name: 'List',
    icon: ClubPortalIco,
    component: 'List',
    locale: 'menu.sider.list',
    signedin: false,
    exact: true,
  }, {
    id: '6',
    path: '/login',
    name: 'Login',
    icon: ClubPortalIco,
    component: 'Login',
    locale: 'menu.sider.login',
    signedin: false,
    exact: true,
  }, {
    id: '7',
    path: '/toast',
    name: 'Toast',
    icon: ClubPortalIco,
    component: 'Toast',
    locale: 'menu.sider.toast',
    signedin: false,
    exact: true,
  }, {
    id: '9',
    path: '/dialog',
    name: 'Dialog',
    icon: ClubPortalIco,
    component: 'Dialog',
    locale: 'menu.sider.dialog',
    signedin: false,
    exact: true,
  }, {
    id: '11',
    path: '/modal',
    name: 'Modal',
    icon: ClubPortalIco,
    component: 'Modal',
    locale: 'menu.sider.modal',
    signedin: false,
    exact: true,
  }, {
    id: '12',
    path: '/carousel',
    name: 'Carousel',
    icon: ClubPortalIco,
    component: 'Carousel',
    locale: 'menu.sider.carousel',
    signedin: false,
    exact: true,
  }
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
