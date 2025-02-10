"use client";
import { useEffect } from "react";
import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";
import styles from "@/styles/pages/home.module.css";
import Link from "next/link";

import { QUESTIONS } from "@/mock/dummy-data";

import { useQuestions } from "@/context/QuestionsContext";
import { useUser } from "@/context/UserContext";

export default function Home() {
  const { questions, setQuestions } = useQuestions();
  const { isLogin } = useUser();

  useEffect(() => {
    setQuestions(QUESTIONS);
    console.log(isLogin);
  }, []);

  return (
    <>
      <MainHeader className={styles.main_header}>
        <p>home header</p>
        <Link href="/about">To About</Link>
        <Link href="/login">To login</Link>
        <Link href="/signIn">To Sign In</Link>
      </MainHeader>
      <main className={styles.mainContainer}>
        <h1>Home page</h1>
        <Link href="/start">START</Link>
      </main>
      <MainFooter />
    </>
  );
}
