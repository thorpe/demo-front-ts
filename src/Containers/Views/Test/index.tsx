import React, { useState } from 'react'


import { observer } from 'mobx-react'
import { Title, TitleWrap, ContentWrap } from '@styles/base.style'
import { Drawer } from 'antd'
import { WhiteSpace } from 'antd-mobile'

import ClubInfoPopUp from '../Popup/ClubInfo'
import { Button } from 'antd-mobile'
import useRootStore from '@store/useRootStore'

const Test: React.FC = () => {

  const { testStore, socketStore } = useRootStore()

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


  return (
    <ContentWrap>
      <TitleWrap>
        <Title>Test</Title>
      </TitleWrap>

      <div>
        Counter: {testStore.count} <br />
        Counter: {socketStore.test} <br />
        <Button type="primary" onClick={doIncrement}> + </Button>
        <WhiteSpace />
        <Button type="primary" onClick={doDecrement}> - </Button>
        <WhiteSpace />
      </div>

      <Button type="primary" onClick={doOpenShowDetail}>popup</Button>

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