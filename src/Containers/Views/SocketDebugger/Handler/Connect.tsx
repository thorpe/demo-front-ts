import React from 'react'
import { observer } from 'mobx-react'
import { message, Input, Checkbox } from 'antd'
import { Button } from 'antd-mobile'

import styles from './index.scss'
import useRootStore from '@store/useRootStore'
import { socketConnect } from '@services/Websocket'
import { LOCALSTORAGE_KEYS } from '@constants/index'

const Connect: React.FC = props => {
  const { socketStore } = useRootStore()

  const [url, setUrl] = React.useState(localStorage.getItem(LOCALSTORAGE_KEYS.SOCKET_URL))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setUrl(value)
    localStorage.setItem(LOCALSTORAGE_KEYS.SOCKET_URL, value)
  }

  const handleConnect = async () => {
    alert('2')
    if (!url) {
      message.destroy()
      return message.error('Please input socket url!')
    }
    socketConnect(url)
    socketStore.clearMessages()
  }

  return (
    <div css={{ 'z-index': 1000000  }}>
      <div>
        <Input value={url} onChange={handleChange} />
        {socketStore.isSocketIO && (
          <Checkbox disabled={socketStore.socketIsConnected} className={styles.checkbox} checked={socketStore.notSupportPolling} onChange={e => socketStore.setNotSupportPolling(e.target.checked)}>
            no polling
          </Checkbox>
        )}
        <Button type="primary" onClick={() => handleConnect()}>
          connect
        </Button>
      </div>
    </div>
  )
}

export default observer(Connect)
