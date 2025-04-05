//server
import React from "react";
import { useState } from "react";
import classes from "@/styles/components/LoginForm.module.css";

export default function LoginForm({ handleUserData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLoginUser = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    setError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
      setIsLoading(false);
      return;
    }
    // Store token in localStorage (or use cookies for better security)

    /* localStorage.setItem("token", data.token); */

    //router.push("/"); // Redirect after login
    setIsLoading(false);
    handleUserData();
  };

  return (
    <div className={classes.container}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isLoading && <div>Loading User ....</div>}
      <form onSubmit={handleLoginUser} className={classes.formContainer}>
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
    </div>
  );
}
