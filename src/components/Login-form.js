//server
import React from "react";
import { useState } from "react";

export default function LoginForm({ handleUserData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoginInUser, setIsLoginInUser] = useState(false);
  const [errorLoginUser, setErrorLoginUser] = useState("");

  const handleLoginUser = async (e) => {
    setIsLoginInUser(true);
    e.preventDefault();
    setErrorLoginUser("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setErrorLoginUser(data.error);
      setIsLoginInUser(false);
      return;
    }
    // Store token in localStorage (or use cookies for better security)

    /* localStorage.setItem("token", data.token); */

    //router.push("/"); // Redirect after login
    setIsLoginInUser(false);
    handleUserData();
  };

  if (isLoginInUser) {
    return <div>Login User ....</div>;
  }

  return (
    <>
      {errorLoginUser && <p style={{ color: "red" }}>{errorLoginUser}</p>}
      <form onSubmit={handleLoginUser}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
