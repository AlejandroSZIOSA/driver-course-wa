import React, { useState } from "react";
import Link from "next/link";
import classes from "@/styles/components/NavBarHome.module.css";

export default function NavBarHome({ logOutFN }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <nav className={classes.navbar}>
      <Link href="/login">About Us</Link>
      <ul>
        <li className={classes.toggleMenu} onClick={toggleMenu}>
          Menu icon
        </li>
        <li
          className={`${classes.menuItems} ${
            isOpen ? classes.open : undefined
          }`}
        >
          <ul>
            <li>
              <Link href="/login" className={classes.link}>
                To login
              </Link>
              <Link href="/signIn" className={classes.link}>
                To Sign In
              </Link>
              <button onClick={() => logOutFN()}>Log out</button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
