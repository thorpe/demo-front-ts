import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { Title, TitleWrap, ContentWrap } from '@styles/base.style'
import { Drawer } from 'antd'

import ClubInfoPopUp from '../Popup/ClubInfo'
import intl from 'react-intl-universal'
import { Button } from 'antd-mobile'

const Test: React.FC = () => {
  const [clubVisible, setClubVisible] = useState(false)
  const doOpenShowDetail = () => {
    setClubVisible(true)
  }

  const doCloseShowDetail = () => {
    setClubVisible(null)
  }


  return (
    <ContentWrap>
      <TitleWrap>
        <Title>Test</Title>
      </TitleWrap>


      <Button type="primary" onClick={doOpenShowDetail}>popup</Button>

      <Drawer
        title={intl.get('component.club-info')}
        placement="bottom"
        height="80%"
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