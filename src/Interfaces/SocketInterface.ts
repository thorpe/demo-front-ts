export namespace SocketInterface {

  export type SocketType = 'socket.io' | 'websocket'

  export type DataFormatType = 'json' | 'text'

  export interface Message {
    event: string
    time?: number
    from: 'browser' | 'server' | 'console'
    data: any
  }

}