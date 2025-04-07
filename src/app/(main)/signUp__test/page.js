"use client";

import classes from "@/styles/pages/SignIn.module.css";
import SignupForm from "@/components/Signup-form";

export default function SignUpPage() {
  return (
    <>
      <main className={classes.main}>
        <h1>Sign-Up Test</h1>
        <SignupForm />
      </main>
    </>
  );
}
