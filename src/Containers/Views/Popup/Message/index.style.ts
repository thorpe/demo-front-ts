import { css } from '@emotion/core'
import { mqMin } from 'styles/base.style'
import styled, { Theme } from 'themes/theme'

export const RowStyle = css`
  width: 100%;
  padding: 12px 20px;
`
export const TopBtnStyle = (theme: Theme) => css`
  display: inline-block;
  width: 50px;
  height: 18px;
  margin-left: 7px;
  padding: 0;
  line-height: 1.8rem;
  text-align: center;
  font-size: ${theme.font.small};
  color: ${theme.color.themeTxt};
  border: ${theme.border.inputLine};
  &.received-all {
    border: ${theme.border.default};
  }
  &.disabled {
    opacity: 0.5;
  }
`

export const ListWrap = styled.article`
  width: 100%;
  background: ${props => props.theme.color.contentsBg};
  .ant-list-bordered {
    overflow: hidden;
  }
  .ant-list-bordered .ant-list-header {
    padding: 0;
    border: none;
  }
  .ant-list-bordered .ant-list-item {
    padding: 0;
  }
  /* 가로 화면 / 태블릿일때도 한줄로 보이도록 설정 */
  .ant-list-item {
    position: relative;
    ${mqMin[2]} {
      display: block;
      overflow: hidden;
    }
  }
  .ant-list-bordered {
    border-radius: 0;
    border: none;
  }

  &.send {
    button.pick {
      display: none;
    }
    .item-style {
      transform: translate(-50%, -50%);
    }
    .item-text {
      display: none;
    }
  }
`
export const ListHeaderWrap = styled.div`
  height: 42px;
  line-height: 4.2rem;
  padding: 0 20px;
  border-bottom: ${props => props.theme.border.line};
  .ant-select-selection-selected-value {
    font-size: ${props => props.theme.font.small};
  }
`
export const ListTitle = styled.h2`
  display: inline-block;
  font-size: ${props => props.theme.font.medium};
`
export const SelectStyle = css`
  top: 5px;
  float: right;
  width: 110px;
  line-height: 3rem;
`
export const OptionTxt = styled.span`
  font-size: ${props => props.theme.font.small};
`

// message list
export const AccordionWrapper = styled.div`
  position: relative;
  width: 100vw;

  .am-accordion-content {
    overflow: visible;
  }
  .am-accordion-content > .am-accordion-content-box {
    padding: 0;
  }
  .am-accordion {
    position: relative;
    background: ${props => props.theme.color.TP};
    border: ${props => props.theme.border.line};
    &::before {
      content: '';
      display: none;
    }
  }
  /* 메세지 header */
  .am-accordion > .am-accordion-item > .am-accordion-header {
    height: 76px;
    padding: 0 20px;
    line-height: 1.8rem;
    text-align: left;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      border-bottom: ${props => props.theme.border.line};
    }
    &:first-of-type::before {
      border: none;
    }
    &::after {
      content: '';
      /* display: none; */
    }
    .arrow {
      display: none;
    }
  }
  .am-accordion > .am-accordion-item .am-accordion-content {
    background: ${props => props.theme.color.contentsBg};
  }
  .am-accordion > .am-accordion-item .am-accordion-content .am-accordion-content-box {
    &::after {
      content: '';
      display: none;
    }
  }
  .am-accordion .am-accordion-item-active span.circle-down {
    svg {
      transform: rotate(180deg);
    }
  }
  .am-accordion > .am-accordion-item {
    background: ${props => props.theme.color.contentsBg};
  } /* .am-accordion-item */

  /* 메세지 내용 */
  .am-accordion .am-accordion-item .am-accordion-content .am-accordion-content-box {
    background: ${props => props.theme.color.lowestBg};
  }

  /* 보상 완료시 보이는 이미지, 구매 완료 텍스트 */
  img.received-icon,
  span.item-text.complete,
  button.complete,
  button.end {
    display: none;
  }
  button {
    z-index: 2;
  }

  /* 픽 마감 */
  .end {
    .am-accordion-header > button {
      opacity: 0.5;
    }
    .pick-content {
      opacity: 0.5;
    }
    button.pick {
      display: none;
      &.end {
        display: block;
      }
    }
  }

  /* 읽은 메세지 */
  .read {
    .am-accordion-header {
      position: relative;
      &::after {
        content: '';
        z-index: 9999;
        display: block !important;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 76px !important;
        background: ${props => props.theme.color.lowestBg}!important;
        opacity: 0.5;
        transform: none !important;
      }
    }
  }
  /* 아이템 수령 혹은 픽구매 완료 메세지 */
  .received {
    button {
      z-index: 0;
      span.item-text {
        display: none;
      }
      img.received-icon,
      span.item-text.complete {
        display: block;
      }
      &.pick {
        display: none;
      }
      &.complete {
        display: block;
      }
    }
    .pick-content {
      opacity: 0.5;
    }
  }
`
export const MessageBody = styled.div`
  min-height: 100px;
  padding: 12px 20px;
  color: ${props => props.theme.color.detail};
  overflow-y: scroll;
`
export const MessageFooter = (theme: Theme) => css`
  z-index: 1;
  position: relative;
  height: auto;
  padding: 10px 20px;
  background: ${theme.color.lowestBg};
  border-top: 1px solid ${theme.color.contentsBg};
  .term {
    position: relative;
    top: -2px;
    margin-bottom: 6px;
    font-size: ${theme.font.small};
    color: ${theme.color.tabSubTxt};
  }
`
export const MessageBtnStyle = (theme: Theme) => css`
  width: 100%;
  color: ${theme.color.themeTxt};
  background: ${theme.color.TP};
  &.delete {
    border: ${theme.border.secondery};
  }
`
export const DateSpan = styled.p`
  color: ${props => props.theme.color.detail};
`
export const MessgeTitle = styled.h3`
  display: inline-block;
  width: 226px;
  margin: 0;
  font-size: ${props => props.theme.font.medium};
`
export const ListItemWrap = (theme: Theme) => css`
  line-height: 1.4rem;
  font-size: ${theme.font.small};
  &:nth-of-type(2)::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 90%;
    height: 25px;
    border-right: ${theme.border.line};
  }
`
export const DummyStyle = css`
  display: block;
  margin: 0 auto;
  width: 25px;
`
export const IconWrapButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 56px;
  height: 56px;
  padding: 0;
  text-align: center;
  background: ${props => props.theme.color.lowestBg};
  border-radius: 6px;
  border: none;
`
export const ItemStyle = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  text-align: center;
  line-height: 1.2rem;
  transform: translate(-50%, -70%);
  svg,
  img {
    position: relative;
    display: block;
    width: 26px;
    margin: 0 auto;
    path {
      fill: ${props => props.theme.color.themeTxt};
    }
  }
  img {
    width: 32px;
  }
  &.only-img {
    transform: translate(-50%, -50%);
  }
`
export const ReceivedStyle = css`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 56px;
`
export const SubItemName = styled.span`
  position: relative;
  font-size: ${props => props.theme.font.tiny};
  color: ${props => props.theme.color.tabSubTxt};
`
export const ItemName = styled.span`
  position: absolute;
  bottom: -2px;
  left: 50%;
  font-size: ${props => props.theme.font.small};
  transform: translate(-50%, 0);
  &::before {
    content: '';
    z-index: -1;
    display: block;
    position: absolute;
    bottom: 2px;
    left: 50%;
    width: 56px;
    height: 14px;
    background: ${props => props.theme.color.secondary};
    border-radius: 0 0 6px 6px;
    transform: translate(-50%, 0);
  }
`
export const Name = styled.span`
  display: block;
  span {
    margin-right: 5px;
    color: ${props => props.theme.color.detail};
  }
`
export const ArrowStyle = styled.span`
  position: relative;
  top: 1px;
  left: 4px;
  width: 10px;
  svg {
    transition: all 0.3s;
  }
`
// footer
export const PickButtonWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`
export const PickButtonStyle = (theme: Theme) => css`
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 30px;
  padding: 0;
  line-height: 1.5rem;
  font-size: ${theme.font.medium};
  &:hover::before {
    transform: scaleX(1.1) scaleY(1.2);
  }
  &.complete {
    color: ${theme.color.disabled};
    background: ${theme.color.betslipBg};
    &:hover::before {
      display: none;
    }
  }
`
export const ListItemTitle = styled.h3`
  display: inline-block;
  width: 100%;
  margin: 0 0 4px;
  font-size: ${props => props.theme.font.medium};
`
export const SellerName = styled.span`
  display: block;
  font-size: ${props => props.theme.font.small};
`
export const Txt = styled.span`
  display: block;
  color: ${props => props.theme.color.detail};
  font-size: ${props => props.theme.font.small};
`
export const Num = styled.span`
  width: 100%;
  display: inline-block;
  &.pick-popup {
    /* float: right; */
    width: 92%;
    text-align: right;
  }
`
export const Money = styled.span`
  width: 86%;
  display: inline-block;
  text-align: right;
  ${mqMin[2]} {
    width: 92%;
  }
`
export const GmoneyStyle = styled.span`
  position: relative;
  float: right;
  width: 12%;
  ${mqMin[2]} {
    width: 8%;
  }
  svg {
    position: absolute;
    right: 0;
    width: 12px;
  }
`
//  메세지함 팝업
export const PopupBtnStyle = (theme: Theme) => css`
  position: relative;
  width: 100%;
  height: 36px;
  margin-top: 14px;
  font-size: ${theme.font.medium};
  &.two-button {
    left: 3.5px;
    width: calc(100% - 7px);
    height: 30px;
    margin-top: 30px;
    &.cancel {
      left: -3.5px;
      border: ${theme.border.inputLine};
    }
  }
`
export const PopupTxt = styled.p`
  color: ${props => props.theme.color.detail};
  span {
    float: none;
    width: auto;
    svg {
      position: relative;
      top: 2px;
      margin: 0 2px;
    }
  }
`
export const PickPopupRowStyle = css`
  width: auto;
  text-align: left;
  margin: 6px 20px !important;
  svg {
    top: 2px;
  }
`
