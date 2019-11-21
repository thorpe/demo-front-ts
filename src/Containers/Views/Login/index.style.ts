import { css, keyframes } from '@emotion/core'
import { ShowAni } from '@styles/base.style'
import styled, { Theme, ThemeProps } from '@themes/theme'

export const SplashAni = keyframes`
  0%,100% {
    z-index: -1;
    opacity:0;
    display:none;
  }
  30%,70% {
    z-index: 1;
    opacity:1;
    display:block;
  }
`
export const LoginBgWrap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
export const SplashWrap = styled.div`
  position: absolute;
  top: 0%;
  left: 0;
  width: 100vw;
  height: 100%;
  opacity: 0;
  animation: ${SplashAni} 4.5s forwards;
`
export const TxtWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  text-align: center;
  transform: translate(-50%, -110%);
`
export const Txt = styled.p`
  width: 100%;
  line-height: 2.2rem;
  animation: ${ShowAni} 1s ease-in-out;
`
export const ImgWrap = styled.div`
  position: absolute;
  bottom: 12%;
  width: 100%;
  text-align: center;
  opacity: 0;
  animation: ${ShowAni} 1s ease-in-out forwards;
  animation-delay: 0.15s;
`

export const LoginBgStyle = css`
  position: relative;
  width: 100%;
`
// logo animaiton
const LogoAni = (props: ThemeProps) => keyframes`
0% {-webkit-filter: drop-shadow( -.75px 0px 6px #b8e8ff );
                filter: drop-shadow( -.75px 0px 6px #b8e8ff ); stroke:#b8e8ff;} 
   30% {-webkit-filter: drop-shadow( -.75px 0px 6px #57a5de );
                filter: drop-shadow( -.75px 0px 6px #57a5de ); stroke:#57a5de;}
   50% {-webkit-filter: drop-shadow( -.75px 0px 6px  #31a7de  );
                filter: drop-shadow( -.75px 0px 6px  #31a7de  ); stroke: #31a7de ;} 
   70% {-webkit-filter: drop-shadow( -.75px 0px 6px #57a5de );
                filter: drop-shadow( -.75px 0px 6px #57a5de ); stroke:#57a5de;}  
  100% {-webkit-filter: drop-shadow( -.75px 0px 6px #b8e8ff );
                filter: drop-shadow( -.75px 0px 6px #b8e8ff ); stroke:#b8e8ff;} 
`
export const LogoStyle = styled.span`
  position: absolute;
  top: 10vh;
  left: 50%;
  width: 60px;
  transform: translate(-50%, 0);
  animation: ${ShowAni} 0.6s ease-in-out;
  svg {
    -webkit-animation: ${LogoAni} 6s ease infinite alternate;
    -moz-animation: ${LogoAni} 6s ease infinite alternate;
    animation: ${LogoAni} 6s ease infinite alternate;
  }
  path {
    fill: #fff !important;
  }
`
export const DrawerContent = styled.div`
  opacity: 0;
  /* display: none; */
  animation: ${ShowAni} 0.3s ease-in-out forwards;
  animation-delay: 0.1s;
  .ant-form-item-control {
    position: relative;
    line-height: 3rem;
  }
  .ant-form-item {
    position: relative;
    width: 100%;
    margin: 0 0 43px;
    border-bottom: 1px solid ${props => props.theme.color.disabled};
    transition: all 0.3s;
    span.line {
      position: absolute;
      bottom: -9px;
      left: 0;
      right: 0;
      height: 1px;
      background-color: ${props => props.theme.color.primary};
      transform-origin: bottom right;
      transform: scaleX(0);
      transition: transform 1s ease;
    }
    &:hover,
    &:focus,
    &:active {
      svg path {
        fill: ${props => props.theme.color.primary};
      }
      button {
        animation: ${ShowAni} 1s ease forwards;
      }
      span.line {
        transform-origin: bottom left;
        transform: scaleX(1);
      }
    }
  }
  .ant-input {
    padding-left: 32px !important;
    padding-bottom: 0 !important;
    border: none;
    outline: none;
    color: #acacac;
    font-size: ${props => props.theme.font.medium};
    background: ${props => props.theme.color.TP};
    border-radius: 0;
    &:hover,
    &:focus,
    &:active {
      border: none;
      box-shadow: none !important;
    }
  }

  .has-error .ant-input-affix-wrapper .ant-input,
  .has-error .ant-input-affix-wrapper .ant-input:hover {
    background: ${props => props.theme.color.TP};
  }
  .has-error .ant-form-explain,
  .has-error .ant-form-split {
    position: absolute;
    bottom: -28px;
    left: 36px;
  }
`
export const RightIcoStyle = styled.span`
  position: relative;
  top: 4px;
  left: -4px;
  width: 16px;
  height: 16px;
  svg {
    height: inherit;
  }
  svg path {
    fill: #fff;
    transition: all 0.3s;
  }
`
const SubBtnStyle = css`
  opacity: 0;
  position: absolute;
  top: 4px;
  padding: 4px 8px;
  border: none;
  border-radius: 50%;
  transition: all 0.3s;
  &::before {
    display: none;
  }
  &:hover {
    animation: ${ShowAni} 1s ease forwards;
  }
`
export const RightBtnStyle = (theme: Theme) => css`
  ${SubBtnStyle};
  right: 8px;
  background: ${theme.color.TP};
`
export const LeftBtnStyle = (theme: Theme) => css`
  ${SubBtnStyle};
  right: 36px;
  background: ${theme.color.TP};
`
export const LeftIconStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const InputBtn = css({
  display: 'none',
  position: 'absolute',
  top: '-10px',
  right: 0,
  padding: '0 8px',
  transition: 'all 0.3s',
})

export const Eye = css({
  right: '34px',
})

export const Show = css({
  display: 'block !important',
})

export const ClearStyle = css({
  position: 'relative',
  width: '16px',
})

export const Divide = css({
  margin: '8px 0 12px',
  lineHeight: '0.1rem',
  opacity: 0.5,
})

export const LoginFormBtnStyle = css({
  height: '40px',
})

export const LoginWrap = css`
  display: block;
  width: 100%;
  height: 25px;
  line-height: 2.5rem;
`
export const LoginTxt = styled.a`
  position: relative;
  padding: 5px 0;
  color: ${props => props.theme.color.themeTxt};
  font-size: ${props => props.theme.font.small};
  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid #eee;
  }
`
const LoginBtnStyle = css`
  width: 100%;
  height: 40px;
`
export const LoginImgStyle = css`
  position: absolute;
  top: 50%;
  left: 22px;
  width: 17px;
  transform: translate(0, -40%);
`
export const LoginButtonStyle = css`
  ${LoginBtnStyle};
  margin-bottom: 20px;
  span {
    ${LoginImgStyle};
  }
  svg {
    animation: none;
  }
`
export const Footer = styled.footer`
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  p {
    font-size: ${props => props.theme.font.small};
    color: #bfbfbf;
  }
  .version {
    position: absolute;
    top: -15px;
    right: 15px;
  }
`
