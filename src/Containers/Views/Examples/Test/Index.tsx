import React, { useState } from 'react'


import { observer } from 'mobx-react'
import { Title, TitleWrap, ContentWrap } from '@styles/base.style'
import { Drawer } from 'antd'
import { WhiteSpace } from 'antd-mobile'

import ClubInfoPopUp from '../../Popup/ClubInfo'
import { Button } from 'antd-mobile'
import useRootStore from '@store/useRootStore'
import { Helmet } from 'react-helmet'

const Test: React.FC = () => {
  const { testStore } = useRootStore()

  const [clubVisible, setClubVisible] = useState(false)
  const doOpenShowDetail = () => {
    setClubVisible(true)
  }

  const doIncrement = () => {
    testStore.doIncrement()
  }


  const doDecrement = () => {
    testStore.doDecrement()
  }


  const doCloseShowDetail = () => {
    setClubVisible(null)
  }

  const paymentSuccessMessage = (
    <div>
      <Helmet>
        <script>{
          `function testMethod(aaaa) {
            console.log(aaaa.tid)
          }`
        }
        </script>
      </Helmet>
    </div>)



  const doOpenPopup = () => {
    window.name = 'parentForm'
    document.domain = "localhost"
    const opts = 'width=525, height=648, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no'
    window.open('#/popup2', 'PAY_POPUP_' + new Date().getTime(), opts)
    window.focus()
  }

  console.log('Render ------> Test')

  return (
    <ContentWrap>
      <TitleWrap>
        <Title>Test</Title>
      </TitleWrap>
      <div>
        {paymentSuccessMessage}


        Counter: {testStore.totalPrice} <br />
        Counter: {testStore.doTotal} <br />
        <Button type="primary" onClick={doIncrement}> + </Button>
        <WhiteSpace />
        <Button type="primary" onClick={doDecrement}> - </Button>
        <WhiteSpace />
      </div>

      <Button type="primary" onClick={doOpenShowDetail}>popup</Button>


      <WhiteSpace />
      <Button type="primary" onClick={doOpenPopup}>real popup</Button>

      <Drawer
        title='test title'
        placement="bottom"
        height="100%"
        onClose={doCloseShowDetail}
        visible={clubVisible}
        style={{ textAlign: 'center', borderBottom: 'none !important' }}
        bodyStyle={{ padding: '0' }}
        className="club-info"
      >
        <ClubInfoPopUp />
      </Drawer>


    </ContentWrap>
  )
}

export default observer(Test)