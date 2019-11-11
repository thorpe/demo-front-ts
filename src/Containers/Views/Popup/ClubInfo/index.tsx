/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'


// css
import styled from '@themes/theme'

const ClubPopup = styled.div`
  text-align: left;
`
const PopupTitle = styled.h2`
  display: block;
  margin: 0;
  padding: 0 28px;
  font-size: ${props => props.theme.font.large};
  color: ${props => props.theme.color.themeTxt};
  text-align: left;
`


const ClubInfoPopup: React.FC = () => {

  return (
    <ClubPopup>
      <PopupTitle>홍길동 클럽</PopupTitle>

    </ClubPopup>
  )
}
export default ClubInfoPopup
