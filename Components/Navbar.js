import React from "react";
import style from "../styles/Navbar.module.scss";
const Navbar = () => {
  return (
    <header className={style.header}>
      <ul>
        <li>
          <img src='images/neo2mbatha.png' alt='neo2mbatha' />
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
