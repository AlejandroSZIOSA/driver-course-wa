import React, { useState } from "react";
import Link from "next/link";
import classes from "@/styles/components/NavBarHome.module.css";
import Image from "next/image";
import { useAuthUser } from "@/context/AuthContext";
import { useQuestions } from "@/context/QuestionsContext";

export default function NavBarHome() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, log_Out } = useAuthUser();
  const { clean_Questions_List } = useQuestions();

  // Toggle the lock icon menu
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  //A Function with JSX :)
  function changeLockIcon(iconUrl) {
    return (
      <li className={classes.toggleMenu} onClick={toggleMenu}>
        <Image src={`${iconUrl}`} width={25} height={25} alt="lockIcon" />
      </li>
    );
  }

  //Set logOut User status
  function handleLogOutUser() {
    log_Out();
    clean_Questions_List();
  }

  //A Constant with JSX :)
  const menuItems = (
    <>
      {/* testing */}
      <Link href="/login" className={classes.link}>
        Login
      </Link>
      <Link href="/signUp" className={classes.link}>
        SignUp
      </Link>
    </>
  );

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
            <li>{!user.isAuth && menuItems}</li>
            <li onClick={handleLogOutUser}>LogOut</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
