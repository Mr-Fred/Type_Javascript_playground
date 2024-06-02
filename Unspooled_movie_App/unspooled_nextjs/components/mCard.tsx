import React from 'react'
import { Tv, Film } from 'lucide-react'
import {Separator} from '@/components/ui/separator'

function DemoMediaCard() {
  return (
   <div className=' flex flex-col p-2 gap-1'>
      {/* Image Container */}
      <div className='h-[180px] w-[275px] bg-gray-200 rounded-md'></div>
      {/* Card year, Type, duration and rating Container */}
      <div className='text-sm w-[275px] flex items-center justify-evenly gap-1 mt-1 rounded-sm bg-primary text-foreground'>
        <div>2013</div>
        <Separator orientation='vertical' className='h-5 w-1'/>
        <div className='flex justify-around items-center gap-1'>
          <Tv className='h-4 w-4'/>
          <span>TV Series</span>
        </div>
        <Separator orientation='vertical' className='h-5 w-1'/>
        {/* Duration */}
        <div>120 min</div>
        <Separator orientation='vertical' className='h-5 w-1'/>
        {/* Rating */}
        <div>5.0</div>
      </div>
      {/* Card title */}
      <div>
        Under the Dome
      </div>
   </div>
  )
}

export default DemoMediaCard