"use client";
import SummaryItem from "@/components/summary-item";
import { useQuestions } from "@/context/QuestionsContext";
import { useRouter, useSearchParams } from "next/navigation";

export default function SummaryPage() {
  const router = useRouter();
  const { questions } = useQuestions();

  const searchParams = useSearchParams();
  const userAnswers = JSON.parse(
    decodeURIComponent(searchParams.get("summary") || "[{}]")
  );
  /* console.log(userAnswers); */

  return (
    <main>
      <h1> Summary Page</h1>
      <ol>
        {questions.map((q) => (
          <li key={q._id}>
            <SummaryItem question={q} userAnswers={userAnswers} />
          </li>
        ))}
      </ol>
      <button onClick={() => router.push("/start")}>Try Again</button>
      <button onClick={() => router.push("/")}>To Home</button>
    </main>
  );
}
