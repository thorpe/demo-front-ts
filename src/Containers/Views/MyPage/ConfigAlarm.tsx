import React from 'react'

import { observer } from 'mobx-react'
import { Title, TitleWrap, ContentWrap } from '@styles/base.style'

const ConfigAlarm: React.FC = () => {

  return (
    <ContentWrap>
      <TitleWrap>
        <Title>Alarm</Title>
      </TitleWrap>


    </ContentWrap>
  )
}

export default observer(ConfigAlarm)