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

        <List renderHeader={() => 'Basic Style'} className="my-list">
          <Item extra={'extra content'}>Title</Item>
        </List>
        <List renderHeader={() => 'Subtitle'} className="my-list">
          <Item arrow="horizontal" multipleLine onClick={() => { alert('11')
          }}>
            Title <Brief>subtitle</Brief>
          </Item>
          <Item
            arrow="horizontal"
            multipleLine
            onClick={() => {
            }}
            platform="android"
          >
            ListItem （Android）<Brief>There may have water ripple effect of <br /> material if you set the click event.</Brief>
          </Item>
          <Item
            arrow="horizontal"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
            onClick={() => {
            }}
          >
            Title <Brief>subtitle</Brief>
          </Item>
        </List>
        <List renderHeader={() => 'Customized Right Side（Empty Content / Text / Image）'} className="my-list">
          <Item>Title</Item>
          <Item arrow="horizontal" onClick={() => {
          }}>Title</Item>
          <Item extra="extra content" arrow="horizontal" onClick={() => {
          }}>Title</Item>
          <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
            Title <Brief>subtitle</Brief>
          </Item>
        </List>

      </ContentWrap>)
  }
}

export default MyPage