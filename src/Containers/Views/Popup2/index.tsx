import React from 'react'
import { Button } from 'antd-mobile'

const Popup2: React.FC = props => {

  const doClosePopup = () => {
    const targetWindow = window.opener
    targetWindow.testMethod({
      code: 'deliverResult',
      result: 'success',
      msg: '승부사 캐시 충전이 완료되었습니다.',
      mid: "mid_number",
      tid: "tid_number",
    })
    self.close()
  }


  return (
    <div>
      <Button type="warning" onClick={doClosePopup}>close</Button>
    </div>
  )
}

export default Popup2
