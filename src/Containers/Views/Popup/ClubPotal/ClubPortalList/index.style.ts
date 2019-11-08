import { css } from '@emotion/core'
import { ButtonStyles, PrimaryButtonHoverStyle, mq } from 'styles/base.style'
import styled, { Theme } from 'themes/theme'

export const ClubPotal = styled.div`
  position: relative;
  overflow: visible;
  border-bottom: ${props => props.theme.border.line};
`
export const ClubListButton = styled.button`
  z-index: -1px;
  ${ButtonStyles};
  /* ${PrimaryButtonHoverStyle}; */
  width: 100vw;
  padding: 14px 16px 5px;
  color: ${props => props.theme.color.primary};
  background: ${props => props.theme.color.contentsBg};
  border: none;
  border-radius: 0;
  /* &:hover::before {
    transform: scaleX(1.05) scaleY(1.1);
  } */
`
export const ClubName = styled.h2`
  display: inline-block;
  width: 100%;
  margin-bottom: 2px;
  padding-left: 5px;
  text-align: left;
  font-size: ${props => props.theme.font.medium};
  color: ${props => props.theme.color.titleTxt};
`
export const JoinState = styled.span`
  font-size: ${props => props.theme.font.small};
  color: ${props => props.theme.color.themeTxt};
`
export const ClubLocate = styled.span`
  position: relative;
  top: -1px;
  margin-left: 1px;
  padding: 1px 6px;
  font-size: ${props => props.theme.font.small};
  color: ${props => props.theme.color.primary};
  border: 1px solid ${props => props.theme.color.primary};
  border-radius: 50px;
`
export const Wrap = css`
  float: left;
  line-height: 1.8rem;
  &.live {
    text-indent: -3px;
  }
`
export const Txt = styled.span`
  display: block;
  font-size: ${props => props.theme.font.small};
  color: ${props => props.theme.color.detail};
  &.live-state {
    font-size: ${props => props.theme.font.medium};
  }
`
export const Num = styled.span`
  display: block;
  color: ${props => props.theme.color.themeTxt};
`
export const NumLimit = css`
  float: left;
  width: auto;
  max-width: 82%;
  ${mq[0]} {
    max-width: 80%;
  }
`
export const GmoneyStyle = styled.span`
  position: relative;
  top: 1px;
  float: right;
  width: 10px;
  margin-left: 4px;
`
export const JoinyIco = css`
  position: relative;
  top: -2px;
  width: 10px;
  margin: 0 4px;
`
export const InfoStyle = styled.span`
  position: relative;
  top: 3px;
  width: 16px;
  height: auto;
`
export const InfoBtnStyle = (theme: Theme) => css`
  float: right;
  width: 56px;
  height: 30px;
  padding: 0;
  text-align: center;
  font-size: ${theme.font.small};
`
export const LimitWrap = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  line-height: 2rem;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`
export const LimitNum = styled.span`
  float: right;
  min-width: 30%;
  max-width: 48%;
  width: auto;
  text-align: right;
  font-size: ${props => props.theme.font.small};
  color: ${props => props.theme.color.themeTxt};
  ${mq[0]} {
    max-width: 42%;
  }
`
