export interface PacketStructure {
  protocol?: number
  data?: any
}

export interface Schema$Result {
  errcode?: number
}

// schema
export interface Schema$SpecialMatch {
  matchId?: number
  sportId?: number
  categoryId?: number
  tournamentId?: number
  tournamentUpdate?: Date
  homeTeamId?: number
  homeTeamUpdate?: Date
  awayTeamId?: number
  awayTeamUpdate?: Date
  dateOfMatch?: Date
  lastUpdate?: Date
  statusInfo?: {[id:string]:string}
  neutralGround?: string
  hasStatistics?: string
  liveMultiCast?: string
  liveScore?: string
  roundInfo?: {[id:string]:string}
  scoreInfo?: {[id:string]:string}
  betReadyTime?: number
  betAvailableTime?: number
}

export interface Schema$PreOddsField {
  rate:string
  type:string
}

export interface Schema$SpecialOdds {
  objectId?: string
  sportId?: number
  oddsType?:string
  specialBetValue?: string
  outcome?: string
  active?: number
  matchId?: number
  state?: number
  oddsFields?: Schema$PreOddsField[]
  timeCount?: number
}

// protocol structure
export namespace ISyncEnter {
  export interface Params {
    authKey?: string
    overlapLogin?: boolean
    gameType?: string
  }

  export interface Schema extends Schema$Result {
    sid: string
    authKey?: string
    gameType?: string
  }
}

export namespace INotifySpecialMatchList {
  export interface Schema extends Schema$Result {
    items: Schema$SpecialMatch[]
  }
}

export namespace INotifySpecialOddsList {
  export interface Schema extends Schema$Result {
    items: Schema$SpecialOdds[]
  }
}