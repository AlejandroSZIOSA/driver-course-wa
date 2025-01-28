import MainHeader from "@/components/ui/main-header";
import styles from "../styles/pages/home/page.module.css";
import { QUESTION_DATA } from "@/mock/dummy-data";
import Link from "next/link";

export default function Home() {
  console.log(QUESTION_DATA);
  return (
    <div className={styles.page}>
      <MainHeader>
        <p>home header</p>
        <Link href="/about">To About</Link>
        <Link href="/intro">To Intro</Link>
      </MainHeader>
      <main className={styles.main}>
        <h1>Home page</h1>
      </main>
    </div>
  );
}
