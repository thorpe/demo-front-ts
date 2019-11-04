
import { concat, union } from 'lodash'

export interface Schema$ResponseBase {
  /**
   * axios client query error!
   */
  statusCode?: number
  error?: string

  // common server result without exception
  errcode?: number
  user?: Schema$UserInfo
}

export interface Schema$UserInfo {
  id?: string
  cash?: number
  mileage?: number
  point?: number
  money?: number
  heart?: number
  job?: number
  nick?: string
  avatar?: string
  present_box_openedAt?: Date
  clubId?: string
}

export interface Schema$MemberInfo {
  account: string
  name?: string
  gender?: number
  phone?: string
  email?: string
  last_connected_date?: Date
  pw_change_date?: Date
  phone_send?: string
  age?: string
}

export interface Schema$ClubInfo {
  id?: string
  ownerId?: string
  name?: string
  soluble?: number
  state?: number

  pre_betmoney_min?: number
  pre_betmoney_max?: number
  live_betmoney_min?: number
  live_betmoney_max?: number
  special_betmoney_min?: number
  special_betmoney_max?: number
  hit_max?: number
  limit_betting_rate?: number

  sportsCount?: number

  isCrossSupport?: boolean
  isWaySupport?: boolean
  isHandicapSupport?: boolean
  isSpecialSupport?: boolean
  isLiveSupport?: boolean

  isMember?: boolean
  memberState?: number
}

export enum GameType {
  CROSS = 'cross',
  WAY = 'way',
  UO = 'uo',
  SPECIAL = 'special',
  LIVE = 'live',
}

export const LEGACY_REGULAR_OUTCOMES = ['1', 'X', '2', 'Under', 'Over']
export const LEGACY_REGULAR_ODDS_WAY = ['10', '20']
export const LEGACY_REGUALR_ODDS_HANDICAP = ['51', '228']
export const LEGACY_REGULAR_ODDS_UNDEROVER = ['56', '60', '229']
export const LEGACY_REGULAR_ODDS = union(
  LEGACY_REGULAR_ODDS_WAY,
  LEGACY_REGUALR_ODDS_HANDICAP,
  LEGACY_REGULAR_ODDS_UNDEROVER)

export const UNIFIED_OUTCOMES_WAY = ['1', '2', '3', '4', '5']
export const UNIFIED_OUTCOMES_HANDICAP = ['1714', '1715']
export const UNIFIED_OUTCOMES_UNDEROVER = ['13', '12']
export const UNIFIED_REGULAR_OUTCOMES = concat(
  UNIFIED_OUTCOMES_WAY,
  UNIFIED_OUTCOMES_HANDICAP,
  UNIFIED_OUTCOMES_UNDEROVER)
export const UNIFIED_REGULAR_ODDS_WAY = ['1', '219', '251', '186']
export const UNIFIED_REGULAR_ODDS_HANDICAP = ['16', '223', '256', '237']
export const UNIFIED_REGULAR_ODDS_UNDEROVER = ['18', '258', '238']
export const UNIFIED_REGULAR_ODDS = union(
  UNIFIED_REGULAR_ODDS_WAY,
  UNIFIED_REGULAR_ODDS_HANDICAP,
  UNIFIED_REGULAR_ODDS_UNDEROVER)
export const UNIFIED_REGULAR_ODDS_ORDER = concat(
  UNIFIED_REGULAR_ODDS_WAY,
  UNIFIED_REGULAR_ODDS_HANDICAP,
  UNIFIED_REGULAR_ODDS_UNDEROVER)

export const GAME_TYPE_REGULAR_FILTER = {
  cross: union(UNIFIED_REGULAR_ODDS_WAY,
    UNIFIED_REGULAR_ODDS_HANDICAP,
    UNIFIED_REGULAR_ODDS_UNDEROVER),
  way: union(UNIFIED_REGULAR_ODDS_WAY, []),
  uo: union(UNIFIED_REGULAR_ODDS_HANDICAP, UNIFIED_REGULAR_ODDS_UNDEROVER)
}
