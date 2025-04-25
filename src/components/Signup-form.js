//server side
import { useState } from "react";
import { useRouter } from "next/navigation";
import classes from "@/styles/components/SignupForm.module.css";
import ShowButton from "./show-button";
import PrimaryButton from "./primary-button";
import InfoBoxInsideForm from "./infoBox-insideForm";

export default function SignupForm() {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

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
    if (newUser.password !== confirmPassword) {
      setError("Passwords doesn't match");
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
    <div className={classes.container}>
      <form className={classes.formContainer} onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          maxLength={30}
          placeholder="Email"
          value={newUser.email}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <div className={classes.passwordInputContainer}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            maxLength={20}
            placeholder="Password"
            value={newUser.password}
            onChange={handleChange}
            required
          />
          <ShowButton type="button" onclickFN={toggleShowPassword}>
            {!showPassword ? "Show" : "Hide"}
          </ShowButton>
        </div>
        <label>Confirm Password</label>
        <div className={classes.passwordInputContainer}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            maxLength={20}
            placeholder="Re-Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <ShowButton type="button" onclickFN={toggleShowConfirmPassword}>
            {!showConfirmPassword ? "Show" : "Hide"}
          </ShowButton>
        </div>
        <div className={classes.submitButtonContainer}>
          <PrimaryButton type="submit">CREATE</PrimaryButton>
        </div>
      </form>
      {error && (
        <InfoBoxInsideForm colorText="red">Error: {error}</InfoBoxInsideForm>
      )}
      {message && <InfoBoxInsideForm>{message}</InfoBoxInsideForm>}
      {isCreatingUser && (
        <InfoBoxInsideForm>Creating User ...</InfoBoxInsideForm>
      )}
    </div>
  );
}
