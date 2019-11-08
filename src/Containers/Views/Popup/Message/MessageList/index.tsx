/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { message } from 'antd'
import { ListView } from 'antd-mobile'
import { concat, find, remove, isNumber } from 'lodash'
import PageLoading from '@components/PageLoading'
import { Button, Point, Loaded } from 'styles/base.style'
import useRootStore from '@store/useRootStore'
import { MessageRecordSource, MessageStore } from '@store/messageStore'
import { delay } from '@utils/utils'
import styled from 'themes/theme'
import { Schema$Message } from '@v2/protocol/message'
import MessageListItem from '../MessageListItem'

// css
import { ListHeaderWrap, ListTitle, TopBtnStyle } from '../index.style'
import AllDeletePopup from '../Popup/AllDeletePopup'

const MessageListWrap = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: calc(100% - 38px);
  border-radius: 0;
  .am-list-footer {
    margin-top: 0;
  }
`

// const EmptyStyle = (theme: Theme) => css`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: calc(100vh - 130px);
//   background: ${theme.color.contentsBg};
// `

interface MessageListProps {
  currentIndex: number
  index: number
  dir: number
  clubId?: string
  fetchMessageList?: (index: number, size: number, dir: number, clubId: string, resetForce: boolean) => Promise<MessageRecordSource>
  messageStore: MessageStore
}

interface MessageListState {
  // antd-mobile의 ListView.DataSource 가 any로 설정되어 있어서 어쩔수 없이 any로 한다.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataSource: any
  isLoading: boolean
  hasMore: boolean
  visibleDelete: boolean
  disabled: boolean
}

const PAGE_SIZE = 20

// function getEmptyPage(isLoading: boolean) {
//   return <div css={EmptyStyle}>{isLoading ? <PageLoading /> : <Loaded />}</div>
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MyBody(props: any) {
  const { children } = props
  return <div className="am-list-body my-body">{children}</div>
}

class MessageList extends React.Component<MessageListProps, MessageListState> {
  private mounted = false

  private lastIndex = -1

  private rowData = []

  constructor(props) {
    super(props)

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })

    this.state = {
      dataSource,
      isLoading: false,
      hasMore: true,
      visibleDelete: false,
      disabled: false,
    }
  }

  componentDidMount() {
    const { currentIndex, index } = this.props
    this.lastIndex = currentIndex
    this.mounted = true

    if (currentIndex === index) {
      this.fetch(true)
    }
  }

  async fetch(reset = false) {
    const { dataSource, isLoading, hasMore } = this.state
    const { index, dir, fetchMessageList, clubId } = this.props

    if (reset === true) {
      const newSource = dataSource.cloneWithRows([])
      this.rowData = []
      this.setState({
        dataSource: newSource,
        isLoading: true,
        hasMore: true,
      })
    } else {
      if (isLoading || !hasMore) {
        return
      }

      this.setState({ isLoading: true })
    }
    const fetched: MessageRecordSource = await fetchMessageList(index, PAGE_SIZE, dir, clubId,  reset)

    if (fetched) {
      this.rowData = concat(this.rowData, fetched.lastFetched || [])
      const rows = Object.assign({}, this.rowData)
      const newSource = dataSource.cloneWithRows(rows)

      // TEST: loading test
      await delay(250)

      this.setState({
        isLoading: false,
        dataSource: newSource,
        hasMore: fetched.hasMore,
      })
    } else {
      this.setState({
        isLoading: false,
        dataSource: dataSource.cloneWithRows([]),
        hasMore: false,
      })
    }
  }

  onEndReached = async event => {
    await this.fetch()
  }

  onClickReadAllMessage = async () => {
    const { messageStore } = this.props
    const { messageList } = messageStore
    messageList.readableCount = 0
    await messageStore.readMessage({ all: true })
    for (const data of this.rowData) {
      if (data.receiverRead === 0) {
        data.receiverRead = 1
      }
    }
    this.onRefreshView()
  }

  onClickDeleteAllMessage = setVisible => {
    setVisible(true)
  }

  setVisibleDelete = (visible: boolean) => {
    this.setState({
      visibleDelete: visible,
    })
  }

  onRefreshView = async () => {
    const newSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })
    this.setState({
      dataSource: newSource.cloneWithRows(Object.assign({}, this.rowData)),
    })
  }

  onDeleteMessage = async (messageId?: string) => {
    const { dir, messageStore } = this.props
    if (messageId) {
      const row = find(this.rowData, { id: messageId })
      if (dir === 1 && row.itemCode > 0 && row.receivedItem === 0) {
        message.warning('아이템을 받은 후 메세지 삭제가 가능합니다.')
      } else {
        await messageStore.deleteMessage({ messageId })
        remove(this.rowData, { id: messageId })
        this.onRefreshView()
        message.info('메세지를 삭제 하였습니다.')
      }
    } else {
      message.error('선택된 메세지가 없습니다.')
    }
  }

  onDeleteAllMessage = async () => {
    const { dir, messageStore } = this.props
    const { messageList } = messageStore
    if (isNumber(dir)) {
      if (dir === 1 && messageList.receivedItemCount > 0) {
        message.warning('아이템을 받은 후 메세지 삭제가 가능합니다.')
        this.setVisibleDelete(false)
      } else {
        await messageStore.deleteMessage({ dir, all: true })
        this.rowData = []
        this.onRefreshView()
        message.info('메세지를 모두 삭제 하였습니다.')
      }
    } else {
      message.error('메세지를 삭제 할 수 없습니다.')
    }
  }

  onReceiveItem = async (messageId?: string) => {
    const { messageStore } = this.props
    const row = find(this.rowData, { id: messageId })
    if (row.receivedItem === 0) {
      await messageStore.receiveMessage({ messageId })
      row.receivedItem = 1
      message.info(this.makeReceiveItemMessage(row))
    }
    this.onRefreshView()
  }

  onReceiveAllItems = async () => {
    const { messageStore } = this.props
    const { messageList } = messageStore
    messageList.receivedItemCount = 0
    await messageStore.receiveMessage({ all: true })
    for (const row of this.rowData) {
      if (row.receivedItem === 0) {
        row.receivedItem = 1
      }
    }
    message.info('아이템을 모두 받았습니다.')
    this.onRefreshView()
  }

  makeReceiveItemMessage = (row: Schema$Message): string => {
    if (row.item.volume_object === 1) {
      return `${row.itemVolume} ${row.item.name}을(를) 획득 하였습니다.`
    }
    return `${row.item.name}을(를) 획득 하였습니다.`
  }

  render() {
    const { isLoading, dataSource, visibleDelete } = this.state
    const { currentIndex, index, messageStore } = this.props
    const { messageList } = messageStore

    if (this.mounted) {
      // catch event from tab's index changes
      if (currentIndex === index && currentIndex !== this.lastIndex) {
        this.fetch(true)
      }
    }

    this.lastIndex = currentIndex

    // TODO: 복수개의 ListView 의 페이지 끝 도달 이벤트가 처리되어 아래와 같이 예외 처리 추가! 근본적 해결책은?
    const endReachedHandler = currentIndex === index ? this.onEndReached : undefined

    let header = null
    if (currentIndex === 1 && messageList) {
      header = (
        <ListHeaderWrap>
          <ListTitle>
            보낸 메세지 총 <Point primary>{messageList.total}</Point> 개
          </ListTitle>

          <div style={{ float: 'right' }}>
            <Button
              css={TopBtnStyle}
              className={`${messageList.total === 0 ? 'disabled' : ''}`}
              onClick={() => {
                this.setVisibleDelete(true)
              }}
              disabled={messageList.total === 0}
            >
              전체삭제
            </Button>
          </div>
        </ListHeaderWrap>
      )
    } else if (currentIndex === 0 && messageList) {
      header = (
        <ListHeaderWrap>
          <ListTitle>
            받은 메세지 총 <Point primary>{messageList.total}</Point> 개
          </ListTitle>

          <div style={{ float: 'right' }}>
            <Button
              css={TopBtnStyle}
              className={`${messageList.total === 0 ? 'disabled' : ''}`}
              onClick={() => {
                this.setVisibleDelete(true)
              }}
              disabled={messageList.total === 0}
            >
              전체삭제
            </Button>
            <Button
              css={TopBtnStyle}
              className={`${messageList.readableCount === 0 ? 'disabled' : ''}`}
              onClick={this.onClickReadAllMessage}
              disabled={messageList.readableCount === 0}
            >
              전체읽기
            </Button>
            <Button
              css={TopBtnStyle}
              className={`received-all ${messageList.receivedItemCount === 0 ? 'disabled' : ''}`}
              onClick={this.onReceiveAllItems}
              disabled={messageList.receivedItemCount === 0}
            >
              모두받기
            </Button>
          </div>
        </ListHeaderWrap>
      )
    }

    return (
      <MessageListWrap>
        {header}
        <ListView
          // ref={el => (this.lv = el)}
          dataSource={dataSource}
          renderFooter={() => <div css={{ textAlign: 'center' }}>{isLoading ? <PageLoading /> : <Loaded />}</div>}
          renderRow={rowData => {
            return (
              <MessageListItem
                index={currentIndex}
                track={rowData}
                onDelete={this.onDeleteMessage}
                onReceiveItem={this.onReceiveItem}
              />
            )
          }}
          className="am-list"
          pageSize={PAGE_SIZE}
          // useBodyScroll
          renderBodyComponent={() => <MyBody />}
          scrollRenderAheadDistance={500}
          onEndReached={endReachedHandler}
          onEndReachedThreshold={10}
        />
        {/* 전체 삭제 팝업 */}
        <AllDeletePopup visible={visibleDelete} setVisible={this.setVisibleDelete} onDelete={this.onDeleteAllMessage} />
      </MessageListWrap>
    )
  }
}

interface WrapperProps {
  currentIndex: number
  index: number
  dir: number
  clubId?: string
}

const Wrapper: React.FC<WrapperProps> = (props: WrapperProps) => {
  const { messageStore } = useRootStore()
  const { currentIndex, index, dir, clubId } = props
  const listProps = {
    currentIndex,
    index,
    dir,
    clubId,
    fetchMessageList: messageStore.fetchMessageList,
    messageStore,
  }

  return <MessageList {...listProps} />
}

export default Wrapper
