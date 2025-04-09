//server side
import { useState } from "react";
import { useRouter } from "next/navigation";
import classes from "@/styles/components/SignupForm.module.css";

export default function SignupForm() {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    /* debugger; */
    e.preventDefault();
    setError("");

    //Confirm the password
    if (newUser.password !== newUser.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsCreatingUser(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
        },
        body: JSON.stringify(newUser),
      });

      /* Authorization: "Bearer" + process.env.SANITY_API_TOKEN, */

      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
        setIsCreatingUser(false);
        return;
      }

      localStorage.setItem("user", JSON.stringify(newUser));

      setMessage(data.message);
      router.push("login");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsCreatingUser(false);
    }
  };

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p> {message}</p>}
      {isCreatingUser && <div>Creating User ....</div>}
      <form onSubmit={handleSubmit} className={classes.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleChange}
          required
        />

        <div style={{ display: "flex" }}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={newUser.password}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={toggleShowPassword}>
            {!showPassword ? "Show" : "Hide"}
          </button>
        </div>
        <div>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Re-Password"
            value={newUser.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={toggleShowConfirmPassword}>
            {!showConfirmPassword ? "Show" : "Hide"}
          </button>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
