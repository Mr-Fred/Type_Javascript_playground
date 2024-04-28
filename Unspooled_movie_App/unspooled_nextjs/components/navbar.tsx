import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  interface NavItems {
    name: string,
    href: string
  }
  const navItemsList: NavItems[] = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "Favs",
      href: "/favorites"
    },
    {
      name: "About",
      href: "/about"
    },
    {
      name: "Login",
      href: "/auths/login"
    },
    {
      name: "Sign Up",
      href: "/auths/signUp"
    }
  ]
  const navItemsStyle ="text-orange-700 font-semibold hover:text-blue-700"
  return (
    <div className='flex justify-center space-x-10'>
      {navItemsList.map((item, index) => (
        <Link key={index} href={item.href} className={navItemsStyle}>{item.name}</Link>
      ))}
    </div>
  )
}
