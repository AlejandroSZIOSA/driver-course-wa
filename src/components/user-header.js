import classes from "@/styles/components/UserHeader.module.css";
import Image from "next/image";
export default function UserHeader({ children }) {
  return (
    <header className={classes.header}>
      <Image src="/svg/icons/car.svg" width={35} height={35} alt="CarIcon" />
      {children}
    </header>
  );
}
