import MainHeader from "@/components/main-header";
import styles from "@/styles/pages/home/page.module.css";
import { QUESTIONS } from "@/mock/dummy-data";
import Link from "next/link";

export default function Home() {
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
