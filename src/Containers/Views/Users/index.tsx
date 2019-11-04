import React from 'react'


import Header from './Header'
import UserTable from './UserTable'
import AutoSizer from '@components/AutoSizer'

export default function Users() {
  return (
    <div >
      <div>sdf</div>
      <div>sdf</div>
      <div>sdf</div>
      <div>sdf</div>
      <div>sdf</div>
      <Header/>
      <AutoSizer >{({ height }) => <UserTable scrollY={height - 120}/>}</AutoSizer>
    </div>
  )
}
