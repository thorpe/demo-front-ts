import { BigInteger }  from 'big-integer'
import { Schema$ResponseBase } from '../interface/common'

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

  export interface Schema extends Schema$ResponseBase {
    items?: Schema$ClubPortal[]
  }
}

/**
 * /component/hotMatch
 */
export namespace IHotMatch {
  export interface Params {}

  export interface Schema extends Schema$ResponseBase {
    items?: Schema$HotMatch[]
    emblemPrefix?: string
  }
}

/**
 * /component/liveScore
 */
export namespace ILiveScore {
  export interface Params {}

  export interface Schema extends Schema$ResponseBase {}
}

/**
 * /component/giftbox
 */
export namespace IGiftbox {
  export interface Params {}

  export interface Schema extends Schema$ResponseBase {
    openEnabled?: boolean
    nextOpenDate?: Date
  }
}

export namespace IOpenGiftbox {
  export interface Params {}

  export interface Schema extends Schema$ResponseBase {
    giftboxId?: number
    giftboxDesc?: string
  }
}

/**
 * /component/attendance
 */
export namespace IAttendance {
  export interface Params {}

  export interface Schema extends Schema$ResponseBase {
    title?: string
    desc?: string
    startOfMonth?: Date
    items?: Schema$AttendanceUnit[]
    hitCount?: number
  }
}

export namespace ICheckAttendance {
  export interface Params {}

  export interface Schema extends Schema$ResponseBase {
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

  export interface Schema extends Schema$ResponseBase {
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
