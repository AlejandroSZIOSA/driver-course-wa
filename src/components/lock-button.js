import classes from "@/styles/components/LockButton.module.css";

export default function LockButton({ children, type, onclickFN, isDisabled }) {
  return (
    <button
      className={classes.btn}
      type={type}
      onClick={onclickFN}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
