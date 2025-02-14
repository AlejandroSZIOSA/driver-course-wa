"use client";
import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  const logIn = () => {
    setIsLogin(true);
  };

  const logOut = () => {
    setIsLogin(false);
  };

  return (
    <UserContext.Provider value={{ isLogin, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
