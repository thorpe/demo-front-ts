/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Fragment, useState, KeyboardEvent } from 'react'
import { observer } from 'mobx-react'
import { Drawer, Form, Input, Row, Col, message, Icon } from 'antd'
import { FormComponentProps } from 'antd/lib/form'

import useRootStore from '@store/useRootStore'
import { useOnMount } from '@helpers/reactExt'
// import { SerializedStyles } from '@emotion/serialize'
import FindID from '@views/Popup/Login/FindID'
import FindPW from '@views/Popup/Login/FindPW'

// icon
import GoogleIco from '@assets/images/icon/login_icon/g_logo.png'
import IdIco from '@assets/images/icon/login_icon/login_id.png'
import PasswordIco from '@assets/images/icon/login_icon/login_pw.png'
import ClearIco from '@assets/images/icon/login_icon/login_clear_icon.png'
import EyeIco from '@assets/images/icon/login_icon/login_pw_eye.png'
import EyeXIco from '@assets/images/icon/login_icon/login_pw_eye_x.png'

// css
import styled from '@themes/theme'
import { Button, SecondaryButton } from '@styles/base.style'
import { DrawerContent, RightIcoStyle, Txt, Divide, LoginWrap, ForgotTxt, SignUp } from './index.style'

const DrawerWrap = styled.div`
  position: relative;
`

// icon
const Google = <img key="google_logo" src={GoogleIco} alt="구글 로고" css={{ float: 'left', width: '20px' }} />
const Id = <img key="login_id" src={IdIco} alt="아이디" css={RightIcoStyle} />
const Password = <img key="login_pw" src={PasswordIco} alt="비밀번호" css={RightIcoStyle} />
const Clear = (
  <img key="login_clear_icon" src={ClearIco} alt="지우기 버튼" css={{ position: 'relative', width: '16px' }} />
)
const Eye = <img src={EyeIco} alt="비밀번호 보이기" css={{ width: '20px' }} />
const EyeX = (
  <img
    key="login_pw_eye_x"
    src={EyeXIco}
    alt="비밀번호 감추기"
    css={{
      width: '20px',
    }}
  />
)
// interface PopupLoginProps extends FormComponentProps {}

function PopupLogin({ form }: FormComponentProps) {
  // const [myStyle, setMyStyle] = useState({
  //   fieldVisible: false,
  //   fieldVisibles: false,
  //   clearStyle: [Btn, InputBtn, ClearStyle],
  //   clearStyles: [Btn, InputBtn, ClearStyle],
  //   eyeStyles: [Btn, InputBtn, Eye],
  // })
  const [visibleDetailId, setVisibleDetailId] = useState(false)
  const [visibleDetailPw, setVisibleDetailPw] = useState(false)
  const [passwordField, setPasswordField] = useState('password')
  const [isPassword, setIsPasswordField] = useState(false)

  const { authStore, globalStore, routerStore } = useRootStore()

  // const onToggleIdValue = () => {
  //   const { fieldVisible } = myStyle
  //   const newStyle = fieldVisible ? Hide : [Btn, InputBtn, ClearStyle, Show]

  //   setMyStyle({ fieldVisible: !fieldVisible, clearStyle: newStyle, ...myStyle })
  // }

  // const onTogglePasswordValue = () => {
  //   const { fieldVisibles } = myStyle
  //   const newStyles = fieldVisibles ? Hide : [Btn, InputBtn, ClearStyle, Show]

  //   const newStyle = fieldVisibles ? Hide : [Btn, InputBtn, Eye, Show]

  //   setMyStyle({ fieldVisibles: !fieldVisibles, clearStyles: newStyles, eyeStyles: newStyle, ...myStyle })
  // }

  useOnMount(() => {
    // form.setFieldsValue({ username: 'test1', password: '1234' })
  })

  // functions
  const togglerContent = () => {
    globalStore.toggleLoginCollapsed(true)
  }

  const doLogin = (values) => {
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

  const onClickJoin = () => {
    routerStore.history.push('/Join')
  }

  // 아이디/비밀번호 찾기
  const onClickShowIDDrawer = () => {
    setVisibleDetailId(true)
  }
  const onCloseIDDrawer = () => {
    setVisibleDetailId(false)
  }
  const onClickShowPWDrawer = () => {
    setVisibleDetailPw(true)
  }
  const onClosePWDrawer = () => {
    setVisibleDetailPw(false)
  }

  // const { collapsedLogin } = globalStore
  const collapsedLogin = true
  const { getFieldDecorator } = form
  const visible = !collapsedLogin

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
      <DrawerWrap>
        <Drawer
          className="loginPopup"
          visible={visible}
          height={370}
          placement="bottom"
          onClose={togglerContent}
          bodyStyle={{ borderRadius: '4px !important', padding: 0 }}
        >
          <DrawerContent>
            <Form
              onSubmit={handleSubmit}
              css={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                padding: '20px 35px !important',
                textAlign: 'center',
                // border: '1px solid yellow',
                borderRadius: '4px !important',
              }}
            >
              <span css={Txt}> 온라인을 이용하려면 로그인이 필요합니다.</span>
              <Form.Item
                css={theme => ({
                  position: 'relative',
                  margin: '25px 0 0 !important',
                  borderBottom: theme.border.line,
                })}
              >
                {getFieldDecorator('username', {
                  // rules: [{ required: true, message: '아이디를 입력해주세요' }],
                })(
                  <Input
                    // css="InputWrap"
                    prefix={Id}
                    placeholder="아이디"
                    onKeyDown={e => {
                      if (e.keyCode === 13) {
                        e.preventDefault()
                      }
                    }}
                  />,
                )}
                <Button
                  css={{ position: 'absolute', top: '-9px', right: 0, padding: '4px 8px', border: 'none' }}
                  onClick={e => {
                    e.preventDefault()
                    form.setFieldsValue({ username: '' })
                  }}
                >
                  {Clear}
                </Button>
              </Form.Item>
              <Form.Item
                css={theme => ({
                  position: 'relative',
                  margin: '0 !important',
                  borderBottom: theme.border.line,
                })}
              >
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '비밀번호를 입력해주세요' }],
                })(
                  <Input
                    prefix={Password}
                    type={passwordField}
                    placeholder="비밀번호"
                    onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                      if (e.keyCode === 13) {
                        e.preventDefault()
                        handleSubmit(e)
                      }
                    }}
                  />,
                )}
                <Button
                  css={{ position: 'absolute', top: '-9px', right: 0, padding: '4px 8px', border: 'none' }}
                  onClick={e => {
                    e.preventDefault()
                    form.setFieldsValue({ password: '' })
                  }}
                >
                  {Clear}
                </Button>
                {/* 비번 보일때 안보이게 하는 버튼 */}
                {/* <Button className={state.eyeStyles} onClick={() => message.info('가리기 준비중')}>{Eye}</Button> */}{' '}
                {/* 비번 안보일때 보이게 하는 버튼 */}
                <Button
                  css={{ position: 'absolute', top: '-9px', right: '34px', padding: '4px 8px', border: 'none' }}
                  onClick={togglePasswordField}
                >
                  {isPassword ? EyeX : Eye}
                </Button>
              </Form.Item>
              <Form.Item>
                {/* {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox css={{ float: 'left' }}>아이디 저장</Checkbox>)}
                <Button
                  primary
                })(<Checkbox css={{ float: 'left' }}>아이디 저장</Checkbox>)} */}
                <Button
                  primary
                  // htmlType="submit"
                  // className='login-form-button'
                  css={{ width: '100%', height: '40px', marginTop: 20 }}
                >
                   ID 로그인
                </Button>
                <span css={[LoginWrap, { marginTop: 5 }]}>
                  <ForgotTxt href="#/" onClick={onClickShowIDDrawer}>
                    아이디 찾기
                  </ForgotTxt>
                  <ForgotTxt href="#/" onClick={onClickShowPWDrawer}>
                    비밀번호 찾기
                  </ForgotTxt>
                </span>
                <span css={LoginWrap}>
                  회원가입 시 30,000G머니 무료지급!
                  <SignUp
                    href="#/join"
                    onClick={() => {
                      togglerContent()
                      onClickJoin()
                    }}
                  >
                    회원가입
                    <Icon type="right" />
                  </SignUp>
                </span>
                <Row>
                  <Col span={10} css={Divide}>
                    <hr />
                  </Col>
                  <Col span={4} css={Divide}>
                    또는
                  </Col>
                  <Col span={10} css={Divide}>
                    <hr />
                  </Col>
                </Row>

                <SecondaryButton
                  /* htmlType="submit" */ css={{ width: '100%', height: 40 }}
                  onClick={e => {
                    e.preventDefault()
                    message.info('준비중')
                  }}
                >
                  {Google}
                  Google 로그인
                </SecondaryButton>
              </Form.Item>
            </Form>
          </DrawerContent>
        </Drawer>
      </DrawerWrap>
      <Drawer
        title="아이디 찾기"
        placement="bottom"
        height="100%"
        onClose={onCloseIDDrawer}
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
