import React from 'react'
import { observer } from 'mobx-react'
import { message, Input, Button, Checkbox } from 'antd'

import styles from './index.scss'
import useRootStore from '@store/useRootStore'
import { socketConnect, socketDisconnect } from '@services/Websocket'
import { LOCALSTORAGE_KEYS } from '@constants/index'

function Connect() {
  const { socketStore } = useRootStore()

  const [url, setUrl] = React.useState(localStorage.getItem(LOCALSTORAGE_KEYS.SOCKET_URL))

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target
    setUrl(value)
    localStorage.setItem(LOCALSTORAGE_KEYS.SOCKET_URL, value)
  }

  function handleConnect() {
    alert('2')
    if (!url) {
      message.destroy()
      return message.error('Please input socket url!')
    }
    socketConnect(url)
    socketStore.clearMessages()
  }

  return (
    <div >
      <div >
        <Input value={url} onChange={handleChange} />
        {socketStore.isSocketIO && (
          <Checkbox disabled={socketStore.socketIsConnected} className={styles.checkbox} checked={socketStore.notSupportPolling} onChange={e => socketStore.setNotSupportPolling(e.target.checked)}>
            no polling
          </Checkbox>
        )}
        <Button  type="primary" onClick={handleConnect} disabled={socketStore.socketIsConnected}>
          connect
        </Button>
        <Button  type="danger" onClick={socketDisconnect} disabled={!socketStore.socketIsConnected}>
          disconnect
        </Button>
      </div>
      <blockquote className={styles.tips}>
        protocol//ip or domain:host (example:{' '}
        {socketStore.isSocketIO ? 'wss://showcase.jackple.com' : 'ws://127.0.0.1:3001'})
      </blockquote>
    </div>
  )
}

export default observer(Connect)
