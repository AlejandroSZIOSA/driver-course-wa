import classes from "@/styles/components/PrimaryButton.module.css";

export default function PrimaryButton({
  children,
  type,
  onclickFN,
  isDisabled,
}) {
  return (
    <div className={classes.container}>
      <button
        className={classes.btn}
        type={type}
        onClick={onclickFN}
        disabled={isDisabled}
      >
        {children}
      </button>
    </div>
  );
}
