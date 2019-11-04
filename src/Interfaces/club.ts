import { SchemaResponseBase, SchemaClubInfo } from '@interfaces/common'
import { Schema$Outcome } from '@interfaces/game'

/**
 * /club/list
 */
export namespace IClubList {
  export interface Params {}

  export interface Schema extends SchemaResponseBase {
    items?: SchemaClubInfo[]
  }
}

export interface Schema$ClubBetFold {
  id: string
  matchId: number
  clubBetId: string
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
}

export interface Schema$ClubBet {
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
}

export interface Schema$ClubBetRecord {
  bet: Schema$ClubBet
  folds: Schema$ClubBetFold[]
}
