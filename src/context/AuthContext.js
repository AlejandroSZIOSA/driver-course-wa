"use client";
import { useState, createContext, useContext } from "react";
import { USER_TEST } from "@/mock/dummy-data";

const AuthContext = createContext();

const initialUserState = USER_TEST;

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(initialUserState);

  const logIn = () => {
    setUser({
      id: 1,
      username: "user1",
      password: "pass1",
      isAuth: true,
    });
  };

  const logOut = () => {
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
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthUser() {
  return useContext(AuthContext);
}
