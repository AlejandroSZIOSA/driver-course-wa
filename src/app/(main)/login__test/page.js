"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuthUser } from "@/context/AuthContext";
import { useQuestions } from "@/context/QuestionsContext";

import LoginForm from "@/components/Login-form1";
//Sanity
import { getAllQuestions } from "@/lib/api";

export default function LoginTestPage() {
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [errorData, setErrorData] = useState();

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

  if (isLoadingData) {
    return <div>Loading Data ....</div>;
  }

  if (errorData) {
    return <div>Error: {errorData}</div>;
  }

  /* let questionsCheckContent; */

  if (questions) {
    /* console.log(questions); */
    return <p>Data have been loaded</p>;
  }

  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <h1>Login</h1>
      <LoginForm handleUserData={handleUserData} />
    </main>
  );
}
