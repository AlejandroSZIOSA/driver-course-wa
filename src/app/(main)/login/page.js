"use client";
import { useEffect } from "react";
import MainHeader from "@/components/main-header";
import { useRouter } from "next/navigation";
import { useAuthUser } from "@/context/AuthContext";

import { QUESTIONS } from "@/mock/dummy-data";
import { useQuestions } from "@/context/QuestionsContext";

//Sanity
import { getAllQuestions } from "@/lib/api";

export default function LoginPage() {
  const { user, logIn } = useAuthUser();
  const router = useRouter();

  const { setQuestions } = useQuestions();

  useEffect(() => {
    getQuestions();
  }, []);

  async function getQuestions() {
    const data = await getAllQuestions();
    console.log("sanity:", data);
  }

  function handleLogInUser() {
    logIn();
    setQuestions(QUESTIONS);
    router.push("/");
  }

  return (
    <>
      <MainHeader>
        <button onClick={router.back}>Go back</button>
      </MainHeader>
      <main>
        <h2>LOG IN PAGE</h2>
        <p> Is logIn: {user.isAuth ? <span>Yes</span> : <span>No</span>}</p>
        {!user.isAuth && <button onClick={handleLogInUser}>login</button>}
      </main>
    </>
  );
}
