"use client";
import SummaryItem from "@/components/summary-item";
import { useQuestions } from "@/context/QuestionsContext";
import { useRouter, useSearchParams } from "next/navigation";
import classes from "@/styles/pages/Summary.module.css";

const QUESTIONS = [
  { _id: 1, question: "q1" },
  { _id: 2, question: "q2" },
];
export default function SummaryPage() {
  const router = useRouter();
  const { questions } = useQuestions();

  const searchParams = useSearchParams();
  //Extract-Decode Array Objet from the previous page(start page)
  const userAnswers = JSON.parse(
    decodeURIComponent(searchParams.get("summaryData") || "[{}]")
  );

  return (
    <main className={classes.main}>
      <section>
        <h1> Summary</h1>
        <ol className={classes.listContainer}>
          {QUESTIONS.map((q) => (
            <li key={q._id}>
              <SummaryItem question={q} userAnswers={userAnswers} />
            </li>
          ))}
        </ol>
        <div>
          <button onClick={() => router.push("/start")}>Try Again</button>
          <button onClick={() => router.push("/")}>To Home</button>
        </div>
      </section>
    </main>
  );
}
