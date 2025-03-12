"use client";
import { useState, useEffect } from "react";

export default function SummaryItem({ question, userAnswers }) {
  const [isCorrect, setIsCorrect] = useState(null);

  /* debugger; */
  useEffect(() => {
    setIsCorrect(checkUserAnswer);
  }, []);

  function checkUserAnswer() {
    const { _id, answer } = question;
    let isCorrect;

    for (let i = 0; i < userAnswers.length; i++) {
      const { questionId, selectedAnswer } = userAnswers[i];
      if (_id == questionId) {
        if (answer == selectedAnswer) {
          isCorrect = true;
          break;
        } else {
          isCorrect = false;
          break;
        }
      }
    }
    return isCorrect;
  }

  return (
    <div>
      <h2> Question :{question.question}</h2>
      <p>{isCorrect ? "Correct Answer" : "Wrong Answer"}</p>
    </div>
  );
}
