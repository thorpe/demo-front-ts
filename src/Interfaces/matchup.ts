export interface Schema$MatchupBase {
  orderId: string

  matchId: number

  sportId: number
  categoryId: number
  tournamentId: number

  homeTeamId: number
  awayTeamId: number

  homeScore?: number
  awayScore?: number

  dateOfMatch: string
}

export interface Schema$MatchupMetaMarket {
  id: string
  name: string
}
export interface Schema$MatchupMetaOutcome {
  id: string
  name: string
}

export interface Schema$MatchupMetaMatchStatus {
  id: number
  name: string
}

export interface Schema$MatchupMetaSport {
  id: number
  name: string
}

export interface Schema$MatchupMetaCategory {
  id: number
  name: string
  emblem: string
  emblemM: string
}

export interface Schema$MatchupMetaTournament {
  id: number
  name: string
  emblem: string
  emblemM: string
}

export interface Schema$MatchupMetaTeam {
  id: number
  name: string
  emblem: string
  emblemM: string
}

export interface Schema$MatchupFilter {
  SportID: number
  CategoryID: number
  TournamentID: number
  UniqueID: number
  OrderInSport: number
  Name: string
  TournamentIDs: number[]
  matchCount: number
}
