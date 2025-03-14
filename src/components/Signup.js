import { useState } from "react";

export default function Signup() {
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
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
      <button type="submit">Sign Up</button>
    </form>
  );
}
