"use client";
import { useState, useEffect, useContext } from "react";
import { QuestionsContext } from "@/context/QuestionsContext";
import { useRouter } from "next/navigation";

export default function StartPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const { questions } = useContext(QuestionsContext);
  let LAST_INDEX = questions.length - 1;

  useEffect(() => {
    if (currentIndex > LAST_INDEX) {
      router.push("/summary");
    }
  }, [currentIndex]);

  if (currentIndex <= LAST_INDEX) {
    return (
      <main>
        <h2>start Page</h2>
        <div>
          <h3>{questions[currentIndex].question}</h3>
          <button onClick={() => setCurrentIndex(currentIndex + 1)}>
            Next Question
          </button>
        </div>
      </main>
    );
  }
}
