"use client";

import classes from "@/styles/pages/Signup.module.css";
import SignupForm from "@/components/Signup-form";

export default function SignUpPage() {
  return (
    <main className={classes.main}>
      <h1 style={{ padding: "20px" }}>Sign-Up</h1>
      <SignupForm />
    </main>
  );
}
