import { observable, action, computed } from 'mobx'

import { StoreExt } from '@helpers/ReactExt'
import { LOCALSTORAGE_KEYS, SOCKER_TYPES, DATA_FORMATS } from '@constants/Index'
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
  socketType: SocketInterface.SocketType = SOCKER_TYPES[0]

  @observable
  dataFormat: SocketInterface.DataFormatType = DATA_FORMATS[0]

  @observable
  socketIsConnected = false

  @observable
  messages: SocketInterface.Message[] = []

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
    this.messages.push(message)
  }

  @action
  setNotSupportPolling = (val: boolean) => {
    this.notSupportPolling = val
    localStorage.setItem(LOCALSTORAGE_KEYS.NOT_SUPPORT_POLLING, String(val))
  }
}

export default new SocketStore()
