'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import NavBtn from "./NavBtn";


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
        <NavBtn/>
    </nav>
  )
}
export default Nav