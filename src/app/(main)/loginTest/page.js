"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/Login-form";

import { useAuthUser } from "@/context/AuthContext";
import { useQuestions } from "@/context/QuestionsContext";
//Sanity
import { getAllQuestions } from "@/lib/api";

export default function LoginTestPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoadingData, setIsLoadingData] = useState(false);
  const [errorData, setErrorData] = useState();

  const [error, setError] = useState("");

  const router = useRouter();

  const { log_In } = useAuthUser();
  const { questions, setQuestions } = useQuestions(); //CTX: null

  const handleLoginUser = async (e) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
      return;
    }
    // Store token in localStorage (or use cookies for better security)

    /* localStorage.setItem("token", data.token); */

    //router.push("/"); // Redirect after login
    handleLogInData();
  };

  async function getQuestions() {
    setIsLoadingData(true);
    const data = await getAllQuestions();
    /*  debugger; */
    /* console.log(data); */
    if (!data) {
      setErrorData("Failed to fetch questions");
    }
    setIsLoadingData(false);
    setQuestions(data);
  }

  function handleLogInData() {
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
      {error && <p style={{ color: "red" }}>{error}</p>}
      <LoginForm
        handleLoginUser={handleLoginUser}
        userData={{ email, password, setEmail, setPassword }}
      />
    </main>
  );
}
