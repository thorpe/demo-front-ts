import React from 'react'
import { Title, TitleWrap, ContentWrap } from '@styles/base.style'
import useRootStore from '@store/useRootStore'


const Popup: React.FC = () => {

  const { routerStore } = useRootStore()
  console.log('==============')
  console.log(routerStore.location.pathname)

  return (
    <ContentWrap>
      <TitleWrap>
        <Title>Test</Title>
      </TitleWrap>

      <div>1sdfsdfsdf1sfsdfsdf</div>
      <div>2sdfsdfsdf2sfsdfsdf</div>
      <div>3sdfsdfsdf3sfsdfsdf</div>
      <div>4sdfsdfsdf4sfsdfsdf</div>
      <div>5sdfsdfsdf4sfsdfsdf</div>
      <div>6sdfsdfsdf4sfsdfsdf</div>
      <div>7sdfsdfsdf4sfsdfsdf</div>
      <div>8sdfsdfsdf4sfsdfsdf</div>
      <div>9sdfsdfsdf4sfsdfsdf</div>
      <div>10sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
      <div>1 sdfsdfsdf4sfsdfsdf</div>
      <div>2 sdfsdfsdf4sfsdfsdf</div>
      <div>3 sdfsdfsdf4sfsdfsdf</div>
      <div>4 sdfsdfsdf4sfsdfsdf</div>
      <div>5 sdfsdfsdf4sfsdfsdf</div>
      <div>6 sdfsdfsdf4sfsdfsdf</div>
      <div>7 sdfsdfsdf4sfsdfsdf</div>
    </ContentWrap>
  )
}

export default Popup