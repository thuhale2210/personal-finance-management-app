import React from 'react'
import MainBar from './MainBar'
import SideBar from './SideBar'

const MainScreen = () => {
  return (
    <div className='grid grid-cols-6 h-full w-screen'>
      <SideBar />
      <MainBar />
    </div>
  )
}

export default MainScreen