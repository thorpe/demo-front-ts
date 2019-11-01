import { css, keyframes } from '@emotion/core'
import styled, { ThemeProps, Theme } from './Themes/theme'

export const FontXLarge = '2.0rem'
export const FontTitle = '1.6rem'
export const FontLarge = '1.4rem'
export const FontMedium = '1.2rem'
export const FontSmall = '1rem'
export const FontTiny = '0.8rem'

export const Show = css`
  display: block;
`
export const Hide = css`
  display: none;
`
export const opacityAni = keyframes`
  0% {
    opacity:.4;
  }
  100% {
    opacity:0;
  }
`
export const ShowAni = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`
export const HideAni = keyframes`
  0% {
    opacity:1;
  }
  90% {
    opacity:0;
  }
  100% {
    opacity:0;
    display: none;
  }
`
export const ShowPopoverAni = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:.4;
  }
`
export const ModalHeightAni = keyframes`
  0% {
     height: auto;
  }
  100%  {
    height: 100%;  
    }
`

// /////////////////////////////////////////// media qurey /////////////////////////////////////////////
const breakpoints = [320, 410, 568, 768, 992, 1200]
const breakpointsH = [568, 730, 810, 1024, 1366]

export const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)
export const mqMin = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export const mqH = breakpointsH.map(bp => `@media (max-height: ${bp}px)`)
export const mqMinH = breakpointsH.map(bp => `@media (min-height: ${bp}px)`)

// /////////////////////////////////////////// button /////////////////////////////////////////////
// 공통 버튼 스타일
export const ButtonStyles = (props: ThemeProps) =>
  css`
    z-index: 1;
    position: relative;
    /* height: 45px; */
    padding: 3px 20px;
    line-height: 2.25rem;
    text-align: center;
    border: none;
    border-radius: 4px;
    box-shadow: none;
  `
export const ButtonHoverAni = keyframes`
  0% {
      transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
  }
  35% {
    transform: translate3d(-50%, -50%, 0) scale3d(50, 50, 50);
  }
  100%  {
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
  }
`
export const ButtonHoverStyles = (props: ThemeProps) =>
  css`
    overflow: hidden;
    &::before {
      content: '';
      z-index: -1;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      transform-origin: center;
      transition: transform 0.4s ease-in-out;
      transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
    }
    &:hover {
      cursor: pointer;
    }
    &:hover::before {
      background: ${props.theme.color.primaryBg};
      animation: ${ButtonHoverAni} 1s 1 ease-in-out;
    }
  `
export const PrimaryButtonHoverStyle = (props: ThemeProps) =>
  css`
    z-index: 2;
    position: relative;
    &:hover {
      cursor: pointer;
    }
    &::before {
      content: '';
      opacity: 0;
      z-index: -1;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 1.5px solid ${props.theme.color.primary};
      border-radius: 4px;
      transform: scale(1);
    }
    &:hover::before {
      transition: all 0.6s ease-in-out;
      transform: scaleX(1.05) scaleY(1.3);
      animation: ${opacityAni} 1s ease;
    }
  `
export const DefaultButtonHoverStyles = (props: ThemeProps) =>
  css`
    z-index: 2;
    position: relative;
    &:hover {
      cursor: pointer;
    }
    &::before {
      content: '';
      opacity: 0;
      z-index: -1;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 1.5px solid ${props.theme.color.detail};
      border-radius: 4px;
      transform: scale(1);
    }
    &:hover::before {
      transition: all 0.6s ease-in-out;
      transform: scaleX(1.05) scaleY(1.3);
      animation: ${opacityAni} 1s ease;
    }
  `
// button animation
export const bounce = keyframes`
from, 20%, 53%, 80%, to {
  transform: translate3d(0,0,0);
}

40%, 43% {
  transform: translate3d(0, -30px, 0);
}

70% {
  transform: translate3d(0, -15px, 0);
}

90% {
  transform: translate3d(0,-4px,0);
}
`

// 기본 버튼 css
/* 중요 버튼 */
// export const PrimaryButton = styled.button`
//   ${ButtonStyles};
//   ${PrimaryButtonHoverStyle};
//   color: ${props => props.theme.color.btnTxt};
//   background: ${props => props.theme.color.primary};
// `
/* 기본 버튼 */
export const Button = styled.button`
  ${ButtonStyles};
  ${PrimaryButtonHoverStyle};
  color: ${props => props.theme.color.btnTxt};
  background: ${props => (props.primary ? props.theme.color.primary : props.theme.color.TP)};
  border: ${props => (props.primary ? 'none' : props.theme.border.default)};
`
/* 부가 버튼 */
export const SecondaryButton = styled.button`
  ${ButtonStyles};
  ${DefaultButtonHoverStyles};
  color: ${props => props.theme.color.themeTxt};
  background: ${props => props.theme.color.contentsBg};
  border: ${props => props.theme.border.secondery};
`
/* 비활성화 */
export const DisabledButton = styled.button`
  ${ButtonStyles};
  /* ${DefaultButtonHoverStyles}; */
  color: ${props => props.theme.color.detail};
  background: ${props => props.theme.color.disabled};
`
/* 타이틀 좌측 버튼 */
export const TitleButton = styled.button`
  float: right;
  ${ButtonStyles};
  padding: 0 10px;
  color: ${props => props.theme.color.primary};
  font-size: ${FontMedium};
  background: ${props => props.theme.color.TP};
  &::before {
    display: none;
  }
  &:hover::before {
    transform: none;
  }
`

// match up 버튼 css
export const MatchButton = styled.button`
  ${ButtonStyles};
  color: ${props => props.theme.color.themeTxt};
  background: ${props => props.theme.color.disabled};
`

// button 공통
export const Btn = css({
  border: 'none',
  lineHeight: '2rem',
  boxShadow: 'none'
})

// input 공통
export const Form = styled.form`
  position: relative;
  width: 100%;
`
export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0, 0, 0, 0);
`

// /////////////////////////////////////////// text /////////////////////////////////////////////
// title 공통
export const LobyTitleWrap = styled.div`
  height: 50px;
  margin-bottom: 5px;
  padding: 20px 5px 0 20px;
  line-height: 3.2rem;
  background: ${props => props.theme.color.TP};
`
export const LobyTitle = styled.h1`
  float: left;
  color: ${props => props.theme.color.titleTxt};
  font-size: ${FontTitle};
`
export const LobyTitleIco = css`
  margin: 2px 0 0 4px !important;
  font-size: ${FontMedium};
`
// 페이지별 타이틀
export const TitleWrap = styled.header`
  position: relative;
  height: 40px;
  margin-bottom: 7px;
  padding: 0 0 14px 17px;
  line-height: 4rem;
  background: ${props => props.theme.color.headerBg};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`
export const Title = styled.h1`
  display: inline-block;
  color: ${props => props.theme.color.titleTxt};
  font-size: ${props => props.theme.font.large};
`
export const ContentWrap = styled.section`
  position: relative;
  display: block;
  height: auto;
  margin: 7px 0;
  margin-bottom: 40px;
  padding: 10px 17px;
  background: ${props => props.theme.color.contentsBg};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  /* border: 1px solid red; */
`
export const ContentTitle = styled.h2`
  position: relative;
  padding-bottom: 10px;
  color: ${props => props.theme.color.themeTxt};
  font-size: ${props => props.theme.font.medium};
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 200%;
    border-bottom: ${props => props.theme.border.line};
    transform: translate(-50%, 0);
  }
`

export const SiderMenuTitle = styled.h1`
  display: block;
  padding: 56px 0;
  color: ${props => props.theme.color.themeTxt};
  font-size: ${FontMedium};
  text-align: center;
`

// Text 정렬
export const TxtCenter = css({
  textAlign: 'center'
})
export const TxtLeft = css`
  text-align: left;
`
export const TxtRight = css({
  textAlign: 'right'
})
export const Left = css`
  float: left;
  text-align: left;
`
export const Right = css`
  float: right;
  text-align: right;
`

export const LetterSpace = (props: ThemeProps) => css`
  letter-spacing: -0.02rem;
`
// 보여지는 글자수 제한
export const TxtLimit = css({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
})
const PointStyle = (props: ThemeProps) => css`
  position: relative;
  font-size: ${props.theme.font.medium};
  color: ${props.theme.color.primary};
`
export const Point = styled.span`
  ${PointStyle};
  color: ${props => (props.primary ? props.theme.color.primary : props.theme.color.tabSubTxt)};
  &.hit {
    color: ${props => props.theme.color.hit} !important;
  }
`

// button 공통
// export const Btn = css({
//   border: 'none',
//   lineHeight: '2rem',
//   boxShadow: 'none',
// })

// /////////////////////////////////////////// Tab /////////////////////////////////////////////
export const TabWrap = styled.section`
  width: 100vw;
  .am-tabs-default-bar-top .am-tabs-default-bar-content,
  .am-tabs-default-bar-bottom .am-tabs-default-bar-content {
    justify-content: space-between;
    height: 36px;
  }
  .am-tabs-default-bar-tab {
    height: 36px;
    span {
      font-size: ${props => props.theme.font.medium};
    }
  }
  .am-tabs-default-bar-tab::after {
    display: none;
  }
  .am-tabs-default-bar-underline {
    z-index: 1;
    border: 1.5px solid ${props => props.theme.color.primary};
  }
  .am-tabs-default-bar-tab-active {
    span {
      color: ${props => props.theme.color.primary};
    }
  }
  /* 이벤트 팝업 tab */
  &.event {
    .am-tabs .am-tabs-tab-bar-wrap .am-tabs-default-bar {
      background: ${props => props.theme.color.TP} !important;
      &::after {
        display: none;
      }
      .am-tabs-default-bar-content {
        justify-content: flex-start;
      }
    }

    .am-tabs-default-bar-underline {
      display: none;
    }
    .am-tabs-default-bar-tab {
      &:first-of-type {
        width: 25% !important;
      }
      span {
        color: ${props => props.theme.color.detail};
      }
    }
    .am-tabs-default-bar-tab-active span {
      color: ${props => props.theme.color.themeTxt};
    }
  }
  /* 채팅 팝업 tab */
  &.chat {
    height: 100%;
    background: ${props => props.theme.color.lowestBg};
    .am-tabs-horizontal .am-tabs-pane-wrap-active {
      overflow: hidden;
    }
    .am-tabs.am-tabs-horizontal.am-tabs-top .am-tabs-tab-bar-wrap .am-tabs-default-bar {
      background: ${props => props.theme.color.chattingTabBg} !important;
    }
    .am-tabs-pane-wrap:nth-of-type(2) {
      .ant-list-item:last-child {
        margin-bottom: 0;
      }
    }
  }
`
export const OzTabWrap = styled.section`
  width: 100%;
  .am-tabs-default-bar-top {
    &::after {
      content: '';
      z-index: -1;
      position: absolute;
      bottom: 0;
      width: 100%;
      display: block;
      border-bottom: 1px solid ${props => props.theme.color.innerBg};
    }
  }
  .am-tabs-default-bar-top .am-tabs-default-bar-tab,
  .am-tabs-default-bar-bottom .am-tabs-default-bar-tab {
    height: 36px;
  }
  .am-tabs-default-bar-top .am-tabs-default-bar-content,
  .am-tabs-default-bar-bottom .am-tabs-default-bar-content {
    position: relative;
    width: 92%;
    height: 35px;
    margin: 0 auto;
    justify-content: space-between;
  }
  /* 매치업/매치업 결과 탭 */
  &.match-tab .am-tabs .am-tabs-default-bar-tab {
    width: calc(20% - 20px) !important;
    height: 36px !important;
    span {
      font-size: ${props => props.theme.font.medium};
    }
    &:nth-of-type(3) {
      width: 29% !important;
    }
  }
  .am-tabs-default-bar-tab::after {
    display: none;
  }
  .am-tabs-default-bar-underline {
    z-index: 1;
    border: 1.5px solid ${props => props.theme.color.primary};
  }
  .am-tabs-default-bar-tab-active {
    span {
      color: ${props => props.theme.color.primary};
    }
  }
  /* 매치업/매치업 결과 탭 */
  &.match-tab .am-tabs .am-tabs-default-bar-underline {
    width: calc(20% - 20px) !important;
  }
  &.match-tab .am-tabs .am-tabs-default-bar-tab-active {
    &:nth-of-type(2) ~ .am-tabs-default-bar-underline {
      left: 17.8% !important;
      ${mqMin[2]} {
        left: 17.8% !important;
      }
    }
    &:nth-of-type(3) ~ .am-tabs-default-bar-underline {
      left: 42.5% !important;
      ${mqMin[1]} {
        left: 42% !important;
      }
      ${mqMin[2]} {
        left: 41.8% !important;
      }
      ${mqMin[3]} {
        left: 41.5% !important;
      }
    }
    &:nth-of-type(4) ~ .am-tabs-default-bar-underline {
      left: 68% !important;
      ${mqMin[1]} {
        left: 67% !important;
      }
      ${mqMin[2]} {
        left: 65.3% !important;
      }
      ${mqMin[3]} {
        left: 65% !important;
      }
    }
    &:nth-of-type(5) ~ .am-tabs-default-bar-underline {
      left: 85.8% !important;
      ${mqMin[1]} {
        left: 85% !important;
      }
      ${mqMin[2]} {
        left: 83.6% !important;
      }
      ${mqMin[3]} {
        left: 82.7% !important;
      }
    }
  }
`
// const TabAni = keyframes`{
//   0% {
//     opacity: 0.2;
//   }
//   100% {
//     opacity: 1;
//   }
// }`
export const ChildTabWrap = styled.div`
  display: block;
  width: 100%;
  /* margin-bottom: 7px; */
`
export const SportsTabWrap = styled.div`
  z-index: 2;
  position: relative;
  width: 100%;
  /* margin-bottom: 7px; */
  .sports.am-tabs-default-bar {
    max-width: 100%;
    overflow: hidden;
  }
  .am-tabs-default-bar-content {
    position: relative;
    left: 50%;
    display: flex;
    justify-content: space-between;
    width: 94%;
    height: 35px;
    overflow: visible;
    transform: translate(-50%, 0) !important;
  }
  .am-tabs-default-bar-top::after {
    display: none !important;
  }
  .am-tabs-default-bar-tab {
    width: calc(100% / 7) !important;
    height: 36px;
    &:nth-of-type(1),
    &:nth-of-type(7) {
      width: 11% !important;
    }
    &:nth-of-type(6) {
      width: 20% !important;
    }
    &:nth-of-type(7) {
      span {
        color: ${props => props.theme.color.primary};
      }
    }
    span {
      font-size: ${props => props.theme.font.medium};
      transition: all 0.3s;
    }
  }
  .am-tabs-default-bar-underline {
    z-index: -1;
    width: calc(100% / 7) !important;
    height: 25px;
    top: 5px;
    background: ${props => props.theme.color.primary};
    border: none !important;
    border-radius: 50px;
  }
  .am-tabs-default-bar-tab-active {
    span {
      color: ${props => props.theme.color.btnTxt};
    }
    &:nth-of-type(7) {
      span {
        color: ${props => props.theme.color.btnTxt};
      }
    }
    &:nth-of-type(1) ~ .am-tabs-default-bar-underline,
    &:nth-of-type(7) ~ .am-tabs-default-bar-underline {
      width: 11% !important;
    }
    &:nth-of-type(2) ~ .am-tabs-default-bar-underline {
      left: 11.2% !important;
    }
    &:nth-of-type(3) ~ .am-tabs-default-bar-underline {
      left: 25.4% !important;
    }
    &:nth-of-type(4) ~ .am-tabs-default-bar-underline {
      left: 40% !important;
    }
    &:nth-of-type(5) ~ .am-tabs-default-bar-underline {
      left: 54.5% !important;
    }
    &:nth-of-type(6) ~ .am-tabs-default-bar-underline {
      width: 20% !important;
      left: 68.5% !important;
    }
    &:nth-of-type(7) ~ .am-tabs-default-bar-underline {
      left: 89% !important;
    }
  }
  .am-tabs-default-bar-prevpage,
  .am-tabs-default-bar-nextpage {
    background: none;
  }
`
export const SpecialTabWrap = styled.div`
  position: relative;
  .am-tabs-default-bar-content {
    position: relative;
    left: 50%;
    display: flex;
    justify-content: flex-start;
    width: 94%;
    height: 35px;
    overflow: visible;
    transform: translate(-50%, 0) !important;
  }
  .am-tabs-default-bar-tab {
    width: calc(100% / 4.3) !important;
    height: 36px;
  }
  .am-tabs-default-bar-underline {
    z-index: -1;
    width: calc(100% / 4.3) !important;
    height: 25px;
    top: 5px;
    background: ${props => props.theme.color.primary};
    border: none !important;
    border-radius: 50px;
  }
  .am-tabs-default-bar-tab-active {
    &:nth-of-type(2) ~ .am-tabs-default-bar-underline {
      left: 23% !important;
    }
    &:nth-of-type(3) ~ .am-tabs-default-bar-underline {
      left: 46% !important;
    }
  }
  /* 스페셜 - 결과 내역 탭 */
  .special-result {
    .am-tabs-default-bar-top .am-tabs-default-bar-content,
    .am-tabs-default-bar-bottom .am-tabs-default-bar-content {
      justify-content: flex-start;
      -webkit-justify-content: flex-start;
    }
    .am-tabs-default-bar-underline {
      z-index: -1;
      width: calc(100% / 4.3) !important;
      height: auto;
      top: 5px;
      background: none;
      border-bottom: 1.5px solid ${props => props.theme.color.primary} !important;
      border-radius: 0;
    }
  }
`
export const SpecialBtnStyle = (theme: Theme) => css`
  z-index: 1;
  position: absolute;
  top: 6px;
  right: 15px;
  padding: 0 10px;
  color: ${theme.color.themeTxt};
  font-size: ${theme.font.small};
`
export const FilterTabWrap = styled.div`
  position: relative;
  width: 100%;
  .am-tabs-top,
  .am-tabs-bottom {
    width: 100vw;
  }
  .am-tabs-default-bar {
    background: ${props => props.theme.color.TP} !important;
  }
  .am-tabs-default-bar-top .am-tabs-default-bar-content,
  .am-tabs-default-bar-bottom .am-tabs-default-bar-content {
    height: 35px;
    margin-right: 50px;
  }
  .am-tabs-default-bar-tab {
    position: relative;
    /* top: -4px; */
    width: calc(100% / 3) !important;
    height: 36px;
    padding: 8px 0;
    line-height: 3rem;
    &:first-of-type {
      width: 18% !important;
    }
    span {
      font-size: ${props => props.theme.font.small};
    }
  }
  .am-tabs-default-bar-underline {
    display: none;
  }
  .am-tabs-default-bar-top .am-tabs-default-bar-nextpage,
  .am-tabs-default-bar-bottom .am-tabs-default-bar-nextpage,
  .am-tabs-default-bar-top .am-tabs-default-bar-prevpage,
  .am-tabs-default-bar-bottom .am-tabs-default-bar-prevpage {
    display: none;
  }
  .am-tabs-default-bar-tab-active p span {
    color: ${props => props.theme.color.tabSubTxt};
  }
  .am-tabs-default-bar-tab p.Disabled span {
    color: ${props => props.theme.color.lose};
    opacity: 0.5;
  }
`
export const FilterBtnStyle = (theme: Theme) => css`
  position: absolute;
  top: 0;
  right: 0;
  height: 36px;
  padding: 0 8px;
  border: 4px solid ${theme.color.lowestBg};
  background: ${theme.color.lowestBg};
  svg {
    position: relative;
    top: 3px;
    width: 20px;
  }
  &::before {
    display: none;
  }
`
export const Content = styled.div`
  /* display: flex;
  align-items: stretch;
  justify-content: center; */
  background: ${props => props.theme.color.TP};
  /* border: 1px solid blue; */
`
export const TabSubWrap = styled.p`
  position: relative;
  width: 100%;
  display: inline-block;
`
export const TabTxt = styled.span`
  position: relative;
  display: inline-block;
  font-size: ${props => props.theme.font.medium};
  transition: all 0.3s;
  &.sub {
    position: absolute;
    left: 28%;
    top: 50%;
    max-width: 64%;
    line-height: 1.2rem;
    transform: translate(0, -50%);
  }
  /* 이벤트 팝업 tab */
  &.event-text {
    font-size: ${props => props.theme.font.small} !important;
  }
`
export const TabNum = styled.span`
  position: absolute;
  right: 1%;
  top: 50%;
  color: ${props => props.theme.color.tabSubTxt};
  transform: translate(0, -50%);
`

// /////////////////////////////////////////// . /////////////////////////////////////////////

export const FloatClear = css`
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`

// title 공통
export const TitleBar = css({
  height: '50px !important',
  padding: '20px 20px 0.01px !important',
  background: '$TP-color',
  marginBottom: '15px !important',
  lineHeight: '3.2rem !important',
  boxShadow: 'none !important'
})

export const TitleStyle = css({
  float: 'left',
  margin: 0,

  span: {
    fontWeight: 500,
    fontSize: '$title'
  }
})

export const BtnTit = css({
  float: 'right',
  padding: '0 0 0 8px',
  border: 'none',
  marginTop: '-5px',

  span: {
    position: 'relative',
    top: '-0.5px'
  }
})

export const Rotate = keyframes`
0% {
  transform: rotate(0);
}

100% {
  transform: rotate(180deg);
}

`
// /////////////////////////////////////////// Modal  /////////////////////////////////////////////

export const ModalStyle = css`
  /* top: 25% !important; */
  .ant-modal-body {
    padding: 40px 24px 12px;
  }
  .ant-modal-close {
    display: none;
  }
`
export const JoinClubModalStyle = css`
  z-index: 99999;
  top: 35% !important;
  .ant-modal-body {
    padding: 40px 24px 12px;
  }
  .ant-modal-close {
    display: none;
  }
`
export const PickModalStyle = css`
  top: 25% !important;
  .ant-modal-body {
    padding: 40px 24px 12px;
  }
  .ant-modal-close {
    display: none;
  }
`
export const PickCompleteModalStyle = css`
  top: 32% !important;
  .ant-modal-body {
    padding: 40px 24px 12px;
  }
  .ant-modal-close {
    display: none;
  }
`

// /////////////////////////////////////////// Modal Btutton /////////////////////////////////////////////

export const ModalButtonStyle = css`
  float: left;
  width: calc(50% - 7px);
  height: 35px;
  &:hover::before {
    transform: scaleX(1.05) scaleY(1.3);
  }
`

// /////////////////////////////////////////// LoadSpin /////////////////////////////////////////////
export const LoadSpinWrap = styled.div`
  text-align: center;
`
export const Loaded = styled.div`
  position: relative;
  width: 100%;
  height: 35px;
  display: block;
  margin: 0 auto;
  line-height: 3rem;
  text-align: center;
  background: ${props => props.theme.color.contentsBg};
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    border: ${props => props.theme.border.inputLine};
    transform: translate(-50%, -50%);
  }
`
const SpinAni = keyframes`
50% {
    transform: rotate(360deg) scale(0.9);
    border-width: 3.5px;
  }
  100% {
    transform: rotate(720deg) scale(1);
    border-width: 3px;
  }
`
export const LoadSpin = styled.div`
  display: block;
  margin: 0 auto;
  width: 3rem;
  height: 3rem;
  border: 3px solid ${props => props.theme.color.primaryBg};
  border-top-color: ${props => props.theme.color.primary};
  border-radius: 50%;
  animation: ${SpinAni} 1s ease-in-out infinite;
`
