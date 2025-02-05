"use client";
import MainHeader from "@/components/main-header";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  return (
    <>
      <MainHeader>
        <button onClick={router.back}>Go Back</button>
      </MainHeader>
      <main>About Page</main>
    </>
  );
}
