import { BigInteger }  from 'big-integer'
import { SchemaResponseBase } from '@interfaces/common'

export interface Schema$ClubPortal {
  id?: string
  name?: string
  sportsCount?: number
  soluble?: number
  isLiveSupport?: boolean
  favorite?: boolean
}

export interface Schema$HotMatch {
  sportId?: number
  matchId?: number
  dateOfMatch?: Date
  sportName?: string
  tournamentName?: string
  homeTeamName?: string
  homeTeamEmblem?: string
  awayTeamName?: string
  awayTeamEmblem?: string
}

export interface Schema$AttendanceUnit {
  item_code?: number
  quantity?: BigInteger
  period?: number
  volume?: BigInteger
  name?: string
  icon?: string
  icon_m?: string
}

/**
 * /component/clubPortals
 */
export namespace IClubPortals {
  export interface Params {}

  export interface Schema extends SchemaResponseBase {
    items?: Schema$ClubPortal[]
  }
}

/**
 * /component/hotMatch
 */
export namespace IHotMatch {
  export interface Params {}

  export interface Schema extends SchemaResponseBase {
    items?: Schema$HotMatch[]
    emblemPrefix?: string
  }
}

/**
 * /component/liveScore
 */
export namespace ILiveScore {
  export interface Params {}

  export interface Schema extends SchemaResponseBase {}
}

/**
 * /component/giftbox
 */
export namespace IGiftbox {
  export interface Params {}

  export interface Schema extends SchemaResponseBase {
    openEnabled?: boolean
    nextOpenDate?: Date
  }
}

export namespace IOpenGiftbox {
  export interface Params {}

  export interface Schema extends SchemaResponseBase {
    giftboxId?: number
    giftboxDesc?: string
  }
}

/**
 * /component/attendance
 */
export namespace IAttendance {
  export interface Params {}

  export interface Schema extends SchemaResponseBase {
    title?: string
    desc?: string
    startOfMonth?: Date
    items?: Schema$AttendanceUnit[]
    hitCount?: number
  }
}

export namespace ICheckAttendance {
  export interface Params {}

  export interface Schema extends SchemaResponseBase {
    date?: Date,
    hitCount?: number,
    enableAttendance?: boolean
  }
}

/**
 * /component/myInfo
 */
export namespace IMyInfo {
  export interface Params {}

  export interface Schema extends SchemaResponseBase {
    money?: number
    cash?: number
    heart?: number
    betHitRate?: number
    bestHitMoney?: number
    favoriteSportName?: string
    favoriteSportPercentage?: number
    favoriteOddsName?: string
    favoriteOddsPercentage?: number
  }
}
