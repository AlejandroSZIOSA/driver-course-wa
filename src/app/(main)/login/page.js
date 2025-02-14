"use client";
import MainHeader from "@/components/main-header";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

export default function LoginPage() {
  const { isLogin, logIn } = useUser();
  const router = useRouter();

  function handleLogInUser() {
    logIn();
    router.push("/"); // Go to home page
  }
  return (
    <>
      <MainHeader>
        <button onClick={router.back}>Go back</button>
      </MainHeader>
      <main>
        <h2>LOG IN PAGE</h2>
        <p> Is logIn: {isLogin ? <span>Yes</span> : <span>No</span>}</p>
        <button onClick={handleLogInUser}>login</button>
      </main>
    </>
  );
}
