import React, { useState } from 'react'
import { TabBar } from 'antd-mobile'
import useRootStore from '@store/useRootStore'


const Footer: React.FC = props => {
  const { routerStore } = useRootStore()
  const [selectedTab, setSelectedTab] = useState('blueTab')

  const doChangeTab = async (inputTab, path) => {
    setSelectedTab(inputTab)
    routerStore.replace(path)
  }

  return (
    <div style={{ position: 'fixed', height: '50px', width: '100%', bottom: 0 }}>
      <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white">
        <TabBar.Item
          title="Life"
          key="Life"
          icon={<div style={{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }} />}
          selectedIcon={<div style={{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }} />}
          selected={selectedTab === 'blueTab'}
          badge={1}
          onPress={() => doChangeTab('blueTab','test')}
          data-seed='logId'
        >
        </TabBar.Item>
        <TabBar.Item
          icon={<div style={{ width: '22px', height: '22px', background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }} />}
          selectedIcon={<div style={{ width: '22px', height: '22px', background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }} />}
          title='Koubei'
          key='Koubei'
          badge={'new'}
          selected={selectedTab === 'redTab'}
          onPress={() => doChangeTab('redTab','test')}
          data-seed='logId1'
        >
        </TabBar.Item>
        <TabBar.Item
          icon={<div style={{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }} />}
          selectedIcon={<div style={{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }} />}
          title='Friend'
          key='Friend'
          dot
          selected={selectedTab === 'greenTab'}
          onPress={() => doChangeTab('greenTab','test')}
        >
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
          title='My'
          key='my'
          selected={selectedTab === 'yellowTab'}
          onPress={() => doChangeTab('yellowTab','test')}
        >
        </TabBar.Item>
      </TabBar>
    </div>
  )

}

export default Footer
