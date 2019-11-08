import { css } from '@emotion/core'
import 'styles/base.style'
import styled from 'themes/theme'

export const DrawerContent = styled.div`
  .ant-input {
    border: none;
  }
`
export const RightIcoStyle = css({
  position: 'relative',
  left: '-4px',
  width: '18px',
})

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

export const Txt = css({
  //   fontSize: FontSmall,
})

export const Divide = css({
  margin: '8px 0 12px',
  //   fontSize: FontSmall,
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
export const ForgotTxt = styled.a`
  position: relative;
  padding: 0 8px;
  color: ${props => props.theme.color.themeTxt};
  &:first-of-type::after {
    position: absolute;
    top: 2px;
    right: 0;
    display: block;
    width: 100%;
    height: 70%;
    border-right: ${props => props.theme.border.secondery};
    content: '';
  }
`
export const SignUp = styled.a`
  margin-left: 10px;
  color: ${props => props.theme.color.primary};
  i {
    font-size: 10px;
    margin-left: 4px;
  }
`
