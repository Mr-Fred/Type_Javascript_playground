import Navbar from '@/components/Navbar'
import SearchBar from '@/components/SearchBar'
import React from 'react'
import {ModeToggle} from '@/components/ModeToggle'


function HomePage() {
  return (
    <div>
      
      <Navbar />
      <div className='max-w-7xl px-2 mx-auto flex justify-end items-center '>
        <SearchBar/>
        <ModeToggle />
      </div>
      
      <div className='max-w-7xl px-2 mx-auto'>
        <p className=''>Homepage</p>
      </div>
    </div>
  )
}

export default HomePage