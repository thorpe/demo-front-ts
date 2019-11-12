import React from 'react'
import { observer, useLocalStore } from 'mobx-react'
import moment from 'moment'
import { Tag } from 'antd'

function Message({ message, style }: any) {
    const selfStore = useLocalStore(() => ({
        get time() {
            return moment(message.time).format('h:mm:ss a')
        },
        get color() {
            if (message.from === 'browser') {
                return '#87d068'
            } else if (message.from === 'server') {
                return '#2db7f5'
            }
            return '#108ee9'
        },
        get fromText() {
            if (message.from === 'browser') {
                return 'You'
            } else if (message.from === 'server') {
                return 'Server'
            }
            return 'Console'
        },
        get content() {
            if (!message.data) {
                return null
            }
            return typeof message.data === 'object' ? JSON.stringify(message.data) : message.data
        }
    }))
    return (
        <div  style={style}>
            <div  style={{ marginBottom: !!selfStore.content ? 5 : 0 }}>
                {message.event && <Tag color="#f50">{message.event}</Tag>}
                <Tag color={selfStore.color}>{selfStore.fromText}</Tag>
                <span>{selfStore.time}22</span>
            </div>
            <div >{selfStore.content}11</div>
        </div>
    )
}

export default observer(Message)
