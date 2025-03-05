"use client";
import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";
import NavBarHome from "@/components/navBar-home";
import classes from "@/styles/pages/Home.module.css";

import { useRouter } from "next/navigation";
import { useAuthUser } from "@/context/AuthContext";
import PrimaryButton from "@/components/primary-button";

export default function Home() {
  const { user, logOut } = useAuthUser();
  const router = useRouter();

  function handleStart() {
    router.push("/start");
  }

  return (
    <>
      <MainHeader className={classes.main_header}>
        <NavBarHome logOutFN={logOut} />
      </MainHeader>
      <main className={classes.mainContainer}>
        <h1>Home page</h1>
        <PrimaryButton onclickFN={handleStart} isDisabled={!user.isAuth}>
          START
        </PrimaryButton>
      </main>
      <MainFooter />
    </>
  );
}
