"use client";
import { createContext, useContext, useState } from "react";
//1
const QuestionsContext = createContext();

//2 - Create ThemeProvider Component

export default function QuestionsProvider({ children }) {
  //4-Create value to share
  const [questions, setQuestions] = useState(null);

  return (
    <QuestionsContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionsContext.Provider>
  );
}

//5 FN export Question Context
export function useQuestions() {
  return useContext(QuestionsContext);
}
