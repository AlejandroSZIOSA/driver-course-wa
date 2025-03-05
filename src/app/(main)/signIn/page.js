"use client";
import MainHeader from "@/components/main-header";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
      <main>
        <p>Sign In page</p>
      </main>
    </>
  );
}
