"use client";
import MainFooter from "@/components/main-footer";
import NavBarHome from "@/components/navBar-home";
import classes from "@/styles/pages/Home.module.css";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useAuthUser } from "@/context/AuthContext";
import PrimaryButton from "@/components/primary-button";

export default function Home() {
  const { user } = useAuthUser();
  const router = useRouter();

  function handleStart() {
    router.push("/start");
  }

  return (
    <>
      <header className={classes.header}>
        <NavBarHome />
      </header>
      <main className={classes.mainContainer}>
        <h1>Driver Theory</h1>
        <Image
          src="/images/unsplash.png"
          width={400}
          height={500}
          alt="CarHomePage"
          priority={true}
        />
        <h2>You are: {user.isAuth ? <p>LogIn</p> : <p>Not-Login</p>}</h2>
        <PrimaryButton onclickFN={handleStart} isDisabled={!user.isAuth}>
          START
        </PrimaryButton>
      </main>
      <MainFooter />
    </>
  );
}
