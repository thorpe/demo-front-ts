/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import Iframe from 'react-iframe'

interface MyInfoPopUpProps {
  account: string
  pw_change_date: string
  name: string
  gender: string
  age: string
  phone: string
  phone_send: string
  email: string
  last_connect_date: string
  job: string
  nick: string
  cash: number
}
const MyInfoPopUp: React.FC<MyInfoPopUpProps> = (props: MyInfoPopUpProps) => {
  const {
    account,
    pw_change_date,
    name,
    gender,
    age,
    phone,
    phone_send,
    email,
    last_connect_date,
    job,
    nick,
    cash,
  } = props
  const url = `https://qa-review.adventurer.co.kr:7301/#/mypage?account=${account}&pw_change_date=${pw_change_date}&name=${name}&gender=${gender}&age=${age}&phone=${phone}&phone_send=${phone_send}&email=${email}&last_connect_date=${last_connect_date}&job=${job}&nick=${nick}&cash=${cash}`
  return (
    <Iframe
      url={url}
      id="myInfo"
      css={{
        display: 'block',
        width: '100%',
        height: '100%',
        border: 'none',
        overflow: 'hidden',
      }}
    />
  )
}
export default MyInfoPopUp
