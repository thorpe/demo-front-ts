import React from 'react'
import { List, WhiteSpace } from 'antd-mobile'
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


        <List>
          <Item arrow="horizontal" multipleLine onClick={() => { alert('11')}}>
            적립금 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { alert('11')}}>
            쿠폰 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { alert('11')}}>
            친구초대 <Brief>subtitle</Brief>
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Item arrow="horizontal" multipleLine onClick={() => { alert('11')}}>
            주문내역 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { alert('11')}}>
            상품후기 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { alert('11')}}>
            상품 문의 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { alert('11')}}>
            1:1 문의 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { alert('11')}}>
            대량주문 문 <Brief>subtitle</Brief>
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Item arrow="horizontal" multipleLine onClick={() => { alert('11')}}>
            배송안내 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { alert('11')}}>
            공지사항 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { alert('11')}}>
            자주하는 질 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { alert('11')}}>
            무고객센터 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { alert('11')}}>
            이용안내 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { alert('11')}}>
            컬리소개 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { alert('11')}}>
            컬리패스 <Brief>subtitle</Brief>
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Item arrow="horizontal" multipleLine onClick={() => { alert('11')}}>
            개인정보 수정 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { alert('11')}}>
            알림설 <Brief>subtitle</Brief>
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Item arrow="horizontal" multipleLine onClick={() => { alert('11')}}>
            로그아웃<Brief>subtitle</Brief>
          </Item>
        </List>
        <WhiteSpace />
      </ContentWrap>)
  }
}

export default MyPage