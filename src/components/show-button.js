import classes from "@/styles/components/ShowButton.module.css";

export default function ShowButton({ children, type, onclickFN, isDisabled }) {
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
