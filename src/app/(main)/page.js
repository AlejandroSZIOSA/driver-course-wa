import MainHeader from "@/components/ui/main-header";
import styles from "@/styles/pages/home/page.module.css";
import { QUESTION_DATA } from "@/mock/dummy-data";
import Link from "next/link";

export default function Home() {
  console.log(QUESTION_DATA);
  return (
    <div>
      <MainHeader>
        <p>home header</p>
        <Link href="/about">To About</Link>
        <Link href="/login">To login</Link>
      </MainHeader>
      <main className={styles.mainContainer}>
        <h1>Home page</h1>
        <Link href="intro">START</Link>
      </main>
    </div>
  );
}
