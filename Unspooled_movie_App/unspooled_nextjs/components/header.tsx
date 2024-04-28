import React from 'react'

export default function Header({title}: {title: string}) {
  return (
    <header className='text-2xl font-bold text-gray-500 flex-col'>
      <h1>
        {title}
      </h1>
    </header>
  )
}
