import React, { useState } from 'react'


import { observer } from 'mobx-react'
import { Title, TitleWrap, ContentWrap } from '@styles/base.style'
import { Drawer } from 'antd'


import ClubInfoPopUp from '../Popup/ClubInfo'


const Search: React.FC = () => {

  const [clubVisible, setClubVisible] = useState(false)


  const doCloseShowDetail = () => {
    setClubVisible(null)
  }



  return (
    <ContentWrap>
      <TitleWrap>
        <Title>Search</Title>
      </TitleWrap>


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

export default observer(Search)