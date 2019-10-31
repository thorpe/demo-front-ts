import styled, { CreateStyled } from '@emotion/styled'

export type Theme = {
  color: {
    TP: string
    primary: string
    primaryBg: string
    secondary: string
    headerBg: string
    contentsBg: string
    betslipBg: string
    betslipBottomBg: string
    chattingTabBg: string
    innerBg: string
    lowestBg: string
    checkbox: string
    checkboxBg: string
    matchBtn: string
    themeTxt: string
    titleTxt: string
    btnTxt: string
    btnSelectedTxt: string
    tabSubTxt: string
    detail: string
    disabled: string
    disabledBg: string
    important: string
    win: string
    lose: string
    loseMoney: string
    handicap: string
    underover: string
    hit: string
    miss: string
    specialCase: string
    on: string
    etc: string
    up: string
    down: string
    rateUp: string
    rateDown: string
    chattingBg: string
  }
  border: {
    default: string
    secondery: string
    line: string
    inputLine: string
  }
  font: {
    xlarge: string
    title: string
    large: string
    medium: string
    small: string
    tiny: string
  }
}

export interface ThemeProps {
  theme?: Theme
  primary?: boolean
  sub?: boolean
}

export default styled as CreateStyled<Theme>
