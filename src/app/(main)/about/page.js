"use client";
import MainHeader from "@/components/main-header";
import { useQuestions } from "@/context/QuestionsContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AboutPage() {
  const { questions } = useQuestions();
  const router = useRouter();

  console.log(questions);
  return (
    <>
      <MainHeader>
        <Image
          src="/svg/icons/back.svg"
          width={25}
          height={25}
          alt="back"
          onClick={router.back}
        />

        {/*  <button onClick={router.back}>Go Back</button> */}
      </MainHeader>
      <main>About Page</main>
    </>
  );
}
