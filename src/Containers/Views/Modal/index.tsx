import React from 'react'


import { Modal, List, Button, WhiteSpace, Icon } from 'antd-mobile'
import { ContentWrap, Title, TitleWrap } from '@styles/base.style'


class Model2 extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      modal1: false,
      modal2: false,
    }
  }

  showModal = key => (e) => {
    e.preventDefault() // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    })
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    })
  }

  onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return
    }
  }

  render() {
    return (
      <ContentWrap>
        <TitleWrap>
          <Title>Test</Title>
        </TitleWrap>
        <Button type="primary" onClick={this.showModal('modal1')}><Icon type="up" />basic<Icon type="up" /></Button>
        <WhiteSpace />
        <Modal visible={this.state.modal1} transparent maskClosable={false} onClose={this.onClose('modal1')} title="Title" footer={[{
          text: 'Ok', onPress: () => {
            console.log('ok')
            this.onClose('modal1')()
          },
        }]}
               wrapProps={{ onTouchStart: this.onWrapTouchStart }}
               afterClose={() => {

               }}
        >
          <div style={{ height: 100, overflow: 'scroll' }}>
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
          </div>
        </Modal>

        <Button type="primary" onClick={this.showModal('modal2')}>popup</Button>
        <WhiteSpace />
        <Modal
          popup
          visible={this.state.modal2}
          onClose={this.onClose('modal2')}
          animationType="slide"
          afterClose={() => {

          }}
        >
          <List renderHeader={() => <div>委托买入</div>} className="popup-list">
            {['股票名称', '股票代码', '买入价格'].map((i, index) => (
              <List.Item key={index}>{i}</List.Item>
            ))}
            <List.Item>
              <Button type="primary" onClick={this.onClose('modal2')}>买入</Button>
            </List.Item>
          </List>
        </Modal>
      </ContentWrap>
    )
  }
}

export default Model2