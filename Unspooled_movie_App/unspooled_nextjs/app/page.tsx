import Navbar from '@/components/Navbar'
import SearchBar from '@/components/SearchBar'
import React from 'react'
import {ModeToggle} from '@/components/ModeToggle'
import DemoMediaCard from '@/components/mCard'


function HomePage() {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl px-2 mx-auto flex justify-end items-center '>
        <SearchBar/>
        <ModeToggle />
      </div>
      {/* Card component with Image, Title, Description, Button, badge, etc. */}
      <DemoMediaCard />
    </div>
  )
}

export default HomePage