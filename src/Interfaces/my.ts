import { SchemaResponseBase } from '@interfaces/common'
import { Schema$Outcome } from '@interfaces/game'

export enum SEARCH_BET_LIST_STATE {
  ALL = 0,
  ONGOING = 1,
  CLOSED = 2,
}
export enum MATCHUP_CATEGORY {
  CROSS = 0,
  WIN_DRAW_LOSE = 1,
  HANDICAP = 2,
  LIVE = 3,
  MATCH_DETAIL = 4,
  LIVE_DETAIL = 5,
  SPECIAL = 6,
}
export enum LIST_ORDER {
  ASCENDING = 0,
  DESCENDING = 1,
}

export enum SEARCH_BET_LIST_FILTER {
  DATE_BET = 0,
  DIVIDEND_RATE = 1,
  FOLD_COUNT = 2,
  DIVIDEND_MONEY = 3,
  BET_MONEY = 4,
  DIVIDEND_HEART = 5,
  BET_HEART = 6,
}

export interface Schema$MetaData {
  name: string
  emblem: string
  emblemM: string
}

export interface Schema$BettorBetFold {
  matchId: number
  dateOfMatch: string
  sportId: number
  sportName: string
  categoryId: number
  categoryName: string
  tournamentId: number
  tournamentName: string
  homeTeamId: number
  homeTeamName: string
  awayTeamId: number
  awayTeamName: string
  marketId: string
  marketType: string
  marketName: string
  specialBetValue: string
  selection: string
  outcomeRate: string
  outcomeResult: string
  hitState: number
  date_match: string
  date_closed: string

  selectionName: string
  outcomeName: string
  oddsFields: Schema$Outcome[]

  homeScore?: number
  awayScore?: number
}

export interface Schema$BettorBetInfo {
  id: string
  userId: string
  clubId: string
  clubName: string
  betNumber: string
  typeOn: number
  category: number
  callType: number
  bet_property: number
  betMoney: number
  foldCount: number
  dividend: number
  dividendRate: string
  hitState: number
  hitRatio: number
  canceled: boolean
  cancelType: number
  closed: boolean
  date_closed: string
  createdAt: string
  // folds: Schema$BettorBetFold[]
}

export interface Schema$BettorBetRecord {
  bet: Schema$BettorBetInfo
  folds: Schema$BettorBetFold[]
}

export namespace IBetting {
  export interface Params {
    targetUserId?: string
    targetClubId?: string
    offset: number
    limit: number
    state?: SEARCH_BET_LIST_STATE
    matchupCategory?: MATCHUP_CATEGORY
    filter?: SEARCH_BET_LIST_FILTER
    order?: LIST_ORDER
  }

  export interface Schema extends SchemaResponseBase {
    limit: number
    total: number
    items: Schema$BettorBetRecord[]
  }
}
