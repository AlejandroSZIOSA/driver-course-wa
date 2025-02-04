import MainHeader from "@/components/ui/main-header";
import styles from "@/styles/pages/home/page.module.css";
import { QUESTIONS } from "@/mock/dummy-data";
import Link from "next/link";

export default function Home() {
  console.log(QUESTIONS);
  return (
    <div>
      <MainHeader>
        <p>home header</p>
        <Link href="/about">To About</Link>
        <Link href="/login">To login</Link>
      </MainHeader>
      <main className={styles.mainContainer}>
        <h1>Home page</h1>
        <Link href="/start">START</Link>
      </main>
    </div>
  );
}
