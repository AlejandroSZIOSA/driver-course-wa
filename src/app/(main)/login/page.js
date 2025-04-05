"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuthUser } from "@/context/AuthContext";
import { useQuestions } from "@/context/QuestionsContext";

import LoginForm from "@/components/Login-form";
//Sanity
import { getAllQuestions } from "@/lib/api";

import classes from "@/styles/pages/Login.module.css";

export default function LoginPage() {
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [errorData, setErrorData] = useState("");

  const { log_In } = useAuthUser();
  const { questions, setQuestions } = useQuestions(); //CTX: null

  const router = useRouter();

  async function getQuestions() {
    setIsLoadingData(true);
    const data = await getAllQuestions();
    if (!data) {
      setErrorData("Failed to fetch questions");
    }
    setIsLoadingData(false);
    setQuestions(data);
  }

  function handleUserData() {
    log_In();
    getQuestions();
    router.push("/");
  }

  return (
    <main className={classes.container}>
      <h1>Login</h1>
      {isLoadingData && <div>Loading Data ....</div>}
      {errorData && <div>Error: {errorData}</div>}
      {questions && <p>Data have been loaded</p>}
      <LoginForm handleUserData={handleUserData} />
    </main>
  );
}
