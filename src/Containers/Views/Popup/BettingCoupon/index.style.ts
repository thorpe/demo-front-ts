import { css } from '@emotion/core'
import styled, { Theme } from 'themes/theme'

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-bottom: 7px;
  .ant-pagination.ant-pagination-simple {
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% - 16px);
    height: 30px;
    margin-left: 16px;
    line-height: 3rem;
    overflow: hidden;
  }
  .ant-pagination-simple .ant-pagination-prev {
    float: left;
  }
  .ant-pagination-simple .ant-pagination-next {
    float: right;
  }
  .ant-pagination-slash {
    display: none;
  }
  .ant-pagination-simple .ant-pagination-simple-pager {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
  }
  .ant-pagination-simple .ant-pagination-simple-pager input {
    display: block;
    width: 90%;
    margin: 0 auto;
    border: none;
    background: ${props => props.theme.color.contentsBg} !important;
  }
`
export const ButtonStyle = (theme: Theme) => css`
  width: 100%;
  height: 30px;
  padding: 0;
  line-height: 3rem;
  color: ${theme.color.detail};
  background: ${theme.color.lowestBg};
  border: none;
  &.left {
    border-radius: 4px 0 0 4px;
  }
  &.right {
    border-radius: 0 4px 4px 0;
  }
  &::before {
    display: none;
  }
`
export const BetCouponImgWrap = styled.span`
  position: relative;
  width: 80px;
  height: 56px;
  background: ${props => props.theme.color.contentsBg};
  border-radius: 3px;
`
export const BetCouponImg = css`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 56px;
  transform: translate(-50%, -50%);
`
export const GmoneyStyle = styled.span`
  position: relative;
  top: 1px;
  width: 10px;
  margin-right: 4px;
`
export const TotalNum = styled.span`
  font-size: ${props => props.theme.font.large};
  .gmoney {
    top: 2px;
    width: 14px;
    margin-right: 0;
    margin-left: 4px;
  }
`
export const PopupBtnStyle = (theme: Theme) => css`
  position: relative;
  width: 100%;
  height: 36px;
  margin-top: 14px;
  font-size: ${theme.font.medium};
  &.two-button {
    left: 3.5px;
    width: calc(100% - 7px);
    /* height: 36px;
    margin-top: 30px; */
    &.cancel {
      left: -3.5px;
      border: ${theme.border.inputLine};
    }
  }
`
