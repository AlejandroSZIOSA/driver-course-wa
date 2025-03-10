"use client";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { useQuestions } from "@/context/QuestionsContext";
import classes from "@/styles/pages/Start.module.css";
import Image from "next/image";
import PrimaryButton from "@/components/primary-button";

/* const TEST_QUESTIONS = ["ans1", "ans2", "ans3", "correct"]; */
export default function StartPage() {
  /*  debugger; */
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finalUserAnswers, setFinalUserAnswers] = useState([]);

  const [selectedQuestion, setSelectedQuestion] = useState();
  const { questions } = useQuestions();

  let LAST_INDEX = questions.length - 1;

  useEffect(() => {
    if (currentIndex > LAST_INDEX) {
      router.push("/summary");
    } else {
      randomizeFinalAnswers(addCorrectAnswer(currentIndex));
    }
  }, [currentIndex]);

  function addCorrectAnswer(index) {
    let { wrongAnswers, answer } = questions[index];
    let allAnswers = new Array();
    allAnswers = [...wrongAnswers, answer];
    /* console.log(finalAnswers); */
    return allAnswers;
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

  if (currentIndex <= LAST_INDEX) {
    /* console.log(questions); */
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
                    checked={selectedQuestion === option}
                    onChange={(e) => setSelectedQuestion(e.target.value)}
                  />
                  <p>{option}</p>
                </label>
              ))}

              <p>Selected: {selectedQuestion}</p>
            </div>

            <PrimaryButton onclickFN={() => setCurrentIndex(currentIndex + 1)}>
              Next Question
            </PrimaryButton>
          </div>
        </section>
      </main>
    );
  }
}
