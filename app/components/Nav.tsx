'use client'

import Link from "next/link"
import { useEffect, useState } from "react"


function Nav() {

  const [isScroll,setIsScroll] = useState(false)
  const scroll = global.scrollY;
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
     }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  }, [scroll])
  
  return (
    <nav className={ isScroll ? 'navBlur':" "}>
      <div className="nav-logo">
        <Link href='/'>Moon Tae Min</Link>
      </div>
      <div className="nav-links">
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/project'>Project</Link>
      </div>
    </nav>
  )
}
export default Nav