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
  List: loadComponent(() => import('@views/List')),
  Login: loadComponent(() => import('@views/Login')),
  Toast: loadComponent(() => import('@views/Toast')),
  Dialog: loadComponent(() => import('@views/Dialog')),
  Modal: loadComponent(() => import('@views/Modal')),
  Carousel: loadComponent(() => import('@views/Carousel')),



  Dashboard: loadComponent(() => import('@views/Dashboard')),
  Category: loadComponent(() => import('@views/Category')),
  Search: loadComponent(() => import('@views/Search')),
  MyPage: loadComponent(() => import('@views/MyPage')),
}

// all routers key
export type AsynchronousComponentKeys = keyof typeof asynchronousComponents

export interface RouteMenu {
  id: string
  position: string
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
    position: 'footer',
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
    position: 'footer',
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
    position: 'left',
    path: '/test',
    name: 'Test',
    icon: ClubPortalIco,
    component: 'Test',
    locale: 'menu.sider.test',
    signedin: false,
    exact: true,
  },
  {
    id: '5',
    position: 'left',
    path: '/list',
    name: 'List',
    icon: ClubPortalIco,
    component: 'List',
    locale: 'menu.sider.list',
    signedin: false,
    exact: true,
  },
  {
    id: '6',
    position: 'left',
    path: '/login',
    name: 'Login',
    icon: ClubPortalIco,
    component: 'Login',
    locale: 'menu.sider.login',
    signedin: false,
    exact: true,
  },
  {
    id: '7',
    position: 'left',
    path: '/toast',
    name: 'Toast',
    icon: ClubPortalIco,
    component: 'Toast',
    locale: 'menu.sider.toast',
    signedin: false,
    exact: true,
  },
  {
    id: '9',
    position: 'left',
    path: '/dialog',
    name: 'Dialog',
    icon: ClubPortalIco,
    component: 'Dialog',
    locale: 'menu.sider.dialog',
    signedin: false,
    exact: true,
  },
  {
    id: '11',
    position: 'left',
    path: '/modal',
    name: 'Modal',
    icon: ClubPortalIco,
    component: 'Modal',
    locale: 'menu.sider.modal',
    signedin: false,
    exact: true,
  },
  {
    id: '12',
    position: 'left',
    path: '/carousel',
    name: 'Carousel',
    icon: ClubPortalIco,
    component: 'Carousel',
    locale: 'menu.sider.carousel',
    signedin: false,
    exact: true,
  },
  {
    id: '100',
    position: 'footer',
    path: '/dashboard',
    name: 'Dashboard',
    icon: ClubPortalIco,
    component: 'Dashboard',
    locale: 'menu.sider.carousel',
    signedin: false,
    exact: true,
  },
  {
    id: '101',
    position: 'footer',
    path: '/category',
    name: 'Dashboard',
    icon: ClubPortalIco,
    component: 'Category',
    locale: 'menu.sider.carousel',
    signedin: false,
    exact: true,
  },
  {
    id: '102',
    position: 'footer',
    path: '/search',
    name: 'Search',
    icon: ClubPortalIco,
    component: 'Search',
    locale: 'menu.sider.carousel',
    signedin: false,
    exact: true,
  },
  {
    id: '103',
    position: 'footer',
    path: '/my_page',
    name: 'MyPage',
    icon: ClubPortalIco,
    component: 'MyPage',
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
