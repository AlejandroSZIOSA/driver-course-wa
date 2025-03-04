import React from "react";
import classes from "@/styles/components/MainHeader.module.css";
export default function MainHeader({ children }) {
  return <header className={classes.header}>{children}</header>;
}
