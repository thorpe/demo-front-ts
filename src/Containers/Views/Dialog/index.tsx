/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { Fragment } from 'react'
import { observer } from 'mobx-react'
import useRootStore from '@store/useRootStore'
import { Modal } from 'antd-mobile'
import { DialogType } from '@store/globalStore'

const Dialog: React.FC = props => {
  const { globalStore } = useRootStore()
  const { currentDialog } = globalStore
  if (!currentDialog) {
    return <Fragment />
  }

  const {
    type,
    title,
    custom,
    text = [],
    callbackClose,
    singlePress,
    negativePress,
    positivePress,
    callbackPositive,
    callbackNegative
  } = currentDialog

  let contents
  if (custom) {
    contents = custom
  } else {
    contents = []
    for (const el of text) {
      contents.push(<p>{el}</p>)
    }
  }

  const footer = []
  if (type === DialogType.SINGLE) {
    footer.push({
      text: singlePress,
      onPress: () => {
        callbackClose()
      }
    })
  } else {
    footer.push({
      text: negativePress,
      onPress: () => {
        callbackClose()
        if (callbackNegative) {
          callbackNegative()
        }
      }
    })
    footer.push({
      text: positivePress,
      onPress: () => {
        callbackClose()
        if (callbackPositive) {
          callbackPositive()
        }
      }
    })
  }

  return (
    <Modal visible transparent maskClosable={false} onClose={callbackClose} title={title} footer={footer}>
      {contents}
    </Modal>
  )
}

export default observer(Dialog)
