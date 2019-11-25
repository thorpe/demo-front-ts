import {
  socketConnect as socketConnectFromSocketIO,
  socketDisconnect as socketDisconnectFromSocketIO,
  send as sendFromSocketIO
} from './SocketIO'


export const socketConnect = (url: string) => {
  return socketConnectFromSocketIO(url)
}

export const socketDisconnect = () => {
  return socketDisconnectFromSocketIO()
}

export const send = (event: string, data: any) => {
  return sendFromSocketIO(event, data)
}
