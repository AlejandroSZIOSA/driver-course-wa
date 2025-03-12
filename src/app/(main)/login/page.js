"use client";
import { useState } from "react";
import MainHeader from "@/components/main-header";
import { useRouter } from "next/navigation";
import { useAuthUser } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import classes from "@/styles/pages/Login.module.css";

import { useQuestions } from "@/context/QuestionsContext";

//Sanity
import { getAllQuestions } from "@/lib/api";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const { user, log_In } = useAuthUser();
  const { questions, setQuestions } = useQuestions(); //CTX: null

  const router = useRouter();

  async function getQuestions() {
    setIsLoading(true);
    const data = await getAllQuestions();
    /*  debugger; */
    /* console.log(data); */
    if (!data) {
      setError("Failed to fetch questions");
    }
    setIsLoading(false);
    setQuestions(data);
  }

  function handleLogInUser() {
    log_In();
    getQuestions();
    /*  console.log("sanity:", questions); */
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
    console.log(questions);
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
      <main className={classes.main}>
        <h2>LOG-IN PAGE</h2>
        <p> Is logIn: {user.isAuth ? <span>Yes</span> : <span>No</span>}</p>
        {!user.isAuth && <button onClick={handleLogInUser}>login</button>}
        {questionsCheckContent}

        <form className={classes.form}>
          {/* <div>
            <img src="/images/auth-icon.jpg" alt="A lock icon" />
          </div> */}
          <p>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </p>
          <p>
            <button type="submit">Login User</button>
          </p>
        </form>
      </main>
    </>
  );
}
