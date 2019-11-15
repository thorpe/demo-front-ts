import React from 'react'

import { GoogleLoginButton } from 'ts-react-google-login-component'

export class Login extends React.Component {

  preLoginTracking(): void {
    console.log('Attemp to login with google')
  }

  errorHandler(error: string): void {
    // handle error if login got failed...
    console.error(error)
  }

  responseGoogle(googleUser: gapi.auth2.GoogleUser): void {
    const id_token = googleUser.getAuthResponse(true).id_token
    const googleId = googleUser.getId()

    console.log({ googleId })
    console.log({ accessToken: id_token })
    // Make user login in your system
    // login success tracking...
  }

  render(): JSX.Element {
    const clientConfig = { client_id: 'youappid' }

    return (
      <div>
        <GoogleLoginButton
          buttonText='continue with google'
          responseHandler={this.responseGoogle}
          clientConfig={clientConfig}
          preLogin={this.preLoginTracking}
          failureHandler={this.errorHandler}
        />
      </div>
    )
  }

}