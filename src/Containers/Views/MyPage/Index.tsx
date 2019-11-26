import React, { useState } from 'react'
import { List, WhiteSpace } from 'antd-mobile'
import { ContentWrap } from '@styles/base.style'
import { Drawer } from "antd"
import About from "@views/MyPage/About"
import BoardFaq from "@views/MyPage/BoardFaq"
import BoardNotice from "@views/MyPage/BoardNotice"
import BoardOneToOne from "@views/MyPage/BoardOneToOne"
import ConfigAlarm from "@views/MyPage/ConfigAlarm"
import CouponList from "@views/MyPage/CouponList"
import GoodsCommentList from "@views/MyPage/GoodsCommentList"
import HelpDesk from "@views/MyPage/HelpDesk"
import OrderList from "@views/MyPage/OrderList"
import PointList from "@views/MyPage/PointList"
import ProfileUpdate from "@views/MyPage/ProfileUpdate"
import ShippingInfo from "@views/MyPage/ShippingInfo"

const Item = List.Item
const Brief = Item.Brief

const MyPage: React.FC = () => {
  const [clubVisible, setClubVisible] = useState(false)
  const [title, setTitle] = useState("")

  let PopUpContent
  const doOpenShowDetail = async (popupContainers) => {

    switch (popupContainers) {
      case "About":
        setTitle('About')
        PopUpContent = <About />
        break
      case "BoardFaq":
        setTitle('BoardFaq')
        PopUpContent = <BoardFaq />
        break
      case "BoardNotice":
        setTitle('BoardNotice')
        PopUpContent = <BoardNotice />
        break
      case "BoardOneToOne":
        setTitle('1111')
        PopUpContent = <BoardOneToOne />
        break
      case "ConfigAlarm":
        setTitle('ConfigAlarm')
        PopUpContent = <ConfigAlarm />
        break
      case "CouponList":
        setTitle('CouponList')
        PopUpContent = <CouponList />
        break
      case "GoodsCommentList":
        setTitle('GoodsCommentList')
        PopUpContent = <GoodsCommentList />
        break
      case "HelpDesk":
        setTitle('HelpDesk')
        PopUpContent = <HelpDesk />
        break
      case "OrderList":
        setTitle('OrderList')
        PopUpContent = <OrderList />
        break
      case "PointList":
        setTitle('PointList')
        PopUpContent = <PointList />
        break
      case "ProfileUpdate":
        setTitle('ProfileUpdate')
        PopUpContent = <ProfileUpdate />
        break
      case "ShippingInfo":
        setTitle('ShippingInfo')
        PopUpContent = <ShippingInfo />
        break
    }


    setClubVisible(true)
  }

  const doCloseShowDetail = () => {
    setClubVisible(null)
  }


  console.log('Render ------> MyPage')

    return (
      <ContentWrap>
        <WhiteSpace />
        <List>
          <Item arrow="horizontal" multipleLine onClick={ () => doOpenShowDetail('PointList')}>
            적립금 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={ () => doOpenShowDetail('CouponList')}>
            쿠폰 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={ () => doOpenShowDetail('11')}>
            친구초대 <Brief>subtitle</Brief>
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Item arrow="horizontal" multipleLine onClick={ () => doOpenShowDetail('OrderList')}>
            주문내역 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={ () => doOpenShowDetail('11')}>
            상품후기 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={ () => doOpenShowDetail('11')}>
            상품 문의 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={ () => doOpenShowDetail('11')}>
            1:1 문의 <Brief>subtitle</Brief>
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Item arrow="horizontal" multipleLine onClick={ () => doOpenShowDetail('ShippingInfo')}>
            배송안내 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={ () => doOpenShowDetail('BoardNotice')}>
            공지사항 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={ () => doOpenShowDetail('BoardFaq')}>
            자주하는 질 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={ () => doOpenShowDetail('11')}>
            이용안내 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={ () => doOpenShowDetail('About')}>
            컬리소개 <Brief>subtitle</Brief>
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Item arrow="horizontal" multipleLine onClick={ () => doOpenShowDetail('ProfileUpdate')}>
            개인정보 수정 <Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={ () => doOpenShowDetail('ConfigAlarm')}>
            알림설 <Brief>subtitle</Brief>
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Item arrow="horizontal" multipleLine onClick={ () => doOpenShowDetail('11')}>
            로그아웃<Brief>subtitle</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={ () => doOpenShowDetail('11')}>
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