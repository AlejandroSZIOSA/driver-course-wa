"use client";
import { useRouter } from "next/navigation";
import classes from "@/styles/pages/SignIn.module.css";
import SignupForm from "@/components/Signup-form";

export default function SignUpPage() {
  const router = useRouter();
  return (
    <>
      <main className={classes.main}>
        <h1>Sign-Up PAGE</h1>
        <SignupForm />
      </main>
    </>
  );
}
