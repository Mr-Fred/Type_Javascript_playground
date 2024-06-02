import React from 'react'
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import Image from 'next/image'
import {Separator} from '@/components/ui/separator'
import { TypeIconRender,  } from './TypeIconRender'



type MovieProps = {
  title: string,
  image: string,
  year: number,
  rating: number,
  // type: TypeIconRender
}
  
function MovieCard({ title, image, year, rating, type}: MovieProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image src={image} alt={title} />
      </CardContent>
      <CardFooter>
        <div className='flex flex-row gap-2'>
        <p>Year: {year}</p>
        <Separator orientation="vertical" />
        <p>Type: {type}</p>
        <Separator orientation="vertical" />
        <p>Rating: {rating}</p>
        <Separator orientation="vertical" />
        <TypeIconRender type={type} />
        <Button>Watch Now</Button>
        </div>
        
      </CardFooter>
    </Card>
  )
}

export default MovieCard