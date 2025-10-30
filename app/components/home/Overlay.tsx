import Link from "next/link";
import S from './nav.module.css'
import { Dispatch, SetStateAction, useEffect } from "react";
import { usePathname } from "next/navigation";



function Overlay({
  isClick,
  setIsClick,
}: {
  isClick: boolean;
  setIsClick: Dispatch<SetStateAction<boolean>>;
  }) {
  
  const pathname = usePathname()
  useEffect(() => {
    setIsClick(false)
  }, [pathname]);
  

  return (
    <div className={`${S.overlay} ${isClick ? S.active : ""}`}>
      <div className={S.mobileMenu}>
        <div className={S.mobileItem}>
          <Link href="/" className={`${S.mobileItem} ${S.active}`}>
            HOME
          </Link>
        </div>
        <div className={S.mobileItem}>
          <Link href="/about">ABOUT</Link>
        </div>
        <div className={S.mobileItem}>
          <Link href="/project">PROJECT</Link>
        </div>
      </div>
    </div>
  );
}
export default Overlay