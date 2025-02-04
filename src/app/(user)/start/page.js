"use client";
import { useState, useEffect } from "react";
import { QUESTIONS } from "@/mock/dummy-data";
import { useRouter } from "next/navigation";

const LAST_INDEX = QUESTIONS.length - 1;
export default function StartPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

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
          <h3>{QUESTIONS[currentIndex].answer}</h3>
          <button onClick={() => setCurrentIndex(currentIndex + 1)}>
            Next Question
          </button>
        </div>
      </main>
    );
  }
}
