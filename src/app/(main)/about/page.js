"use client";
import { useQuestions } from "@/context/QuestionsContext";
import classes from "@/styles/pages/About.module.css";

export default function AboutPage() {
  const { questions } = useQuestions();

  console.log(questions);
  return (
    <main className={classes.container}>
      <h1 style={{ padding: "10px" }}>ABOUT US</h1>
      <section className={classes.section}>
        <h2>Info here</h2>
        <p className={classes.paragraph}>.....</p>
      </section>
    </main>
  );
}
