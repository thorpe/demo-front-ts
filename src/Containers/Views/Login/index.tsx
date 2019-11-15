/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, useState, KeyboardEvent } from 'react'
import { observer } from 'mobx-react'
import { Drawer, Form, Input, Row, Col, message, Checkbox } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import { LOCALSTORAGE_KEYS } from '@constants/index'

import useRootStore from '@store/useRootStore'
import { useOnMount } from '@helpers/reactExt'
// import { SerializedStyles } from '@emotion/serialize'
import FindID from '@views/Popup/Login/FindID'
import FindPW from '@views/Popup/Login/FindPW'

// icon
import GoogleIco from '@assets/Images/icon/login_icon/g_logo.png'
// import IdIco from '@assets/Images/icon/login_icon/login_id.png'
// import PasswordIco from '@assets/Images/icon/login_icon/login_pw.png'
import ClearIco from '@assets/Images/icon/login_icon/login_clear_icon.png'
import EyeIco from '@assets/Images/icon/login_icon/login_pw_eye.png'
import EyeXIco from '@assets/Images/icon/login_icon/login_pw_eye_x.png'
import LoginBg from '@assets/Images/bg/login-bg.png'
import { IDIco, PasswordIco } from '@components/Icon/LoginIcon'
import { LogoIco } from '@components/Icon/LogoIcon'

import NotAvailableImg from '@assets/Images/bg/splash-18.png'
import GamblingImg from '@assets/Images/bg/splash-gambling.png'

// css
import { Button } from '@styles/base.style'
import {
  SplashWrap,
  TxtWrap,
  Txt,
  ImgWrap,
  LoginBgWrap,
  LoginBgStyle,
  LogoStyle,
  DrawerContent,
  RightIcoStyle,
  RightBtnStyle,
  LeftBtnStyle,
  LeftIconStyle,
  LoginTxt,
  LoginImgStyle,
  LoginButtonStyle,
  Footer,
} from './index.style'

const NotAvailable = (
  <img
    key="splash_-ot-vailable"
    src={NotAvailableImg}
    alt="청소년 이용 불가"
    css={css`
      width: 56px;
      margin-right: 20px;
    `}
  />
)
const Gambling = (
  <img
    key="splash-gambling"
    src={GamblingImg}
    alt="사행성"
    css={css`
      width: 56px;
    `}
  />
)

// icon
const Google = <img key="google_logo" src={GoogleIco} alt="구글 로고" css={LoginImgStyle} />
const Logo = (
  <LogoStyle>
    <LogoIco />
  </LogoStyle>
)
const Id = (
  <RightIcoStyle>
    <IDIco />
  </RightIcoStyle>
)
// const Id = <img key="login_id" src={IdIco} alt="아이디" css={RightIcoStyle} />
const Password = (
  <RightIcoStyle>
    <PasswordIco />
  </RightIcoStyle>
)
const Clear = <img key="login_clear_icon" src={ClearIco} alt="지우기 버튼" css={[LeftIconStyle, { width: 16 }]} />
const Eye = <img src={EyeIco} alt="비밀번호 보이기" css={[LeftIconStyle, { width: 20 }]} />
const EyeX = <img key="login_pw_eye_x" src={EyeXIco} alt="비밀번호 감추기" css={[LeftIconStyle, { width: 20 }]} />
const LoginImg = <img key="login_bg" src={LoginBg} alt="로그인 화면" css={LoginBgStyle} />
// interface PopupLoginProps extends FormComponentProps {}

function PopupLogin({ form }: FormComponentProps) {
  // const [myStyle, setMyStyle] = useState({
  //   fieldVisible: false,
  //   fieldVisibles: false,
  //   clearStyle: [Btn, InputBtn, ClearStyle],
  //   clearStyles: [Btn, InputBtn, ClearStyle],
  //   eyeStyles: [Btn, InputBtn, Eye],
  // })
  const username = localStorage.getItem(LOCALSTORAGE_KEYS.USERID)
  const [visibleDetailId] = useState(false)
  const [visibleDetailPw, setVisibleDetailPw] = useState(false)
  const [passwordField, setPasswordField] = useState('password')
  const [isPassword, setIsPasswordField] = useState(false)
  const [checked, setChecked] = useState(username ? true : false)

  const { authStore } = useRootStore()



  useOnMount(() => {
    // form.setFieldsValue({ username: 'test1', password: '1234' })


    if (username) {
      form.setFieldsValue({ username: username })
    }
  })

  // functions
  const doLogin = (values) => {
    if (checked) {
      localStorage.setItem(LOCALSTORAGE_KEYS.USERID, values.username)
    } else {
      localStorage.removeItem(LOCALSTORAGE_KEYS.USERID)
    }
    authStore.login(values)
  }

  // keyboard event와 form event 동시에 받을 수 있게 any 로 만듬
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: React.SyntheticEvent<any, any>) => {
    e.preventDefault()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values)
        doLogin(values)
      }
    })
  }

  const onClosePWDrawer = () => {
    setVisibleDetailPw(false)
  }

  // const { collapsedLogin } = globalStore
  const { getFieldDecorator } = form
  // const visible = !collapsedLogin

  const togglePasswordField = e => {
    e.preventDefault()
    if (isPassword) {
      setPasswordField('password')
    } else {
      setPasswordField('text')
    }
    setIsPasswordField(!isPassword)
  }
  // /})

  return (
    <Fragment>
      <LoginBgWrap>{LoginImg}</LoginBgWrap>

      <SplashWrap>
        <TxtWrap>
          <Txt>이 게임물은 청소년 이용불가 게임물로</Txt>
          <Txt>18세 미만의 청소년은 이용할 수 없습니다.</Txt>
        </TxtWrap>
        <ImgWrap>
          {NotAvailable}
          {Gambling}
        </ImgWrap>
      </SplashWrap>

      <DrawerContent>
        {Logo}
        <Form
          onSubmit={handleSubmit}
          css={{
            position: 'absolute',
            top: '50%',
            left: 0,
            width: '100%',
            padding: '0 48px !important',
            textAlign: 'center',
            transform: 'translate(0,-32%)',
          }}
        >
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '아이디를 입력해주세요' }],
            })(
              <Input
                // css="InputWrap"
                prefix={Id}
                placeholder="아이디를 입력해주세요."
                onKeyDown={e => {
                  if (e.keyCode === 13) {
                    e.preventDefault()
                  }
                }}
              />,
            )}
            <Button
              css={RightBtnStyle}
              onClick={e => {
                e.preventDefault()
                form.setFieldsValue({ username: '' })
              }}
            >
              {Clear}
            </Button>
            <span className="line" />
          </Form.Item>
          <Form.Item
            css={{
              marginBottom: '10px !important',
            }}
          >
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '비밀번호를 입력해주세요.' }],
            })(
              <Input
                prefix={Password}
                type={passwordField}
                placeholder="비밀번호를 입력해주세요."
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                  if (e.keyCode === 13) {
                    e.preventDefault()
                    handleSubmit(e)
                  }
                }}
              />,
            )}
            <Button
              css={LeftBtnStyle}
              onClick={e => {
                e.preventDefault()
                form.setFieldsValue({ password: '' })
              }}
            >
              {Clear}
            </Button>
            {/* 비번 보일때 안보이게 하는 버튼 */}
            <Button css={RightBtnStyle} onClick={togglePasswordField}>
              {isPassword ? EyeX : Eye}
            </Button>
            <span className="line" />
          </Form.Item>
          <Form.Item
            css={{
              margin: '0 !important',
              paddingLeft: '8px !important',
              borderBottom: 'none !important',
            }}
          >
            <Checkbox
              css={{ float: 'left' }}
              defaultChecked={checked}
              onChange={() => {
                setChecked(!checked)
              }}
            >
              아이디 저장
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Row type="flex" justify="space-around" css={{ margin: '25px 0 55px' }}>
              <Col>
                <LoginTxt href={`${process.env.HOMEPAGE_MO}/#/find_id`}>아이디 찾기</LoginTxt>
              </Col>
              <Col>
                <LoginTxt href={`${process.env.HOMEPAGE_MO}/#/find_pw`}>비밀번호 찾기</LoginTxt>
              </Col>
              <Col>
                <LoginTxt href={`${process.env.HOMEPAGE_MO}/#/mb_join`} target="_blank">
                  회원가입
                </LoginTxt>
              </Col>
            </Row>
            <Button
              primary
              // htmlType="submit"
              // className='login-form-button'
              css={LoginButtonStyle}
            >
              {Logo}
              승부사 ID 로그인
            </Button>
            <Button
              /* htmlType="submit" */

              css={{
                width: '100%',
                height: 40,
                color: '#696969',
                border: 'none',
                background: '#fff',
              }}
              onClick={e => {
                e.preventDefault()
                message.info('준비중')
              }}
            >
              {Google}
              Google 로그인
            </Button>
          </Form.Item>
        </Form>
        <Footer>
          <p className="version">ver.0.0.1</p>
          <p>Copyright &copy; IVENTORY corp. ALL Rights Reserved.</p>
        </Footer>
      </DrawerContent>

      <Drawer
        title="아이디 찾기"
        placement="bottom"
        height="100%"
        visible={visibleDetailId}
        style={{ textAlign: 'center' }}
        bodyStyle={{ padding: '0' }}
      >
        <FindID />
      </Drawer>
      <Drawer
        title="비밀번호 찾기"
        placement="bottom"
        height="100%"
        onClose={onClosePWDrawer}
        visible={visibleDetailPw}
        style={{ textAlign: 'center' }}
        bodyStyle={{ padding: '0' }}
      >
        <FindPW />
      </Drawer>
    </Fragment>
  )
}

// export default Form.create<PopupLoginProps>()(observer(PopupLogin))
export default Form.create<FormComponentProps>()(observer(PopupLogin))
