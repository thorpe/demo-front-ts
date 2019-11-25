import React from 'react'


import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import { ContentWrap, Title, TitleWrap } from '@styles/base.style'
import { WhiteSpace } from 'antd-mobile'

class GoogleLogin2 extends React.Component {

  render() {

    const responseGoogle = (response) => {
      console.log('================================================')
      console.log(response)
    }

    return (
      <ContentWrap>
        <TitleWrap>
          <Title>Test</Title>
        </TitleWrap>

        <GoogleLogin
          clientId="1095365683657-l6mtfeiu2cr37a4j9cc83btcs2ujqkt4.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />

        <WhiteSpace />
        <WhiteSpace />

        <FacebookLogin
          clientId="1095365683657-l6mtfeiu2cr37a4j9cc83btcs2ujqkt4.apps.googleusercontent.com"
          buttonText="LOGIN WITH FACEBOOK"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />

      </ContentWrap>
    )
  }
}

export default GoogleLogin2