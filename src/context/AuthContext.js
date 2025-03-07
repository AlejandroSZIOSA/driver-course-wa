"use client";
import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  const log_In = () => {
    setUser({
      id: 1,
      username: "user1",
      password: "pass1",
      isAuth: true,
    });
  };

  const log_Out = () => {
    setUser({
      id: 1,
      username: "user1",
      password: "pass1",
      isAuth: false,
    });
  };

  /* const logIn = () => {
    setIsLogin(true);
  };

  const logOut = () => {
    setIsLogin(false);
  }; */

  return (
    <AuthContext.Provider value={{ user, log_In, log_Out }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthUser() {
  return useContext(AuthContext);
}
