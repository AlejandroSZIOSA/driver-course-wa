//server
import React from "react";
import { useState } from "react";
import classes from "@/styles/components/LoginForm.module.css";

export default function LoginFormTest({ handleUserData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleLoginUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      /* console.log(data.token); */
      // Store token in localStorage (or use cookies for better security)
      /* localStorage.setItem("token", data.token); */
      //router.push("/"); // Redirect after login

      if (!res.ok) {
        setError(data.error);
        setIsLoading(false);
        return;
      }
      setMessage(data.message);
      handleUserData();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
      {isLoading && <div>Login User ....</div>}

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
