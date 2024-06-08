
import React from 'react'
import DemoMediaCard, {CardProps} from './MediaCard'

function MediaList({cardData}:{cardData: CardProps[]}) {

  return (
  // Card component with Image, Title, Description, Button, badge, etc.
  <section className='flex flex-wrap gap-2'>
    {cardData.map(
      data => (
        <DemoMediaCard key={data.title} {...data}/>
      )
    )}
  </section>
  )
}

export default MediaList