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
      <Link href="/about">
        <Image
          src="/svg/icons/info.svg"
          width={25}
          height={25}
          alt="InfoIcon"
        />
      </Link>
      <ul>
        <li className={classes.toggleMenu} onClick={toggleMenu}>
          <Image
            src="/svg/icons/lock.svg"
            width={25}
            height={25}
            alt="LockIcon"
          />
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
              <li onClick={() => logOutFN()}>LogOut</li>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
