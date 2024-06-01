import Link from 'next/link'
import React from 'react'

type Props = {}

function Navbar({}: Props) {
  return (
    <div className='flex max-w-7xl mx-auto w-full justify-between items-center py-4 px-2 border-2 bg-background text-foreground' >
      <div className='font-bold'>Unspooled</div>
      <div className='flex gap-3'>
        <Link href={'/'}>Home</Link>
        <Link href={'/favorites'}>My Fovorites</Link>
      </div>
    </div>

  )
}

export default Navbar