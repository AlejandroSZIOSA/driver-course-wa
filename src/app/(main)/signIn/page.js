"use client";
import MainHeader from "@/components/main-header";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  return (
    <>
      <MainHeader>
        <button onClick={router.back}>Go Back</button>
      </MainHeader>
      <main>
        <p>Sign In page</p>
      </main>
    </>
  );
}
