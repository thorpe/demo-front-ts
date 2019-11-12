import { observable, action, computed } from 'mobx'

import { StoreExt } from '@helpers/reactExt'
import { LOCALSTORAGE_KEYS } from '@constants/index'
import { SOCKER_TYPES, DATA_FORMATS } from '@constants/socket'
import { SocketInterface } from '@interfaces/SocketInterface'

/**
 * socket debugger store
 *
 * @export
 * @class SocketStore
 * @extends {StoreExt}
 */
export class SocketStore extends StoreExt {

  @observable
  socketType: SocketInterface.SocketType = (localStorage.getItem(LOCALSTORAGE_KEYS.SOCKET_TYPE) as SocketInterface.SocketType) || SOCKER_TYPES[0]

  @observable
  dataFormat: SocketInterface.DataFormatType = (localStorage.getItem(LOCALSTORAGE_KEYS.DATA_FORMAT) as SocketInterface.DataFormatType) || DATA_FORMATS[0]

  @observable
  socketIsConnected = false

  @observable
  messages: SocketInterface.Message[] = []

  @observable
  test = ""

  @observable
  notSupportPolling: boolean = localStorage.getItem(LOCALSTORAGE_KEYS.NOT_SUPPORT_POLLING) === 'true'

  @computed
  get isSocketIO() {
    return this.socketType === SOCKER_TYPES[0]
  }

  @action
  setSocketType = (type: SocketInterface.SocketType) => {
    this.socketType = type
  }

  @action
  setDataFormat = (dataFormat: SocketInterface.DataFormatType) => {
    this.dataFormat = dataFormat
  }

  @action
  setSocketIsConnected = (socketIsConnected: boolean) => {
    this.socketIsConnected = socketIsConnected
  }

  @action
  clearMessages = () => {
    this.messages = []
  }

  @action
  addMessage = (message: SocketInterface.Message) => {
    if (!message.time) {
      message.time = new Date().getTime()
    }
    this.test = message.data.message
    console.log("--------------")
    console.log(this.test)
    console.log(message)
    this.messages.push(message)
  }

  @action
  setNotSupportPolling = (val: boolean) => {
    this.notSupportPolling = val
    localStorage.setItem(LOCALSTORAGE_KEYS.NOT_SUPPORT_POLLING, String(val))
  }
}

export default new SocketStore()
