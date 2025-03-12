"use client";
import MainHeader from "@/components/main-header";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import classes from "@/styles/pages/SignIn.module.css";

export default function SignInPage() {
  const router = useRouter();
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
        <h1>Sign-In PAGE</h1>

        <form id="sign-up" className={classes.form}>
          {/* <div>
            <img src="/images/auth-icon.jpg" alt="A lock icon" />
          </div> */}
          <p>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </p>
          <p>
            <button type="submit">Create Account</button>
          </p>
          {/*  <p>
            <Link href="/">Login with existing account.</Link>
          </p> */}
        </form>
      </main>
    </>
  );
}
