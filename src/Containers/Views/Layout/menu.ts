import Loadable from 'react-loadable'

import PageLoading from '@components/PageLoading'

const loadComponent = (loader: () => Promise<any>) => Loadable({ loader, loading: PageLoading })

export const asynchronousComponents = {
  SocketDebugger: loadComponent(() => import('@views/SocketDebugger')),
  Users: loadComponent(() => import('@views/Users')),

  Test: loadComponent(() => import('@views/Test')),
}

// all routers key
export type AsynchronousComponentKeys = keyof typeof asynchronousComponents

export interface RouteMenu {
  title: string
  id: number
  pid?: number
  path?: string
  icon?: string
  component?: AsynchronousComponentKeys
  exact?: boolean
}

export interface MenuInTree extends RouteMenu {
  children?: MenuInTree[]
}

export interface IMenuInTree extends RouteMenu {
  children?: IMenuInTree[]
}

export const menu: RouteMenu[] = [
  {
    id: 1,
    path: '/',
    title: 'SocketDebugger',
    icon: 'coffee',
    component: 'SocketDebugger',
    exact: true,
  },
  {
    id: 2,
    path: '/users',
    title: 'Users',
    icon: 'user',
    component: 'Users',
    exact: true,
  },
  {
    id: 3,
    path: '/test',
    title: 'Test',
    icon: 'user',
    component: 'Test',
    exact: true,
  },
]


export function filterMenus(signedin: boolean) {
  // eslint-disable-next-line arrow-body-style
  const filtered = filter(menus, (el: RouteMenu) => {
    return el.id.length > 0
  })
  if (signedin === true) {
    return filtered
  }
  // eslint-disable-next-line arrow-body-style
  return filter(filtered, (el: RouteMenu) => {
    return el.signedin === false
  })
}

export default menu
