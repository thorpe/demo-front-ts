import { IsString, IsInt, IsNumber } from 'class-validator'

import { Schema$ResponseBase, Schema$ClubInfo } from '../interface/common'
import { BET_TYPE_ON, MATCHUP_CATEGORY, BET_CALL_TYPE } from '../../../protocol/Generated/ts/GameCommon'
import {
  Schema$MatchupBase,
  Schema$MatchupMetaSport,
  Schema$MatchupMetaCategory,
  Schema$MatchupMetaTournament,
  Schema$MatchupMetaTeam,
  Schema$MatchupFilter,
  Schema$MatchupMetaOutcome,
  Schema$MatchupMetaMarket,
  Schema$MatchupMetaMatchStatus,
} from '../interface/matchup'
import { Schema$ClubRules } from '../interface/rules'

export interface Schema$Outcome {
  type: string
  rate: number
}

export interface Schema$MarketBlock {
  specifiers: { [id: string]: string }
  outcomes: Schema$Outcome[]
}

export interface Schema$MatchupMarket extends Schema$MatchupBase {
  matchStatus: number
  markets: { [type: string]: Schema$MarketBlock[] }
}

export interface Schema$BetCall {
  typeOn: BET_TYPE_ON
  category: MATCHUP_CATEGORY
  callType: BET_CALL_TYPE
  matchId: number
  sportId: number
  categoryId: number
  tournamentId: number
  homeTeamId: number
  awayTeamId: number
  marketId: string
  marketType: string
  specifiers: { [id: string]: string }
  selection: string
  outcomeRate: string
  betMoney: number
}

/**
 * /game/joinClub
 */
export namespace IJoinClub {
  export interface Params {
    clubId?: string
    ownerId?: string
  }

  export interface Schema extends Schema$ResponseBase {
    club: Schema$ClubInfo
  }
}

/**
 * /game/matchup
 */
export namespace IMatchupClub {
  export interface Params {
    clubId?: string
  }

  export interface Schema extends Schema$ResponseBase {
    club: Schema$ClubInfo
    rules: Schema$ClubRules
  }
}

export namespace IMatchupItems {
  export class Params {
    // clubId 가 없으면
    @IsString()
    clubId?: string

    @IsInt()
    sportId?: number

    tournamentIds?: number[]

    // 인피니티 스크롤을 위한 마지막 항목의 키값 그 다음 결과 부터 가져온다.
    @IsString()
    orderId?: string

    @IsNumber()
    limit?: number
  }

  export interface Schema extends Schema$ResponseBase {
    emblemPrefix: string
    metaSports: Schema$MatchupMetaSport[]
    metaCategories: Schema$MatchupMetaCategory[]
    metaTournaments: Schema$MatchupMetaTournament[]
    metaTeams: Schema$MatchupMetaTeam[]
    metaMarkets: Schema$MatchupMetaMarket[]
    metaOutcomes: Schema$MatchupMetaOutcome[]
    metaMatchStatuses: Schema$MatchupMetaMatchStatus[]
    matches: Schema$MatchupMarket[]
    lastOrderId: string
  }
}

export namespace IBet {
  export interface Params {
    clubId: string
    typeOn: number
    category: number
    betCalls: Schema$BetCall[]
    pickId: number
  }

  export interface Schema extends Schema$ResponseBase {
    club?: Schema$ClubInfo
  }
}

export namespace IMatchupFilters {
  export interface Params {
    clubId?: string

    gameKey?: string

    sportId?: number
  }

  export interface Schema extends Schema$ResponseBase {
    major: Schema$MatchupFilter[]
    minor: Schema$MatchupFilter[]
    metaCategories: Schema$MatchupMetaCategory[]
    metaTournaments: Schema$MatchupMetaTournament[]
    totalMatchCount: number // total match count
  }
}

export namespace IMajorTournaments {
  export interface Params {
    sportId?: number

    tournamentIds?: string[]
  }

  export interface Schema extends Schema$ResponseBase {
    emblemPrefix: string
    metaSports: Schema$MatchupMetaSport[]
    metaCategories: Schema$MatchupMetaCategory[]
    metaTournaments: Schema$MatchupMetaTournament[]
    metaTeams: Schema$MatchupMetaTeam[]
    metaMarkets: Schema$MatchupMetaMarket[]
    matches: Schema$MatchupMarket[]
  }
}

export namespace IUpdateMatchupItems {
  export interface Params {
    clubId: string
    data: { [id: string]: string[] }
  }

  export interface Schema extends Schema$ResponseBase {
    matches: Schema$MatchupMarket[]
  }
}
