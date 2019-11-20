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
  GoogleLogin: loadComponent(() => import('@views/GoogleLogin')),
  Goods: loadComponent(() => import('@views/Goods')),

  PointList: loadComponent(() => import('@views/MyPage/PointList')),
  About: loadComponent(() => import('@views/MyPage/About')),
  BoardFaq: loadComponent(() => import('@views/MyPage/BoardFaq')),
  BoardNotice: loadComponent(() => import('@views/MyPage/BoardNotice')),
  BoardOneToOne: loadComponent(() => import('@views/MyPage/BoardOneToOne')),
  ConfigAlarm: loadComponent(() => import('@views/MyPage/ConfigAlarm')),
  CouponList: loadComponent(() => import('@views/MyPage/CouponList')),
  GoodsCommentList: loadComponent(() => import('@views/MyPage/GoodsCommentList')),
  HelpDesk: loadComponent(() => import('@views/MyPage/HelpDesk')),
  OrderList: loadComponent(() => import('@views/MyPage/OrderList')),
  ProfileUpdate: loadComponent(() => import('@views/MyPage/ProfileUpdate')),
  ShippingInfo: loadComponent(() => import('@views/MyPage/ShippingInfo')),


}

// all routers key
export type AsynchronousComponentKeys = keyof typeof asynchronousComponents

export interface RouteMenu {
  id: string
  position: string
  exact: boolean
  pid?: number
  isLogin?: boolean
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
  { id: '01', position: 'footer', path: '/', name: 'Socket', icon: ClubPortalIco, component: 'SocketDebugger', locale: 'menu.sider.socket', isLogin: false, exact: true },
  { id: '02', position: 'footer', path: '/users', name: 'Users', icon: ClubPortalIco, component: 'Users', locale: 'menu.sider.users', isLogin: true, exact: true },
  { id: '03', position: 'left', path: '/test', name: 'Test', icon: ClubPortalIco, component: 'Test', locale: 'menu.sider.test', isLogin: false, exact: true },
  { id: '05', position: 'left', path: '/list', name: 'List', icon: ClubPortalIco, component: 'List', locale: 'menu.sider.list', isLogin: false, exact: true },
  { id: '06', position: 'left', path: '/login', name: 'Login', icon: ClubPortalIco, component: 'Login', locale: 'menu.sider.login', isLogin: false, exact: true },
  { id: '07', position: 'left', path: '/toast', name: 'Toast', icon: ClubPortalIco, component: 'Toast', locale: 'menu.sider.toast', isLogin: false, exact: true },
  { id: '09', position: 'left', path: '/dialog', name: 'Dialog', icon: ClubPortalIco, component: 'Dialog', locale: 'menu.sider.dialog', isLogin: false, exact: true },
  { id: '11', position: 'left', path: '/modal', name: 'Modal', icon: ClubPortalIco, component: 'Modal', locale: 'menu.sider.modal', isLogin: false, exact: true },
  { id: '12', position: 'footer', path: '/carousel', name: 'Carousel', icon: ClubPortalIco, component: 'Carousel', locale: 'menu.sider.carousel', isLogin: false, exact: true },
  { id: '13', position: 'footer', path: '/dashboard', name: 'Dashboard', icon: ClubPortalIco, component: 'Dashboard', locale: 'menu.sider.dialog', isLogin: false, exact: true },
  { id: '14', position: 'footer', path: '/category', name: 'Dashboard', icon: ClubPortalIco, component: 'Category', locale: 'menu.sider.dialog', isLogin: false, exact: true },
  { id: '15', position: 'footer', path: '/search', name: 'Search', icon: ClubPortalIco, component: 'Search', locale: 'menu.sider.dialog', isLogin: false, exact: true },
  { id: '16', position: 'footer', path: '/my_page', name: 'MyPage', icon: ClubPortalIco, component: 'MyPage', locale: 'menu.sider.dialog', isLogin: false, exact: true },
  { id: '17', position: 'footer', path: '/google_login', name: 'GoogleLogin', icon: ClubPortalIco, component: 'GoogleLogin', locale: 'menu.sider.dialog', isLogin: false, exact: true },
  { id: '19', position: 'left', path: '/goods', name: 'Goods', icon: ClubPortalIco, component: 'Goods', locale: 'menu.sider.dialog', isLogin: false, exact: true },

  { id: '20', position: '', path: '/register', name: 'GoogleLogin', icon: ClubPortalIco, component: 'GoogleLogin', locale: 'menu.sider.carousel', isLogin: false, exact: true },
  { id: '21', position: '', path: '/find_username', name: 'GoogleLogin', icon: ClubPortalIco, component: 'GoogleLogin', locale: 'menu.sider.carousel', isLogin: false, exact: true },
  { id: '22', position: '', path: '/find_password', name: 'GoogleLogin', icon: ClubPortalIco, component: 'GoogleLogin', locale: 'menu.sider.carousel', isLogin: false, exact: true },
  { id: '24', position: '', path: '/google_login', name: 'GoogleLogin', icon: ClubPortalIco, component: 'GoogleLogin', locale: 'menu.sider.carousel', isLogin: false, exact: true },

  { id: '30', position: '', path: '/my_page/point_list', name: 'PointList', icon: ClubPortalIco, component: 'PointList', locale: 'menu.sider.carousel', isLogin: false, exact: true },
  { id: '31', position: '', path: '/my_page/about', name: 'About', icon: ClubPortalIco, component: 'About', locale: 'menu.sider.carousel', isLogin: false, exact: true },
  { id: '32', position: '', path: '/my_page/board_faq', name: 'BoardFaq', icon: ClubPortalIco, component: 'BoardFaq', locale: 'menu.sider.carousel', isLogin: false, exact: true },
  { id: '34', position: '', path: '/my_page/board_notice', name: 'BoardNotice', icon: ClubPortalIco, component: 'BoardNotice', locale: 'menu.sider.carousel', isLogin: false, exact: true },
  { id: '35', position: '', path: '/my_page/board_qna', name: 'GoogleLogin', icon: ClubPortalIco, component: 'BoardOneToOne', locale: 'menu.sider.carousel', isLogin: false, exact: true },
  { id: '36', position: '', path: '/my_page/config_alarm', name: 'ConfigAlarm', icon: ClubPortalIco, component: 'ConfigAlarm', locale: 'menu.sider.carousel', isLogin: false, exact: true },
  { id: '37', position: '', path: '/my_page/coupon_list', name: 'CouponList', icon: ClubPortalIco, component: 'CouponList', locale: 'menu.sider.carousel', isLogin: false, exact: true },
  { id: '38', position: '', path: '/my_page/goods_comment_list', name: 'GoodsCommentList', icon: ClubPortalIco, component: 'GoodsCommentList', locale: 'menu.sider.carousel', isLogin: false, exact: true },
  { id: '39', position: '', path: '/my_page/help_desk', name: 'HelpDesk', icon: ClubPortalIco, component: 'HelpDesk', locale: 'menu.sider.carousel', isLogin: false, exact: true },
  { id: '40', position: '', path: '/my_page/order_list', name: 'OrderList', icon: ClubPortalIco, component: 'OrderList', locale: 'menu.sider.carousel', isLogin: false, exact: true },
  { id: '41', position: '', path: '/my_page/profile_update', name: 'ProfileUpdate', icon: ClubPortalIco, component: 'ProfileUpdate', locale: 'menu.sider.carousel', isLogin: false, exact: true },
  { id: '42', position: '', path: '/my_page/shipping_info', name: 'ShippingInfo', icon: ClubPortalIco, component: 'ShippingInfo', locale: 'menu.sider.carousel', isLogin: false, exact: true },
  { id: '43', position: '', path: '/my_page/friend_list', name: 'ShippingInfo', icon: ClubPortalIco, component: 'ShippingInfo', locale: 'menu.sider.carousel', isLogin: false, exact: true }

  ]

export function filterMenus(isLogin: boolean) {

  const filtered = filter(menu, (el: RouteMenu) => {
    return el.id.length > 0
  })
  if (isLogin === true) {
    return filtered
  }

  return filter(filtered, (el: RouteMenu) => {
    return el.isLogin === false
  })
}

export default menu
