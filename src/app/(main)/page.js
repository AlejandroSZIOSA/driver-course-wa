"use client";
import MainHeader from "@/components/main-header";
import styles from "@/styles/pages/home.module.css";
import Link from "next/link";
import { useQuestions } from "@/context/QuestionsContext";
import { QUESTIONS } from "@/mock/dummy-data";
import { useEffect } from "react";

export default function Home() {
  const { questions, setQuestions } = useQuestions();

  useEffect(() => {
    setQuestions(QUESTIONS);
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
    </>
  );
}
