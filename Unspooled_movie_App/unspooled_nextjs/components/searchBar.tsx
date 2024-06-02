import React from 'react'
import {Search} from 'lucide-react'


function SearchBar() {
  return (
    <div className='border-2 w-fit flex items-center p-2 flex-row rounded-full gap-1 m-2 '>
      <input className=' outline-none w-[350] max-w-[350] bg-background text-foreground rounded-full px-2' type="text" placeholder='Search a movie or TV show'/>
      <Search />
    </div>
  )
}

export default SearchBar