"use client";
import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";
import NavBarHome from "@/components/navBar-home";
import styles from "@/styles/pages/home.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthUser } from "@/context/AuthContext";

export default function Home() {
  const { user, logOut } = useAuthUser();
  const router = useRouter();

  function handleStart() {
    router.push("/start");
  }

  return (
    <>
      <MainHeader className={styles.main_header}>
        <NavBarHome logOutFN={logOut} />
        {/* <p>home header</p>
        <Link href="/about">To About</Link>
        <Link href="/login">To login</Link>
        <Link href="/signIn">To Sign In</Link>
        <button onClick={() => logOut()}>Log out</button> */}
      </MainHeader>
      <main className={styles.mainContainer}>
        <h1>Home page</h1>
        <button onClick={handleStart} disabled={!user.isAuth ? true : false}>
          START
        </button>
      </main>
      <MainFooter />
    </>
  );
}
