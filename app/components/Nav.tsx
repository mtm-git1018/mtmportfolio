import Link from "next/link"


function Nav() {
  return (
    <nav>
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