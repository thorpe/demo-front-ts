export interface Schema$TournamentRule {
  rate: string
}

export interface Schema$CategoryRule {
  rate: string
  tournamentRules: { [id: number]: Schema$TournamentRule }
}

export interface Schema$SportRule {
  rate: string
  categoryRules: { [id: number]: Schema$CategoryRule }
}

export interface Schema$CombinationRule {
  WinUnder: boolean
  WinOver: boolean
  TieUnder: boolean
  TieOver: boolean
  LoseUnder: boolean
  LoseOver: boolean
  HandiUnder: boolean
  HandiOver: boolean
}

export interface Schema$SportMarketType {
  useOddsTypeList: number[]
}

export interface Schema$ClubRules {
  waySingleUse: boolean
  wayMultiUse: boolean
  hcuoSingleUse: boolean
  hcuoMultiUse: boolean
  specialSingleUse: boolean
  specialMultiUse: boolean
  liveSingleUse: boolean
  liveMultiUse: boolean
  crossSingleUse: boolean
  crossMultiUse: boolean
  wayBanTypes: string[]
  hcuoBanTypes: string[]
  crossBanTypes: string[]
  sportRules: { [id: number]: Schema$SportRule }
  sportCombinations: { [id: number]: Schema$CombinationRule }
  sportOddsTypes: { [id: number]: Schema$SportMarketType }
}
