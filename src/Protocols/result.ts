import { IsString, IsInt } from 'class-validator'

import { Schema$ResponseBase } from '../interface/common'
import {
  Schema$MatchupBase,
  Schema$MatchupMetaSport,
  Schema$MatchupMetaCategory,
  Schema$MatchupMetaTournament,
  Schema$MatchupMetaTeam,
  Schema$MatchupMetaMarket,
  Schema$MatchupMetaOutcome,
} from '../interface/matchup'

export interface Schema$ResultOutcome {
  id: string
  result: number
}

export interface Schema$ResultMarket {
  specifiers: { [id: string]: string }
  outcomes: Schema$ResultOutcome[]
}

export interface Schema$MatchupResult extends Schema$MatchupBase {
  results: { [type: string]: Schema$ResultMarket[] }
}

export namespace IPreMatchResult {
  export class Params {
    @IsString()
    gameKey: string

    @IsInt()
    sportId?: number

    // 인피니티 스크롤을 위한 마지막 항목의 키값 그 다음 결과 부터 가져온다.
    @IsString()
    orderId?: string
  }

  export interface Schema extends Schema$ResponseBase {
    emblemPrefix: string
    metaSports: Schema$MatchupMetaSport[]
    metaCategories: Schema$MatchupMetaCategory[]
    metaTournaments: Schema$MatchupMetaTournament[]
    metaTeams: Schema$MatchupMetaTeam[]
    metaMarkets: Schema$MatchupMetaMarket[]
    metaOutcomes: Schema$MatchupMetaOutcome[]
    matches: Schema$MatchupResult[]
  }
}
