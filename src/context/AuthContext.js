"use client";
import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  const logIn = () => {
    setIsLogin(true);
  };

  const logOut = () => {
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isLogin, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthUser() {
  return useContext(AuthContext);
}
