//server
import React from "react";
import { useState, useEffect } from "react";
import classes from "@/styles/components/LoginForm.module.css";

export default function LoginForm({ handleUserData }) {
  const [user, setUser] = useState({ email: "", password: "" });

  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const userStored = localStorage.getItem("user");
    const user = userStored ? JSON.parse(userStored) : null;
    if (user) {
      setUser({ email: user.email, password: user.password });
    }
  }, []);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

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
        body: JSON.stringify(user),
      });
      const data = await res.json();

      /* localStorage.setItem("token", data.token); */

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
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <div style={{ display: "flex" }}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <button type="button" onClick={toggleShowPassword}>
            {!showPassword ? "Show" : "Hide"}
          </button>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
