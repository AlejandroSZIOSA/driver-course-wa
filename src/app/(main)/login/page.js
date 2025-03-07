"use client";
import { useEffect } from "react";
import MainHeader from "@/components/main-header";
import { useRouter } from "next/navigation";
import { useAuthUser } from "@/context/AuthContext";
import Image from "next/image";

import { QUESTIONS } from "@/mock/dummy-data";
import { useQuestions } from "@/context/QuestionsContext";

//Sanity
import { getAllQuestions } from "@/lib/api";

export default function LoginPage() {
  const { user, logIn } = useAuthUser();
  const { questions, setQuestions } = useQuestions();

  const router = useRouter();

  useEffect(() => {
    getQuestions();
  }, []);

  async function getQuestions() {
    const data = await getAllQuestions();
    setQuestions(data);
  }

  function handleLogInUser() {
    logIn();
    /* console.log("sanity:", questions); */
    router.push("/");
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
      </main>
    </>
  );
}
