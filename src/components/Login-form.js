import React from "react";

export default function LoginForm({ handleLoginUser, userInputs }) {
  const { email, password, setEmail, setPassword } = userInputs;
  return (
    <form onSubmit={handleLoginUser}>
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
  );
}
