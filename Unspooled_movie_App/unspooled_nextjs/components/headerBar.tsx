'use client'

import react from 'react'
import Search from './search'
import Header from './header'

export default function HeaderBar() {

  return (
    <div  className="flex relative m-5 items-center justify-between  sm:flex-row md:mt-8">
      <Header title='Unspooled Movies'/>
      <Search placeholder='Search for a movie...'/>
    </div>
  )
}