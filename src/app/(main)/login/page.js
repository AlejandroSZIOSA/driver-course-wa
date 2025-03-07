"use client";
import { useState } from "react";
import MainHeader from "@/components/main-header";
import { useRouter } from "next/navigation";
import { useAuthUser } from "@/context/AuthContext";
import Image from "next/image";

import { QUESTIONS } from "@/mock/dummy-data";
import { useQuestions } from "@/context/QuestionsContext";

//Sanity
import { getAllQuestions } from "@/lib/api";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const { user, logIn } = useAuthUser();
  const { questions, setQuestions } = useQuestions(); //CTX: null

  const router = useRouter();

  async function getQuestions() {
    setIsLoading(true);
    const data = await getAllQuestions();
    if (!data) {
      setError("Failed to fetch questions");
    }
    setIsLoading(false);
    setQuestions(data);
  }

  function handleLogInUser() {
    logIn();
    getQuestions();
    console.log("sanity:", questions);
    router.push("/");
  }

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  let questionsCheckContent;

  if (questions) {
    questionsCheckContent = <p>Questions list have been loaded</p>;
  }

  return (
    <>
      <MainHeader>
        <Image
          src="/svg/icons/back.svg"
          width={25}
          height={25}
          alt="back"
          onClick={router.back}
        />
      </MainHeader>
      <main>
        <h2>LOG IN PAGE</h2>
        <p> Is logIn: {user.isAuth ? <span>Yes</span> : <span>No</span>}</p>
        {!user.isAuth && <button onClick={handleLogInUser}>login</button>}
        {questionsCheckContent}
      </main>
    </>
  );
}
