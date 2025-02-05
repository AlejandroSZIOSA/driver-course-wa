"use client";
import { QUESTIONS } from "@/mock/dummy-data";
import { createContext, useState } from "react";
//1
export const QuestionsContext = createContext();

//2 - Create ThemeProvider Component

export default function QuestionsProvider({ children }) {
  //4-Create value to share
  const [questions] = useState(QUESTIONS);

  return (
    <QuestionsContext.Provider value={{ questions }}>
      {children}
    </QuestionsContext.Provider>
  );
}
