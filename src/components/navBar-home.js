import React, { useState } from "react";
import Link from "next/link";
import classes from "@/styles/components/NavBarHome.module.css";
import Image from "next/image";
export default function NavBarHome({ logOutFN }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <nav className={classes.navbar}>
      <Link href="/about">About Us</Link>
      <ul>
        <li className={classes.toggleMenu} onClick={toggleMenu}>
          <Image src="/svg/lock.svg" width={25} height={25} alt="Look" />
        </li>
        <li
          className={`${classes.menuItems} ${
            isOpen ? classes.open : undefined
          }`}
        >
          <ul>
            <li>
              <Link href="/login" className={classes.link}>
                Login
              </Link>
              <Link href="/signIn" className={classes.link}>
                SignIn
              </Link>
              {/*  <button onClick={() => logOutFN()}>LogOut</button> */}
            </li>
            <li onClick={() => logOutFN()}>LogOut</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
