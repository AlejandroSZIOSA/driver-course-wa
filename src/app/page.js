"use client";
import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";
import NavBarHome from "@/components/navBar-home";
import styles from "@/styles/pages/home.module.css";
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
