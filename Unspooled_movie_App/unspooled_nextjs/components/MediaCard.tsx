import React from 'react'
import { Tv, Film } from 'lucide-react'
import {Separator} from '@/components/ui/separator'
import Image from 'next/image'
import {Button} from '@/components/ui/button'


// Media CardProps
export type CardProps = {
  title: string,
  year: number | null,
  rating: number,
  image: string,
}


function DemoMediaCard({title, year, rating, image}: CardProps) {
  return (
   <div className='flex flex-col p-2 gap-1 max-w-7xl mx-auto'>
      {/* Card title */}
      <div className='"mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        {title}
      </div>
      {/* Image Container */}
      <Image src={`https://image.tmdb.org/t/p/w1280/${image}`} alt={title} width={475} height={400} className='rounded-md'/>

      {/* Card year, Type, duration and rating Container */}
      <div className='flex items-center justify-between'>
        <div className='text-sm w-[375px] flex mt-1 h-9 items-center justify-evenly rounded-sm gap-1 bg-primary text-primary-foreground'>
          <div>{year}</div>
          <Separator orientation='vertical' className='h-5 w-1'/>
          <div className='flex justify-around items-center gap-1'>
            <Tv className='h-4 w-4'/>
            <span>TV Series</span>
          </div>
          <Separator orientation='vertical' className='h-5 w-1'/>
          {/* Duration */}
          {/* <div>120 min</div>
          <Separator orientation='vertical' className='h-5 w-1'/> */}
          {/* Rating */}
          <div>{rating}</div>
        </div>
        <Button variant='default'>Info</Button>
      </div>
   </div>
  )
}

export default DemoMediaCard