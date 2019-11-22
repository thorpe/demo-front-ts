import React, { useState } from 'react'
import { List, WhiteSpace } from 'antd-mobile'
import { ContentWrap, Title, TitleWrap } from '@styles/base.style'
import useRootStore from "@store/useRootStore"
import { Drawer } from "antd"
import About from "@views/MyPage/About"
import BoardFaq from "@views/MyPage/BoardFaq"

const Item = List.Item
const Brief = Item.Brief

const MyPage: React.FC = () => {
  const [clubVisible, setClubVisible] = useState(false)
  const [title, setTitle] = useState("")

  let PopUpContent
  const doOpenShowDetail = async (popup) => {
    if (popup === '11') {
      setTitle('1111')
      PopUpContent = <About />
    } else if (popup === '22') {
      setTitle('222')
      PopUpContent = <BoardFaq />
    }

    setClubVisible(true)
  }

  const doCloseShowDetail = () => {
    setClubVisible(null)
  }

  const { routerStore } = useRootStore()

  console.log('Render ------> MyPage')

    return (
      <ContentWrap>
        <WhiteSpace />
        <List>
          <Item arrow="horizontal" multipleLine onClick={() => {  routerStore.history.push(`/my_page/point_list`) }}>
            적립금 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => {  routerStore.history.push(`/my_page/coupon_list`) }}>
            쿠폰 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { routerStore.history.push(`/my_page/friend_list`)}}>
            친구초대 <Brief>subtitle</Brief>
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Item arrow="horizontal" multipleLine onClick={() => { routerStore.history.push(`/my_page/order_list`)}}>
            주문내역 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { routerStore.history.push(`/my_page/goods_comment_list`)}}>
            상품후기 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { routerStore.history.push(`/my_page/board_qna`)}}>
            상품 문의 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { routerStore.history.push(`/my_page/board_qna`)}}>
            1:1 문의 <Brief>subtitle</Brief>
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Item arrow="horizontal" multipleLine onClick={() => { routerStore.history.push(`/my_page/shipping_info`)}}>
            배송안내 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { routerStore.history.push(`/my_page/board_notice`)}}>
            공지사항 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { routerStore.history.push(`/my_page/board_faq`)}}>
            자주하는 질 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { routerStore.history.push(`/my_page/coupon_list`)}}>
            이용안내 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { routerStore.history.push(`/my_page/about`)}}>
            컬리소개 <Brief>subtitle</Brief>
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Item arrow="horizontal" multipleLine onClick={() => { routerStore.history.push(`/my_page/profile_update`)}}>
            개인정보 수정 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => { routerStore.history.push(`/my_page/config_alarm`)}}>
            알림설 <Brief>subtitle</Brief>
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Item arrow="horizontal" multipleLine onClick={ () => doOpenShowDetail('11')}>
            로그아웃<Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={ () => doOpenShowDetail('22')}>
            로그아웃<Brief>subtitle</Brief>
          </Item>
        </List>

        <Drawer
          title={title}
          placement="bottom"
          height="100%"
          onClose={doCloseShowDetail}
          visible={clubVisible}
          bodyStyle={{ padding: '0' }}
          className="club-info"
        >
          {PopUpContent}
        </Drawer>

        <WhiteSpace />
      </ContentWrap>)
}

export default MyPage