export enum LiveProtocol {
  // (client <-> server) sync operation: request and response
  SYNC_SOMETHING = 10000,
  SYNC_ENTER = 10001,

  // (server -> client) async trnasfer from server(notifying)
  NOTIFY_SOMETHING = 20000,
  NOTIFY_SPECIAL_MATCH_LIST = 20001,
  NOTIFY_SPECIAL_ODDS_LIST = 20002,

  // (client -> server) protocols doesn't need to be responded by server
  REPORT_SOMETHING = 30000,

  UNIFIED_FEED = 40001,
}
