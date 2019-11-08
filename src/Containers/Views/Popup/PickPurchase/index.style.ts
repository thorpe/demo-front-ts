import { css } from '@emotion/core'
import { mqMin } from 'styles/base.style'
import styled, { Theme } from 'themes/theme'

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
export const Num = styled.span`
  width: 100%;
  display: inline-block;
  &.pick-popup {
    /* float: right; */
    width: 92%;
    text-align: right;
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
