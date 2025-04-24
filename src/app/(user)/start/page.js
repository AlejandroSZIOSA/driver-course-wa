"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuestions } from "@/context/QuestionsContext";
import classes from "@/styles/pages/Start.module.css";
import Image from "next/image";
import PrimaryButton from "@/components/primary-button";
import Link from "next/link";

export default function StartPage() {
  /*  debugger; */
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finalUserAnswers, setFinalUserAnswers] = useState([]);
  const [summaryData, setSummaryData] = useState([]);
  const [userRegister, setUserRegister] = useState({});

  const [selectedAnswer, setSelectedAnswer] = useState(undefined);
  const { questions } = useQuestions();

  /* let LAST_INDEX = questions.length - 1; */

  useEffect(() => {
    if (questions) {
      if (currentIndex > questions.length - 1) {
        handleToSummaryPage();
      } else {
        randomizeFinalAnswers(addCorrectAnswer(currentIndex));
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    if (questions) {
      const { _id } = questions[currentIndex];
      const userData = { questionId: _id, selectedAnswer: selectedAnswer };
      setUserRegister(userData);
    }
  }, [selectedAnswer]);

  function handleToSummaryPage() {
    const encodedSummaryData = encodeURIComponent(JSON.stringify(summaryData));
    router.push(`/summary?summaryData=${encodedSummaryData}`);
  }

  function randomizeFinalAnswers(preAnswers) {
    let finalRandomAnswers = [];
    for (let i = preAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [preAnswers[i], preAnswers[j]] = [preAnswers[j], preAnswers[i]]; // Swap elements
    }
    finalRandomAnswers = preAnswers;
    setFinalUserAnswers(finalRandomAnswers);
    /* console.log(finalUserAnswers); */
  }

  function addCorrectAnswer(index) {
    let { wrongAnswers, answer } = questions[index];
    let allAnswers = new Array();
    allAnswers = [...wrongAnswers, answer];
    /* console.log(finalAnswers); */
    return allAnswers;
  }

  function handleClickBtn() {
    setSummaryData((prev) => [...prev, userRegister]);
    setCurrentIndex(() => currentIndex + 1);
  }

  if (!questions) {
    return (
      <div>
        <h1>Error Data User</h1>
        <h2>Log In Again</h2>
        <Link href="/">
          <button>To Home</button>
        </Link>
      </div>
    );
  }

  if (currentIndex <= questions.length - 1) {
    /* debugger; */
    return (
      <main className={classes.main}>
        <section>
          <div className={classes.imageContainer}>
            <h1>Question {currentIndex + 1}</h1>
            <Image
              src={questions[currentIndex].imageUrl}
              width={380}
              height={430}
              alt="QuestionImage"
              priority={true}
            />
            <p>{questions[currentIndex].description}</p>
            <hr></hr>
          </div>
          <div className={classes.questionsContainer}>
            <ol>
              <li style={{ listStyle: "outside" }}>
                <h1>{questions[currentIndex].question}</h1>
              </li>
            </ol>

            <div className={classes.answersContainer}>
              {finalUserAnswers.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                  />
                  <p>{option}</p>
                </label>
              ))}

              <p>Selected: {selectedAnswer}</p>
            </div>

            <PrimaryButton
              onclickFN={handleClickBtn}
              isDisabled={!selectedAnswer ? true : false}
            >
              Next Question
            </PrimaryButton>
          </div>
        </section>
      </main>
    );
  }
}
