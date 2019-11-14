import React from 'react'
import { Button } from 'antd-mobile'


const Popup2: React.FC = props => {

  const doClosePopup = () => {
    const targetWindow = window.opener
    targetWindow.testMethod()
    self.close()
  }

  const doClosePopup2 = () => {

  }

  return (
    <div>
      <script src="https://mup.mobilians.co.kr/js/ext/ext_inc_comm.js"></script>
      <form name="payForm" >

      </form>
      <Button type="primary" onClick={doClosePopup}>close</Button>
      <Button type="primary" onClick={doClosePopup2}>close</Button>

    </div>
  )
}

export default Popup2
