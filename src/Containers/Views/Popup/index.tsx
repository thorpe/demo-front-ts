import React, { Fragment } from 'react'
import PopupLogin from './Login'
import Attendance from './Event/Attendance'
import GiftBox from './Event/GiftBox'
import Message from './Message'
import BetSlip from '@views/Matchup/BetSlip'
import PickBetSlip from '@views/Popup/PickBetSlip'

const PopupLayout: React.FC = props => (
  <Fragment>
    <PopupLogin />
    <Attendance />
    <GiftBox />
    <Message />
    <PickBetSlip />
  </Fragment>
)

export default PopupLayout
