'use client'

import React from 'react'
import MainBar from '@/components/MainBar'
import SideBar from '@/components/SideBar'

const Home = () => {
  return (
    <div className='grid grid-cols-6 h-screen w-screen bg-primary-black'>
      <SideBar />
      <MainBar />
    </div>
  )
}

export default Home