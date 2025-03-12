"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import classes from "@/styles/components/SummaryItem.module.css";

export default function SummaryItem({ question, userAnswers }) {
  const [isCorrect, setIsCorrect] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");

  /* debugger; */
  useEffect(() => {
    const [isCorrect, userAnswer] = checkUserAnswer();
    setIsCorrect(isCorrect);
    setUserAnswer(userAnswer);
  }, []);

  function checkUserAnswer() {
    const { _id, answer } = question;
    let correctAnswer = answer;
    let isCorrect;
    let userAnswer;

    for (let i = 0; i < userAnswers.length; i++) {
      const { questionId, selectedAnswer } = userAnswers[i];
      if (_id == questionId) {
        userAnswer = selectedAnswer;
        if (correctAnswer == selectedAnswer) {
          isCorrect = true;
          break;
        } else {
          isCorrect = false;
          break;
        }
      }
    }
    return [isCorrect, userAnswer];
  }

  function showCheckAnswerImage(imageUrl) {
    return (
      <Image
        className={classes.checkImage}
        src={imageUrl}
        width={24}
        height={24}
        alt="checkImage"
        priority={true}
      />
    );
  }

  return (
    <div>
      <h2> 1 {question.question}</h2>
      <div className={classes.answerContainer}>
        <h3> answer = {userAnswer}</h3>
        {isCorrect
          ? showCheckAnswerImage("/svg/icons/checkbox-correct.svg")
          : showCheckAnswerImage("/svg/icons/checkbox-incorrect.svg")}
      </div>
    </div>
  );
}
