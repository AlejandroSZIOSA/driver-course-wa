"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function SummaryPage() {
  const router = useRouter();

  return (
    <main>
      <h1> Summary Page</h1>
      <button onClick={() => router.push("/start")}>Try Again</button>
      <button onClick={() => router.push("/")}>To Home</button>
    </main>
  );
}
