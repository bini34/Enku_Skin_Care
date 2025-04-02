import React from 'react'
import Nav from './navbar'
import Link from 'next/link'
function Header() {
  return (
    <header className='flex  align-middle justify-between px-10 py-10 bg-transparent d '>
        <h1 className='align-middle'>Enku</h1>
        <Nav/>
        <Link href="/" className='px-5 py-2 bg-amber-600 md:block hidden'>BOOK NOW</Link>
    </header>
  )
}

export default Header
