import { useState } from "react";
import { useRouter } from "next/navigation";
import classes from "@/styles/components/SignupForm.module.css";

export default function SignupForm() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "HOLA", email: "", password: "" });

  const handleSubmit = async (e) => {
    /* debugger; */
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
      },
      body: JSON.stringify(form),
    });

    /* Authorization: "Bearer" + process.env.SANITY_API_TOKEN, */

    const data = await res.json();
    console.log(data);
    /* alert(data.message); */
    router.push("login");
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Re-Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        /* required */
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
