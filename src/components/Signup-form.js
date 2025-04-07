//server side
import { useState } from "react";
import { useRouter } from "next/navigation";
import classes from "@/styles/components/SignupForm.module.css";

export default function SignupForm() {
  const [newUser, setNewUser] = useState({});
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    /* debugger; */
    e.preventDefault();
    setIsCreatingUser(true);
    setError("");

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
          placeholder="Email"
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Re-Password"
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          /* required */
        />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
