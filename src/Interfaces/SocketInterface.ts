import { CommonInterface } from '@interfaces/CommonInterface'

export namespace SocketInterface {

  export type SocketType = 'socket.io' | 'websocket'

  export type DataFormatType = 'json' | 'text'

  export interface Message {
    event: string
    time?: number
    from: 'browser' | 'server' | 'console'
    data: any
  }


  export interface Message extends CommonInterface.ResponseBase {
    event: string
    time?: number
    from: 'browser' | 'server' | 'console'
  }

}