'use client'

import React from 'react'
import SideBar from '@/components/SideBar'
import { MainBar } from '@/components/MainBar'

const Transactions = () => {
  return (
    <div className='grid grid-cols-6 h-screen w-screen bg-primary-black'>
      <SideBar />
      <MainBar>Transactions</MainBar>
    </div>
  )
}

export default Transactions