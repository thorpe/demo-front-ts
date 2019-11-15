import { css } from '@emotion/core'
import { mqMin, mq, ShowAni } from '@styles/base.style'
import styled, { Theme } from '@themes/theme'

export const SearchWrap = styled.div`
  position: relative;
  width: calc(100% - 40px);
  margin-left: 20px;
  .ant-input {
    height: 30px;
    padding: 3px 0px 3px 34px;
    font-size: ${props => props.theme.font.medium};
    line-height: 3rem;
    color: ${props => props.theme.color.themeTxt};
    background: ${props => props.theme.color.lowestBg} !important;
    transition: all 0.3s;
    &:hover,
    &:focus,
    &:active {
      border: 1px solid ${props => props.theme.color.primary} !important;
      box-shadow: none !important;
      & + .ant-input-suffix .ant-input-search-icon {
        color: ${props => props.theme.color.primary};
      }
    }
  }
  .ant-input-search {
    &:hover + .clear-btn,
    &:focus + .clear-btn,
    &:active + .clear-btn {
      display: block;
      img {
        animation: ${ShowAni} 0.3s forwards;
      }
    }
  }

  .ant-input-suffix {
    position: absolute;
    left: 0;
    .ant-input-search-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      color: ${props => props.theme.color.themeTxt};
      font-size: 1.6rem;
      transform: translate(0, -50%);
    }
  }
`
export const ClearBtnStyle = css`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  padding: 3px 10px;
  border: none;
  transition: all 0.3s;
  &::before {
    display: none;
  }
`
export const ClearStyle = css`
  width: 14px;
`
export const ListWrap = styled.article`
  width: 100vw;
  margin: 7px 0 40px;
  background: ${props => props.theme.color.contentsBg};
  .ant-list {
    width: 100%;
  }
  .ant-list-split .ant-list-item {
    padding: 12px 20px !important;
    border-bottom: ${props => props.theme.border.line};
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
`
export const BettorWrap = styled.div`
  position: relative;
  top: 1px;
  width: 50%;
`
export const BettorName = styled.span`
  margin: 0 10px 5px;
  color: ${props => props.theme.color.important};
  ${mq[0]} {
    margin: 0 5px 2px;
  }
`
export const BettorImgStyle = css`
  position: relative;
  top: -2px;
  width: 18px;
  ${mq[0]} {
    display: none;
  }
`
export const ButtonWrap = styled.div`
  position: absolute;
  right: 20px;
  text-align: right;
`
export const BtnStyle = (theme: Theme) => css`
  display: inline-block;
  width: 68px;
  height: 24px;
  margin-left: 6px;
  padding: 0;
  font-size: ${theme.font.small};
  border-color: ${theme.color.themeTxt};
`
