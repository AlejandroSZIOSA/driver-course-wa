"use client";
import MainHeader from "@/components/main-header";
import { useQuestions } from "@/context/QuestionsContext";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const { questions } = useQuestions();
  const router = useRouter();

  console.log(questions);
  return (
    <>
      <MainHeader>
        <button onClick={router.back}>Go Back</button>
      </MainHeader>
      <main>About Page</main>
    </>
  );
}
