import style from "../styles/Navbar.module.scss";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <div className={style.logo}>
          <img src='images/neo2mbatha.png' alt='neo2mbatha' />
        </div>
        <ul className={style.nav_list}>
          <li className={style.active}>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='#'>Sign up</Link>
          </li>
          <li>
            <Link href='#'>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
