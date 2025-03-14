"use client";
import React from "react";
import classes from "@/styles/components/MainHeader.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MainHeader() {
  const router = useRouter();
  return (
    <header className={classes.header}>
      <Image
        src="/svg/icons/back.svg"
        width={25}
        height={25}
        alt="back"
        onClick={router.back}
      />
    </header>
  );
}
