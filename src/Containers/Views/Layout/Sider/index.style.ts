import { css } from '@emotion/core'
import styled, { Theme } from '@themes/theme'
import { mq } from '@styles/base.style'

export const DrawerWrap = (theme: Theme) => css`
  .ant-layout-sider-light,
  .ant-drawer-body,
  .css-1vwmjlj-Sider {
    background: ${theme.color.contentsBg};
  }
  .ant-drawer-content-wrapper {
    width: 80vw !important;
    ${mq[0]} {
      width: 85vw !important;
    }
  }
  .ant-drawer-body {
    height: 100vh;
    padding: 0;
    overflow-x: hidden;
  }
  .ant-layout-sider {
    z-index: 10;
    width: 100%;
  }
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .ant-divider,
  .ant-divider-horizontal,
  .ant-divider-with-text-left {
    margin: 10px 0;
  }
`
export const SiderStyle = (theme: Theme) => css`
  padding: 0 30px;

  .ant-menu-root.ant-menu-vertical,
  .ant-menu-root.ant-menu-vertical-left,
  .ant-menu-root.ant-menu-vertical-right,
  .ant-menu-root.ant-menu-inline {
    background: ${theme.color.contentsBg};
  }
`
export const TitTxt = css({
  position: 'absolute',
  left: '50%',
  top: '50%',
  width: '100%',
  margin: 0,
  fontWeight: 500,
  textAlign: 'center',
  transform: 'translate(-50%, -80%)',
})

export const MemberType = css({
  position: 'absolute',
  left: 0,
  top: 0,
  color: '#838383',
})

export const Brand = (theme: Theme) => css`
  position: relative;
  z-index: 1;
  align-items: center;
  justify-content: center;
  height: 55px;
  padding: 25px 0 0;
  background: ${theme.color.contentsBg};
`
export const Guest = (theme: Theme) =>
  css`
    position: relative;
    z-index: 1;
    align-items: center;
    justify-content: center;
    padding: 25px 10px 0;
    background: ${theme.color.contentsBg};
    height: 200px;
    .ant-btn {
      position: absolute;
      top: 0;
      right: 0;
      width: 40px;
      height: 40px;
      background: ${theme.color.TP};
      /* overflow: hidden; */
      box-shadow: none;
      &::before {
        position: absolute;
        top: 16.5px;
        left: 15px;
        display: block;
        width: 20px;
        height: 20px;
        background: ${theme.color.TP};
        border-left: 2px solid rgb(77, 77, 77);
        border-radius: 0;
        transform: rotate(45deg);
        opacity: 1;
        content: '';
      }
      &::after {
        position: absolute;
        top: 3.5px;
        right: 5px;
        display: block;
        width: 20px;
        height: 20px;
        background: ${theme.color.TP};
        border-left: 2px solid rgb(77, 77, 77);
        transform: rotate(-45deg);
        opacity: 1;
        content: '';
      }
    }
  `
export const CloseBtn = (theme: Theme) =>
  css`
    position: absolute;
    top: 0;
    right: -25px;
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: ${theme.color.TP};
    border: none;
    box-shadow: none;
  `
export const CloseBtnTxt = css({
  position: 'absolute',
  lineHeight: '9999',
})
export const UserName = (theme: Theme) =>
  css`
    display: inline-block;
    margin: 0;
    margin-right: 5px;
    color: ${theme.color.themeTxt};
    font-weight: 900;
    font-size: ${theme.font.title};
    &::before {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 1px solid ${theme.color.disabled};
    }
  `
export const UserType = (theme: Theme) =>
  css`
    color: ${theme.color.important};
  `
export const LoginWrap = css({
  position: 'relative',
  height: '170px',
})

export const LoginBtn = (theme: Theme) =>
  css`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 30px;
    color: ${theme.color.btnTxt};
    border-radius: 50px;
  `

export const MoneyStyle = styled.span`
  /* z-index: 9999; */
  position: relative;
  float: right;
  top: 3px;
  width: 18px;
  margin: 0 0 0 8px;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
  ${mq[0]} {
    width: 15px;
  }
`
export const UserBtn = css`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  margin: 5px 0;
`
export const UserSideBtn = css`
  width: 100%;
  height: 30px;
  margin-top: 15px;
  ${mq[0]} {
    margin-top: 10px;
  }
`
export const MenuContainer = (theme: Theme) =>
  css`
    flex: 1;
    height: auto;
    margin-top: 14px;
    overflow-x: hidden;
    background: ${theme.color.contentsBg};
  `
export const MoneyWrap = css`
  position: relative;
  height: 155px;
  overflow: hidden;
  ${mq[0]} {
    height: 145px;
  }
`
export const MoneyRow = (theme: Theme) => css`
  margin: 8px 0 0;
  line-height: 2.5rem;
  height: 25px;
  .Txt {
    z-index: 1;
    position: relative;
    color: ${theme.color.detail};
  }
  ${mq[0]} {
    margin: 6px 0 0;
  }
`
export const ColStyle = css`
  border: 1px solid blue;
`
export const MoneyRowWrap = (theme: Theme) =>
  css`
    float: right;
    text-align: right;
    width: 80%;
    &::before {
      position: absolute;
      right: 0;
      display: block;
      width: 83%;
      height: 25px;
      /* background: ${theme.color.disabled}; */
      border-radius: 50px;
      content: '';
    }
  `

export const MoneyRowWrapNum = styled.span`
  position: relative;
  display: inline-block;
  width: 73%;
  top: 0px;
  font-size: ${props => props.theme.font.large};
`


export const MenuItemContainer = styled.div`
  padding: 32px 0 10px;
  ${mq[0]} {
    padding: 20px 0 0;
  }
`
export const MenuItemWrap = styled.div`
  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border: none;
  }
  .ant-menu {
    .ant-menu-item {
      display: inline-block;
      width: 25%;
      height: 50px;
      padding: 0 !important;
      margin: 0 0 26px !important;
      text-align: center;
      line-height: 2.2rem;
      ${mq[0]} {
        margin: 0 0 20px !important;
      }
      &::after {
        display: none;
      }
      svg path {
        color: ${props => props.theme.color.themeTxt};
        fill: ${props => props.theme.color.themeTxt};
      }
      svg {
        display: block;
        margin: 0 auto;
      }
      p {
        font-size: ${props => props.theme.font.small};
        color: ${props => props.theme.color.detail};
      }
    }
    .ant-menu-item-selected {
      background: ${props => props.theme.color.TP} !important;
      p,
      svg path {
        color: ${props => props.theme.color.primary};
        fill: ${props => props.theme.color.primary};
      }
    }
  }
`

export const IconStyle = css`
  padding: 0 20px;
  margin: 0 20px;
  svg {
    position: relative;
    width: 32px;
    height: 32px;
    margin-right: 15px;
    ${mq[0]} {
      width: 25px;
      height: 25px;
    }
  }
`