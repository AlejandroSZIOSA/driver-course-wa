//server
import React from "react";
import { useState, useEffect } from "react";
import classes from "@/styles/components/LoginForm.module.css";
import PrimaryButton from "./primary-button";
import ShowButton from "./show-button";
import LockButton from "./lock-button";
import InfoBoxInsideForm from "./infoBox-insideForm";

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
      <form className={classes.formContainer} onSubmit={handleLoginUser}>
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
          <ShowButton type="button" onclickFN={toggleShowPassword}>
            {!showPassword ? "Show" : "Hide"}
          </ShowButton>
        </div>
        <div className={classes.lockButtonsContainer}>
          {/* <button type="button" onClick={toggleLock}>
            {!isLocked ? "Lock" : "Unlock"}
          </button> */}
          <LockButton type="button" onclickFN={toggleLock}>
            {!isLocked ? "Lock" : "Unlock"}
          </LockButton>
          <PrimaryButton type="submit">LOGIN</PrimaryButton>
        </div>
      </form>
      <div style={{ marginTop: "10px" }}>
        {error && (
          <InfoBoxInsideForm colorText="red">{error}</InfoBoxInsideForm>
        )}
        {message && (
          <InfoBoxInsideForm colorText="green">{message}</InfoBoxInsideForm>
        )}
        {isLoading && <InfoBoxInsideForm>login User ...</InfoBoxInsideForm>}
      </div>
    </div>
  );
}
