import React from 'react'
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import Image from 'next/image'
import {Separator} from '@/components/ui/separator'
import { TypeIconRender,  } from './TypeIconRender'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import DemoMediaCard from "./MediaCard"


type MovieProps = {
  title: string,
  image: string,
  year: number | null,
  rating: number,
  // type: TypeIconRender
}
  
function MovieCard({ title, image, year, rating}: MovieProps) {
  return (
    <Card>
      <CardContent className='container'>
     
        <AspectRatio ratio={4/4}>
          <Image src={`https://image.tmdb.org/t/p/w1280${image}`} alt={title} fill className=' mt-2 object-cover rounded-md overflow-hidden'/>
        </AspectRatio>
        <CardTitle className='text-xl mt-3 font-bold'>{title}</CardTitle>
       
        <div className='flex flex-row gap-1 justify-evenly items-center'>
          <p className='text-sm text-muted-foreground'>Year: {year}</p>
          {/* <Separator orientation="vertical" /> */}
          {/* <p>Type: {type}</p> */}
          <Separator orientation="vertical" />
          <p className='text-sm text-muted-foreground'>Rating: {rating}</p>
          <Separator orientation="vertical"/>
          <TypeIconRender type={'movie'} />
          <Button variant="default" size="sm">Watch</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default MovieCard