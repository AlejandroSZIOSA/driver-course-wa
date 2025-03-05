import classes from "@/styles/components/PrimaryButton.module.css";

export default function PrimaryButton({ children, onclickFN, isDisabled }) {
  return (
    <div className={classes.container}>
      <button className={classes.btn} onClick={onclickFN} disabled={isDisabled}>
        {children}
      </button>
    </div>
  );
}
