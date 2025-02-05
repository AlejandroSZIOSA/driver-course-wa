"use client";
import MainHeader from "@/components/ui/main-header";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return (
    <>
      <MainHeader>
        <button onClick={router.back}>Go back</button>
      </MainHeader>
      <main>
        <h2>LOG IN PAGE</h2>
      </main>
    </>
  );
}
