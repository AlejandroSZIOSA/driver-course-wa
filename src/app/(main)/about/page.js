"use client";
import { useQuestions } from "@/context/QuestionsContext";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const { questions } = useQuestions();
  const router = useRouter();

  console.log(questions);
  return (
    <>
      <main>
        <h1>ABOUT PAGE</h1>x
      </main>
    </>
  );
}
