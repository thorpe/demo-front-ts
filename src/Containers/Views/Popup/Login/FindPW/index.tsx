/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { message } from 'antd'
import { observer } from 'mobx-react'

// icon
import MailIco from '@assets/images/icon/login_icon/mail.png'
import PhoneIco from '@assets/images/icon/login_icon/phone.png'

// css
import styled, { Theme } from 'themes/theme'
import { SecondaryButton } from 'styles/base.style'

const FindIdPopup = styled.section`
  padding: 0 28px;
  text-align: left;
`
const ButtonStyle = (theme: Theme) => css`
  width: 100%;
  height: 65px;
  margin: 10px 0 0;
  padding: 10px;
  font-size: ${theme.font.title};
  color: ${theme.color.titleTxt};
  text-align: left;
`
const MailStyle = css`
  width: 45px;
  height: auto;
  margin: 0 24px;
`
const PhoneStyle = css`
  width: 30px;
  height: auto;
  margin: 0 30px;
`
const Txt = styled.p`
  margin-top: 20px;
  font-size: ${props => props.theme.font.small};
  a {
    padding: 5px;
    font-size: ${props => props.theme.font.small};
    color: ${props => props.theme.color.primary};
  }
`

// icon
const Mail = <img src={MailIco} alt="메일" css={MailStyle} />
const Phone = <img src={PhoneIco} alt="메일" css={PhoneStyle} />

const FindPW: React.FC = props => {
  return (
    <FindIdPopup>
      <Txt>비밀번호를 찾기 위해 원하시는 본인확인 방식을 선택해주세요.</Txt>
      <SecondaryButton onClick={() => message.info('준비중')} css={ButtonStyle}>
        {Mail} 이메일 인증하기
      </SecondaryButton>
      <SecondaryButton onClick={() => message.info('준비중')} css={ButtonStyle}>
        {Phone} 휴대폰 인증하기
      </SecondaryButton>
      <Txt css={{ paddingTop: 15, borderTop: '1px solid #eee' }}>
        회원가입 시 등록하신 이름, 휴대전화 번호를 모르시면 고객센터에 문의하세요
        <button
          css={{
            border: 'none',
            padding: 0,
            background: 'none',
          }}
          type="button"
          onClick={() => message.info('준비중')}
        >
          [메일로 문의]
        </button>
      </Txt>
    </FindIdPopup>
  )
}
export default observer(FindPW)
