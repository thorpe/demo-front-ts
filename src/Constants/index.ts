export enum COOKIE_KEYS {
  LANG = 'lang'
}

export enum LOCALSTORAGE_KEYS {
  ACCESS_TOKEN = 'access_token',
  USER_ID = 'user_id',
  SIDE_BAR_COLLAPSED = 'sideBarCollapsed',
  USER_INFO = 'user_info',
}

export enum SOCKET_TYPE {
  SOCKETIO = 'socket.io',
  WEBSOCKET = 'websocket',
}

export const SOCKER_TYPES: SOCKET_TYPE[] = [
  SOCKET_TYPE.SOCKETIO,
  SOCKET_TYPE.WEBSOCKET,
]

export enum DATA_FORMAT_TYPE {
  JSON = 'json',
  TEXT = 'text',
}

export const DATA_FORMATS: DATA_FORMAT_TYPE[] = [DATA_FORMAT_TYPE.JSON, DATA_FORMAT_TYPE.TEXT]
