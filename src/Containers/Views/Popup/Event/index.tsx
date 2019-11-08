import React, { PureComponent } from 'react'
import { Drawer } from 'antd'
import { RootConsumer } from '@shared/App/Provider'
import { GlobalStore } from '@store/globalStore'

export interface EventProps {
  globalStore: GlobalStore
}

class Event extends PureComponent<EventProps> {
  render() {
    const { globalStore } = this.props
    const collapsed = globalStore.collapsedEvent

    const onClose = () => {
      globalStore.toggleEventCollapsed(true)
    }

    return (
      <Drawer visible={!collapsed} width="100%" height="100%" placement="right" onClose={onClose}>
        <span>Event</span>;
      </Drawer>
    )
  }
}

export default function Wrapper() {
  return <RootConsumer>{({ globalStore }) => <Event globalStore={globalStore} />}</RootConsumer>
}
