import Link from 'next/link'

const Navbar = () => {
  return (
      <nav className='md:block hidden'>
        <ul className='flex align-middle gap-8'>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/About">ABOUT US</Link>
          </li>
          <li>
            <Link href="/About">RESERVATION</Link>
          </li>
          <li>
            <Link href="/Contact">CONTACT US</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar
