import styles from "../styles/pages/home/page.module.css";
import { QUESTION_DATA } from "@/mock/dummy-data";

export default function Home() {
  console.log(QUESTION_DATA);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home page</h1>
      </main>
    </div>
  );
}
