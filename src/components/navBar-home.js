import React, { useState } from "react";
import Link from "next/link";
import classes from "@/styles/components/NavBarHome.module.css";
import Image from "next/image";
import { useAuthUser } from "@/context/AuthContext";

export default function NavBarHome({ logOutFN }) {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthUser();

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  function changeLockIcon(iconUrl) {
    return (
      <li className={classes.toggleMenu} onClick={toggleMenu}>
        <Image src={`${iconUrl}`} width={25} height={25} alt="LockIcon" />
      </li>
    );
  }

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
        {!user.isAuth
          ? changeLockIcon("/svg/icons/lock.svg")
          : changeLockIcon("/svg/icons/unlock.svg")}
        <li
          className={`${classes.menuItems} ${
            isOpen ? classes.open : undefined
          }`}
        >
          <ul>
            <li>
              {!user.isAuth && (
                <>
                  <Link href="/login" className={classes.link}>
                    Login
                  </Link>
                  <Link href="/signIn" className={classes.link}>
                    SignIn
                  </Link>
                </>
              )}
            </li>
            <li onClick={() => logOutFN()}>LogOut</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
