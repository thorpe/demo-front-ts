import React from 'react'
import { ContentWrap, Title, TitleWrap } from '@styles/base.style'

const Error: React.FC = () => (
  <ContentWrap>
    <TitleWrap>
      <Title>Test</Title>
    </TitleWrap>

    <div>😭</div>
    <p>Ooooops!</p>
    <p>This page does not exist anymore.</p>
  </ContentWrap>
)

export default Error
