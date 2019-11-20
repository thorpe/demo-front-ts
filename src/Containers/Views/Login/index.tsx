/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { Fragment, useState, KeyboardEvent } from 'react'
import { observer } from 'mobx-react'
import { Drawer, Form, Input, Row, Col, Checkbox } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import { LOCALSTORAGE_KEYS } from '@constants/index'

import useRootStore from '@store/useRootStore'
import { useOnMount } from '@helpers/reactExt'
import FindID from '@views/Popup/Login/FindID'
import FindPW from '@views/Popup/Login/FindPW'


import ClearIco from '@assets/Images/icon/login_icon/login_clear_icon.png'
import EyeIco from '@assets/Images/icon/login_icon/login_pw_eye.png'
import EyeXIco from '@assets/Images/icon/login_icon/login_pw_eye_x.png'
import { IDIco, PasswordIco } from '@components/Icon/LoginIcon'
import { LogoIco } from '@components/Icon/LogoIcon'


// css
import { Button } from '@styles/base.style'
import {
  LogoStyle,
  DrawerContent,
  RightIcoStyle,
  RightBtnStyle,
  LeftBtnStyle,
  LeftIconStyle,
  LoginTxt,
  LoginButtonStyle,
  Footer,
} from './index.style'


// icon
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


function PopupLogin({ form }: FormComponentProps) {
  const username = localStorage.getItem(LOCALSTORAGE_KEYS.USERID)
  const [visibleDetailId] = useState(false)
  const [visibleDetailPw, setVisibleDetailPw] = useState(false)
  const [passwordField, setPasswordField] = useState('password')
  const [isPassword, setIsPasswordField] = useState(false)
  const [checked, setChecked] = useState(username ? true : false)

  const { authStore } = useRootStore()


  useOnMount(() => {
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


  const handleSubmit = (e: React.SyntheticEvent<any, any>) => {
    e.preventDefault()
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

  const { getFieldDecorator } = form

  const togglePasswordField = e => {
    e.preventDefault()
    if (isPassword) {
      setPasswordField('password')
    } else {
      setPasswordField('text')
    }
    setIsPasswordField(!isPassword)
  }

  return (
    <Fragment>

      <DrawerContent>

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
            {getFieldDecorator('type', )(
              <Input
                // css="InputWrap"
                prefix={Id}
                placeholder="Type 입력해주세요."
                onKeyDown={e => {
                  if (e.keyCode === 13) {
                    e.preventDefault()
                  }
                }}
              />,
            )}

            <span className="line" />
          </Form.Item>

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
                <LoginTxt href='/#/find_username'>아이디 찾기</LoginTxt>
              </Col>
              <Col>
                <LoginTxt href='/#/find_password'>비밀번호 찾기</LoginTxt>
              </Col>
              <Col>
                <LoginTxt href='/#/register'>
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
              ID 로그인
            </Button>

            <Button primary
                    css={{
                      width: '100%',
                      height: 40,
                      color: '#696969',
                      border: 'none',
                      background: '#fff',
                    }}
            >
            </Button>


          </Form.Item>
        </Form>


        <Footer>
          <p className="version">ver.0.0.1</p>
        </Footer>
      </DrawerContent>

      <Drawer title="아이디 찾기" placement="bottom" height="100%" visible={visibleDetailId} style={{ textAlign: 'center' }} bodyStyle={{ padding: '0' }}> <FindID /> </Drawer>
      <Drawer title="비밀번호 찾기" placement="bottom" height="100%" onClose={onClosePWDrawer} visible={visibleDetailPw} style={{ textAlign: 'center' }} bodyStyle={{ padding: '0' }}> <FindPW /> </Drawer>
    </Fragment>
  )
}

// export default Form.create<PopupLoginProps>()(observer(PopupLogin))
export default Form.create<FormComponentProps>()(observer(PopupLogin))
