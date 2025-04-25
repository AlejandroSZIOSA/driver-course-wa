"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuthUser } from "@/context/AuthContext";
import { useQuestions } from "@/context/QuestionsContext";

import LoginForm from "@/components/Login-form";
//Sanity
import { getAllQuestions } from "@/lib/api";

import Image from "next/image";
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
    <main className={classes.main}>
      <h1 style={{ padding: "10px" }}>Log-in</h1>
      <Image
        src="/images/userLogIn.png"
        width={150}
        height={150}
        alt="UserImg"
        priority={true}
      />
      <div className={classes.innerContainer}>
        {isLoadingData && <div>Loading Data ....</div>}
        {errorData && <div>Error: {errorData}</div>}
        {questions && <p style={{ color: "green" }}>Data loaded successful</p>}
        <LoginForm handleUserData={handleUserData} />
      </div>
    </main>
  );
}
