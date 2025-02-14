"use client";
import { useEffect } from "react";
import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";
import styles from "@/styles/pages/home.module.css";
import Link from "next/link";

import { QUESTIONS } from "@/mock/dummy-data";

import { useQuestions } from "@/context/QuestionsContext";
import { useAuthUser } from "@/context/AuthContext";

import { getAllQuestions } from "@/lib/api";

import { useRouter } from "next/navigation";

export default function Home() {
  const { setQuestions } = useQuestions();
  const { isLogin, logOut } = useAuthUser();

  const router = useRouter();

  useEffect(() => {
    getQuestions();
    setQuestions(QUESTIONS);
    console.log(isLogin);
  }, []);

  async function getQuestions() {
    const data = await getAllQuestions();
    console.log("sanity:", data);
  }

  function handleStart() {
    router.push("/start");
  }
  return (
    <>
      <MainHeader className={styles.main_header}>
        <p>home header</p>
        <Link href="/about">To About</Link>
        <Link href="/login">To login</Link>
        <Link href="/signIn">To Sign In</Link>
        <button onClick={() => logOut()}>Log out</button>
      </MainHeader>
      <main className={styles.mainContainer}>
        <h1>Home page</h1>
        <button onClick={handleStart} disabled={!isLogin ? true : false}>
          START
        </button>
      </main>
      <MainFooter />
    </>
  );
}
