"use client";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { useQuestions } from "@/context/QuestionsContext";
import classes from "@/styles/pages/Start.module.css";
import Image from "next/image";

export default function StartPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const { questions } = useQuestions();
  let LAST_INDEX = questions.length - 1;

  useEffect(() => {
    if (currentIndex > LAST_INDEX) {
      router.push("/summary");
    }
  }, [currentIndex]);

  if (currentIndex <= LAST_INDEX) {
    /* console.log(questions); */
    /* debugger; */
    return (
      <main className={classes.main}>
        <h1>Question {currentIndex + 1}</h1>
        <div>
          <Image
            src={questions[currentIndex].imageUrl}
            width={400}
            height={500}
            alt="QuestionImage"
            priority={true}
          />
        </div>
        <div>
          <h2>{questions[currentIndex].description}</h2>
          <button onClick={() => setCurrentIndex(currentIndex + 1)}>
            Next Question
          </button>
        </div>
      </main>
    );
  }
}
