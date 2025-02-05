"use client";
import MainHeader from "@/components/main-header";
import { useRouter } from "next/navigation";

import { QuestionsContext } from "@/context/QuestionsContext";
import { useContext } from "react";
export default function AboutPage() {
  const { questions } = useContext(QuestionsContext);

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
