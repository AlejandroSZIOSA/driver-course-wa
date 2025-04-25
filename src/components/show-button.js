import classes from "@/styles/components/ShowButton.module.css";

export default function ShowButton({ children, type, onclickFN }) {
  return (
    <button className={classes.btn} type={type} onClick={onclickFN}>
      {children}
    </button>
  );
}
