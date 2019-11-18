import React from 'react'

import { observer } from 'mobx-react'
import { ContentWrap } from '@styles/base.style'
import { Tabs, Badge } from 'antd-mobile'

const Dashboard: React.FC = () => {

  const tabs = [
    { title: <Badge text={'3'}>컬리추천</Badge> },
    { title: <Badge dot>신상품</Badge> },
    { title: <Badge >베스트상품</Badge> },
    { title: <Badge >알뜰쇼핑</Badge> },
    { title: <Badge text={'1'}>이벤트</Badge> },
  ]

  return (
    <ContentWrap>


      <Tabs tabs={tabs}
            initialPage={1}
            onChange={(tab, index) => { console.log('onChange', index, tab) }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab) }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
          Content of first tab1111
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
          Content of second tab2222
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
          Content of third tab3333
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
          Content of third tab4444
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
          Content of third tab5555
        </div>
      </Tabs>

    </ContentWrap>
  )
}

export default observer(Dashboard)