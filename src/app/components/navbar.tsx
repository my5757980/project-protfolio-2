import style from "./custom.module.css"
import Link from "next/link"
export default function Navbar(){
    return(
      
        <section className={style.section}>
        <div className={style.div}>
        <nav className={style.nav}>
        <p className={style.portfolio}>Portfolio</p>
        <ul className={style.ul}>
      <Link href="/" className={style.Home}>Home</Link>
      <br />
      <Link  href="#About" className={style.About}>About</Link>
      <br />
      <Link href="#Contact" className={style.Contact}>Contact</Link>
      
        </ul>
        </nav>
        </div>
        </section>
    )
}