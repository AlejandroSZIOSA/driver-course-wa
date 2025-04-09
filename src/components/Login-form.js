//server
import React from "react";
import { useState, useEffect } from "react";
import classes from "@/styles/components/LoginForm.module.css";

export default function LoginForm({ handleUserData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const userStored = localStorage.getItem("user");
    const user = userStored ? JSON.parse(userStored) : null;
    if (user) {
      setEmail(user.email);
      setPassword(user.password);
      //console.log(JSON.parse(userStored));
    }
  }, []);

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

      /* localStorage.setItem("token", data.token); */
      //router.push("/"); // Redirect after login

      if (!res.ok) {
        setError(data.error);
        setIsLoading(false);
        return;
      }

      //localStorage.setItem("user", JSON.stringify(newUser));

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
