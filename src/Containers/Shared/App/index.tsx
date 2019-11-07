/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'
import 'antd-mobile/dist/antd-mobile.css'
import Loadable from 'react-loadable'

import { HashRouter, Router, Switch, Route } from 'react-router-dom'
import { createHashHistory } from 'history'
import { syncHistoryWithStore } from 'mobx-react-router'
import { ThemeProvider } from 'emotion-theming'


import * as store from '@store/index'
import PageLoading from '@components/PageLoading'
import Error from '@components/Error'
import { Theme } from '@themes/theme'
import DarkTheme from '@themes/dark.theme'


import { HideAni, ShowPopoverAni, ModalHeightAni, mq, mqMin } from '@styles/base.style'
import IntlWrapper from './IntlWrapper'
import Provider from './Provider'

const hashHistory = createHashHistory()
const history = syncHistoryWithStore(hashHistory, store.routerStore)

const PrimaryLayout = Loadable({
  loader: () => import('@views/Layout'),
  loading: PageLoading,
})

const Login = Loadable({
  loader: () => import( '@views/Login'),
  loading: PageLoading,
})


const GlobalStyle = (theme: Theme) => css`
  .ant-layout,
  .ant-layout-content {
    background: ${theme.color.lowestBg} !important;
  }

  #app {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  /* font 설정 */
  * {
    font-family: 'Roboto', 'Noto Sans CJK KR', 'Malgun Gothic', '맑은 고딕', 'Apple SD Gothic Neo', '돋움', dotum, sans-serif !important;
    user-select: none;
  }
  
  
  html {
    font-size: 10px;
  }
  body {
    font-size: 1rem;
    font-weight: 600;
    background-color: ${theme.color.lowestBg};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    z-index: -1;
    width: 100%;
    height: 100% - 100px;    
  }
  input,
  label,
  .ant-input.contents,textarea {
    user-select: auto;
  }
  .ant-input {
    background: ${theme.color.TP} !important;
    transition: all 1s;
    /* 로그인 화면 아이디, 비밀번호 입력란 */
    &#username,
    &#password {
      background: ${theme.color.TP} !important;
    }
  }
  .ant-input:hover,
  .ant-input:focus,
  .ant-input:active {
    border-bottom: 1px solid ${theme.color.TP} !important;
    box-shadow: 0 0 0 2px ${theme.color.primaryBg} !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${theme.color.themeTxt};
  }
  p,
  span,
  div,
  a {
    margin-bottom: 0;
    font-size: 12px;
    color: ${theme.color.themeTxt};
  }
  a {
    &:hover {
      color: ${theme.color.primary};
    }
  }
  p {
    display: inline-block;
  }
  ul,
  ol,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  svg,
  svg path {
    fill: currentcolor;
  }
  /* carousel active색 설정 */
  .am-carousel-wrap-dot-active > span {
    position: relative;
    background: ${theme.color.primary};
  }

  /* 서랍 메뉴 */
  /* 서랍메뉴 선택된 것 색 변경 */
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected path {
    fill: ${theme.color.primary};
  }
  .center-table {
    table td {
      text-align: center;
    }
    .ant-table-thead > tr > th {
      text-align: center;
    }
  }
  .ant-menu-item:active,
  .ant-menu-submenu-title:active {
    background: ${theme.color.primaryBg} !important;
    p,
    svg path {
      color: ${theme.color.primary};
      fill: ${theme.color.primary};
    }
  }

  /* antd checkbox */
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${theme.color.primary} !important;
    border-color: ${theme.color.primary} !important;
  }

  /* antd radio button */
  .ant-radio-group .ant-radio-button-wrapper-disabled.ant-radio-button-wrapper {
    background-color: ${theme.color.disabledBg};
    color: ${theme.color.disabled};
    span,
    p {
      color: ${theme.color.disabled};
    }
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active,
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):first-child {
    border: none !important;
    box-shadow: none !important;
  }
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
    background: ${theme.color.primary} !important;
  }

  /* drawer */
  .ant-drawer-content {
    .ant-drawer-wrapper-body {
      background: ${theme.color.contentsBg};
      .ant-drawer-header {
        padding: 15.5px 24px;
        background: ${theme.color.headerBg};
        text-align: center;
        border-bottom: ${theme.border.line};
        .ant-drawer-title {
          color: ${theme.color.titleTxt};
        }
        .ant-drawer-close {
          color: ${theme.color.titleTxt};
        }
      }
      .ant-drawer-body {
        padding: 0;
      }
    }
  }
  /* popup contents scroll되도록 */
  .ant-drawer-wrapper-body {
    height: calc(100vh - 0.01px);
    overflow-y: scroll;
  }
  /* popoup 상단 선 제거 */
  .ant-drawer-header {
    /* border-bottom: none !important; */
  }
  .loginPopup.ant-drawer-bottom.ant-drawer-open .ant-drawer-content-wrapper,
  .loginPopup.ant-drawer-bottom .ant-drawer-content,
  .Message.ant-drawer-bottom.ant-drawer-open .ant-drawer-content-wrapper,
  .Message.ant-drawer-bottom .ant-drawer-content,
  .PickSale.ant-drawer-bottom.ant-drawer-open .ant-drawer-content-wrapper,
  .PickSale.ant-drawer-bottom .ant-drawer-content {
    border-radius: 10px 10px 0 0;
  }
  /* round Drawer */
  .Message {
    .ant-drawer-content {
      .ant-drawer-wrapper-body {
        border-radius: 10px 10px 0 0;
        .ant-drawer-body {
          border-radius: 10px 10px 0 0;
        }
      }
    }
  }
  /* login error */
  .has-error .ant-form-explain {
    font-size: 10px;
  }

  /* collapse */
  .ant-collapse {
    background-color: ${theme.color.contentsBg} !important;
  }
  .ant-collapse > .ant-collapse-item > .ant-collapse-header,
  .ant-collapse-content > .ant-collapse-content-box {
    background: ${theme.color.contentsBg};
  }
  .ant-collapse,
  .ant-collapse-item:last-child > .ant-collapse-content,
  .ant-collapse > .ant-collapse-item:last-child,
  .ant-collapse > .ant-collapse-item:last-child > .ant-collapse-header {
    border-radius: 0 !important;
  }
  .ant-collapse,
  .ant-collapse-content,
  .ant-collapse > .ant-collapse-item {
    border: none !important;
  }

  /* accordion */
  .am-accordion {
    border: none;
  }
  .am-accordion::before,
  .am-accordion .am-accordion-item .am-accordion-header::after {
    background-color: ${theme.color.disabled} !important;
  }
  .am-accordion .am-accordion-item .am-accordion-header {
    position: relative;
    background: ${theme.color.headerBg};
  }
  .am-accordion .am-accordion-item .am-accordion-content {
    background: ${theme.color.innerBg};
  }
  .am-accordion .am-accordion-item .am-accordion-content .am-accordion-content-box::after,
  .am-accordion::before,
  .am-accordion .am-accordion-item .am-accordion-header::after {
    display: none !important;
  }

  /* list */
  .ant-list.ant-list-split .ant-list-header {
    border-bottom: ${theme.border.line};
  }
  /* antd-mobile */
  .am-list .am-list-item {
    padding-left: 0;
    .am-list-line {
      padding: 0 20px;
    }
  }

  /* select */
  .ant-select-open .ant-select-selection,
  .ant-select-focucsed .ant-select-selection,
  .ant-select-selection:focus,
  .ant-select-selection:active {
    box-shadow: 0 0 0 2px rgba(186, 228, 217, 0.2);
  }
  .ant-select-dropdown-menu .ant-select-dropdown-menu-item {
    background: ${theme.color.contentsBg};
    &:hover {
      background: ${theme.color.primaryBg};
    }
  }
  .ant-select-dropdown-menu .ant-select-dropdown-menu-item.ant-select-dropdown-menu-item-selected {
    background: ${theme.color.primary};
  }

  /* Modal */
  /* antd-mobile */
  .am-modal-content {
    background: ${theme.color.betslipBg};
    .am-modal-header {
      padding-bottom: 18px;
      .am-modal-title {
        color: ${theme.color.themeTxt};
        font-size: ${theme.font.large};
      }
    }
  }
  /* 배당률 변경 모달창 */
  .change-rate .am-modal-content .am-modal-header {
    padding-bottom: 2px;
  }
  .am-modal-transparent {
    width: calc(100vw - 20%) !important;
    .am-modal-content {
      padding-top: 40px;
      border-radius: 0 !important;
      .am-modal-body {
        padding: 0 20px 18px;
      }
    }
  }
  .am-modal-popup .am-modal-content {
    padding: 30px 20px 20px;
    border-radius: 10px 10px 0 0;
    .am-modal-footer .am-modal-button-group-v .am-modal-button::before {
      display: none;
    }
  }
  /* 상단 여백 좁은 팝업 */
  .short-top.am-modal-popup .am-modal-content {
    padding: 12px 20px 20px;
    .am-modal-body {
      overflow: visible;
    }
  }
  /* 이벤트 팝업 */
  .event.am-modal.am-modal-transparent {
    .am-modal-content {
      padding: 14px 10px !important;
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 42px;
        left: 0;
        width: 100%;
        border-bottom: ${theme.border.line};
      }
    }
  }
  /* 베팅권 팝업 */
  .betting-coupon.am-modal-popup-slide-up {
    .am-modal-content {
      .am-modal-header {
        padding-bottom: 0;
      }
    }
  }
  /* matchup filter popup */
  .filter-popup.am-modal.am-modal-transparent {
    .am-modal-content {
      padding: 0;
    }
    button.ant-modal-close {
      display: none;
    }
  }
  /* 채팅 팝업 */
  .chat.am-modal {
    height:auto;
    transition: all .3s;
    .am-modal-content {
      padding:0;
      background: ${theme.color.chattingTabBg};
      .am-modal-header{
        padding: 10px 15px 4px;
        background: ${theme.color.chattingTabBg};
        .am-modal-title {
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
        }
      } 
    }
    .ant-list-items {
      position: relative;
      bottom: 0;
      width: 100%;
      height: auto;
      max-height: 217px;
      overflow-y: scroll;
    }
  }
  .max.am-modal {
    transition: all .3s;
    animation: ${ModalHeightAni} 1s forwards;
    .ant-list-items {
      max-height: calc(100vh - 108px);
    }
    .ant-list-split .ant-list-item:last-child {
      margin-bottom: 0;
    }
    .arrow {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }

  .ant-modal {
    max-width: calc(100vw - 20%) !important;
    /* padding: 24px 24px 5px !important; */
  }
  .ant-modal .ant-modal-body {
    padding: 40px 30px 0;
  }
  .ant-modal .ant-modal-content {
    border-radius: 0;
    background: ${theme.color.contentsBg};
  }
  .ant-modal-footer {
    padding: 18px 20px !important;
    border-top: none !important;
    text-align: center !important;
    &::after {
      content: '';
      display: block;
      clear: both;
    }
    button + button {
      margin-left: 14px !important;
    }
  }
  /* message */
  .ant-message {
    .ant-message-notice-content {
      max-width: calc(100vw - 20px);
      min-height: 30px;
      height: auto;
      line-height: 1.5rem;
      padding: 5px 20px;
      text-align: center;
      border: ${theme.border.default};
      border-radius: 50px;
      color: ${theme.color.themeTxt};
      background: ${theme.color.lowestBg};
    }
  }
  .ant-message-info .anticon,
  .ant-message-loading .anticon {
    color: ${theme.color.primary};
  }

/* popover */
  .ant-popover.zoom-big-leave {
    .special-popover {
      animation: ${HideAni} 0.25s ease-in-out;
    }
  }
  .ant-popover .ant-popover-inner,
  .ant-popover-placement-top > .ant-popover-content > .ant-popover-arrow,
  .ant-popover .ant-popover-content > .ant-popover-arrow {
    background: ${theme.color.themeTxt};
    border-color: ${theme.color.themeTxt} !important;
    p, span {
      color: ${theme.color.chattingTabBg};
    }
  }
  .ant-popover .ant-popover-inner {
    max-height: 60vh;
    overflow-x: hidden;
    overflow-y: scroll;
    /* border-radius: 10px 10px 10px 10px; */
  }
  /* 알림 popover */
  .ant-popover.ant-popover-placement-bottom {
    left: 15vw !important;
    width: 80vw;
    padding-top:0;
    box-shadow: 0 0 10px rgba(0,0,0,.5);
    .ant-popover-inner,
   .ant-popover-content > .ant-popover-arrow,
  .ant-popover-content > .ant-popover-arrow {
    background: ${theme.color.themeTxt};
    border-color: ${theme.color.themeTxt} !important;
  }
    .alert-bakcground  {
      display:none;
      opacity:0;        
      border: none;
      &::before {
        display:none;
      }
      &::after{
        content: '';
        display:none;
          /* display: block; */
          position:absolute;
          top:0;
          left:0;
          background: rgb(0,0,0);  
          border-radius:50%;
      }
    }
    &:not(.ant-popover-hidden) {
      .alert-bakcground {
        z-index:-1;
        display:block;
        position: absolute;
        top:-40px;
        left:-20vw;
        width: 100vw;
        height:100vh;
        animation: ${ShowPopoverAni} .3s forwards ease-in-out;
        &::after {
            width: 100%;
            height:100%;      
            border-radius:0;
          }
      }
    }
      .ant-popover-content > .ant-popover-arrow {
        top: -3px;
        left: auto;
        right: 8.8vw;
        background: ${theme.color.themeTxt};
        border-color: ${theme.color.themeTxt};
        ${mq[0]} {
          right: 11vw;
        }
        ${mqMin[1]} {
          right: 7.5vw;
        }
        ${mqMin[2]} {
          right: 4vw;
        }
        ${mqMin[3]} {
          right: 1.6vw;
        }
        ${mqMin[4]} {
          right: 0;
        }
      }
      .ant-popover-inner .ant-popover-title {
        /* display:none; */
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        height: 38px;
        line-height: 3rem;
        background: ${theme.color.disabledBg};
        border-bottom: none;
        .read-btn {
          top: 5px;
          width: 110px;
          height: 18px;
          padding:0;
          line-height: 1.8rem;
          font-size: ${theme.font.small};
        }
      }
      .ant-popover-inner-content {
        padding: 0;
      }
  }
  /* 스페셜 popover */
   .ant-popover.ant-popover-placement-bottomLeft {
     padding-top: 0;
     /* margin-top: -20px; */
    .ant-popover-inner-content {
      padding: 12px 16px 10px;
    }
    .ant-popover-content .ant-popover-arrow {
      top:-3px;
    }
  }

  /* pagination */
  .am-pagination {
    display: inline-block;
  }
  .am-pagination-wrap {
    font-size: ${theme.font.medium};
    .active {
      color: ${theme.color.primary};
    }
  }
  .ant-pagination-simple .ant-pagination-simple-pager input {
    color: ${theme.color.themeTxt} !important;
    background: ${theme.color.disabled} !important;
    border-radius: 0 !important;
  }

  /* Tab */
  .am-tabs .am-tabs-tab-bar-wrap .am-tabs-default-bar {
    background-color: ${theme.color.contentsBg} !important;
    &::after {
      content: '';
      z-index: -1;
      position: absolute;
      bottom: 0;
      width: 100%;
      display: block;
      border-bottom: ${theme.border.line};
    }
  }
  .am-tabs-default-bar-top .am-tabs-default-bar-tab::after {
    display: none !important;
  }
  .am-tabs-default-bar-top .am-tabs-default-bar-nextpage,
  .am-tabs-default-bar-bottom .am-tabs-default-bar-nextpage,
  .am-tabs-default-bar-top .am-tabs-default-bar-prevpage,
  .am-tabs-default-bar-bottom .am-tabs-default-bar-prevpage {
    display: none;
  }

  /* list */
  .am-list-body {
    background-color: ${theme.color.lowestBg};
  }
  .am-list-body::before {
    display: none !important;
  }
  .am-list-body::after {
    background-color: ${theme.color.lowestBg} !important;
  }
  .am-list-footer {
    margin-top: 10px;
    padding: 0;
  }

  /* grid */
  .am-grid .am-flexbox {
    background-color: ${theme.color.contentsBg};
  }
`

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Provider>
        <Global styles={GlobalStyle} />
        <IntlWrapper>
          <Router history={history}>
            <HashRouter>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route path="/" component={PrimaryLayout} />
                <Route component={Error} />
              </Switch>
            </HashRouter>
          </Router>
        </IntlWrapper>
      </Provider>
    </ThemeProvider>
  )
}

export default App
