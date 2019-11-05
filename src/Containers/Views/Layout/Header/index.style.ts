import { css } from '@emotion/core'
import styled, { Theme } from '@themes/theme'

export const MenuBtnStyle = css`
  top: 0;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
`
export const MenuStyle = styled.span`
  svg {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    width: auto;
    height: 15px;
    transform: translate(-50%, -50%);
    path {
      fill: ${props => props.theme.color.themeTxt};
    }
  }
`
export const LogoStyle = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  height: 20px;
  transform: translate(-50%, -50%);
  path {
    fill: ${props => props.theme.color.themeTxt} !important;
  }
`
export const MainHeader = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 45px;
  height: 45px;
  padding: 8px 20px;
  line-height: 2rem;
  background: ${props => props.theme.color.headerBg};
`
export const right = css`
  float: right;
  position: relative;
  top: -3px;
  width: auto;
  height: 100%;
  overflow: visible;
`
export const LoginBtnStyle = css`
  width: 62px;
  height: 30px;
  padding: 0;
  line-height: 3rem;
  &:hover::before {
    transform: scaleX(1.1) scaleY(1.3);
  }
`
export const HeaderIcoStyle = (theme: Theme) => css`
  height: 26px;
  margin-left: 10px;
  padding: 2px 4px;
  border: none;
  &:hover::before {
    display: none;
  }
  &.alert {
    /* 알림 아이콘 눌렀을 떄 css */
    &.click {
      path {
        fill: ${theme.color.primary};
      }
    }
  }
`
export const IconStyle = styled.span`
  position: relative;
  top: 2px;
  width: 16px;
  margin: 0 0 0 10px;
  svg path {
    fill: ${props => props.theme.color.themeTxt};
    transition: all 0.3s;
  }
  &.alert {
    top: 0;
    margin: 0;
  }
  &.message,
  &.profile {
    width: 18px;
  }
  &.message {
    /* top: 0; */
    margin: 0;
  }
`
export const BadgeStyle = (theme: Theme) => css`
  position: absolute;
  top: -1px;
  right: -6px;

  .am-badge-text {
    height: 14px;
    line-height: 1.5rem;
    padding: 0 4px;
    font-size: ${theme.font.tiny};
    background: ${theme.color.important};
  }
`
// poopover
export const ListBtnStyle = css`
  width: 100%;
  height: auto;
  padding: 0;
  border: none;
  text-align: left;

  &::before {
    display: none;
  }
`
export const ListWrap = styled.article`
  width: 100%;
  background: ${props => props.theme.color.themeTxt};
  .ant-list-bordered {
    border: none;
    .ant-list-item {
        position: relative;
      height: 60px;
      padding: 7px 10px;
      border: none;
      /* border-bottom: 1px solid ${props => props.theme.color.detail}; */
      &::before {
        content: '';
        display: block;
        position: absolute;
        bottom:0;
        left:0;
        left:50%;
        width: 90%;
        border-bottom: 1px solid ${props => props.theme.color.checkbox};
        transform: translate(-50%,0);
        opacity: .5;
      }
    }
  }
`
export const ListRowStyle = css`
  position: relative;
  width: 100%;
  line-height: 1.4rem;
`
export const DummyStyle = styled.span`
  width: 14px;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-70%, -50%);
  }
`
export const PopoverDate = styled.span`
  display: block;
  color: ${props => props.theme.color.lose};
  font-size: ${props => props.theme.font.small};
`
export const PopoverTitle = styled.p`
  display: block;
  width: 100%;
  color: ${props => props.theme.color.chattingTabBg};
`
export const PopoverContent = styled.p`
  width: 100%;
  color: ${props => props.theme.color.lose};
  font-size: ${props => props.theme.font.small};
`
