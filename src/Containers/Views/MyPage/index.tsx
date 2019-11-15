import React from 'react'
import { List } from 'antd-mobile'
import { ContentWrap, Title, TitleWrap } from '@styles/base.style'

const Item = List.Item
const Brief = Item.Brief

class MyPage extends React.Component {
  state = {
    disabled: false,
  }

  render() {
    return (
      <ContentWrap>
        <TitleWrap>
          <Title>List Title</Title>
        </TitleWrap>


        <List renderHeader={() => 'Subtitle'} className="my-list">
          <Item arrow="horizontal" multipleLine onClick={() => { alert('11')
          }}>
            Title <Brief>subtitle</Brief>
          </Item>
        </List>


      </ContentWrap>)
  }
}

export default MyPage