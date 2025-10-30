import Link from "next/link";
import { useState } from "react";
import Overlay from "./Overlay";
import S from './nav.module.css'


function NavBtn() {

const [isClick,setIsClick] = useState(false)

  return (
    <>
      <button
        type="button"
        aria-label="메뉴 열기"
        aria-expanded={isClick}
        className={`${S.hamburger} ${isClick ? S.active: ""}`}
        onClick={() => setIsClick(!isClick)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <Overlay isClick={isClick} setIsClick={setIsClick } />

      <div className={S.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/project">Project</Link>
      </div>
    </>
  );
}
export default NavBtn