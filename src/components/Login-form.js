//server
import React from "react";
import { useState, useEffect } from "react";
import classes from "@/styles/components/LoginForm.module.css";

export default function LoginForm({ handleUserData }) {
  const [user, setUser] = useState({ email: "", password: "" });

  const [showPassword, setShowPassword] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setSavedUserLocalStorage();
  }, []);

  function setSavedUserLocalStorage() {
    const userStored = localStorage.getItem("user");
    const user = userStored ? JSON.parse(userStored) : null;
    if (user) {
      setUser({ email: user.email, password: user.password });
      setIsLocked(true);
    }
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleLock = () => setIsLocked(!isLocked);

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
        if (res.status === 401 || res.status === 404) {
          localStorage.clear(); //remove current saved user from localstorage
          setIsLocked(false);
        }
        setError(data.error);
        setIsLoading(false);
        return;
      }

      //check if saved user have been removed from localstorage
      if (localStorage.length === 0) {
        localStorage.setItem("user", JSON.stringify(user));
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
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          disabled={isLocked}
          required
        />
        <label>Password</label>
        <div className={classes.passwordInputContainer}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            maxLength={20}
            value={user.password}
            onChange={handleChange}
            disabled={isLocked}
            required
          />
          <button
            className={classes.showButton}
            type="button"
            onClick={toggleShowPassword}
          >
            {!showPassword ? "Show" : "Hide"}
          </button>
        </div>
        <div className={classes.lockButtonsContainer}>
          <button type="button" onClick={toggleLock}>
            {!isLocked ? "Lock" : "Unlock"}
          </button>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
