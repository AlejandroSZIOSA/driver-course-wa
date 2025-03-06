import classes from "@/styles/components/MainFooter.module.css";
import Image from "next/image";
export default function MainFooter() {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div>
          <Image
            src="/svg/icons/phone.svg"
            width={25}
            height={25}
            alt="LockIcon"
          />
          <p>: XXXXXXXXXXXX</p>
        </div>
        <div>
          <Image
            src="/svg/icons/epost.svg"
            width={25}
            height={25}
            alt="LockIcon"
          />
          <p>: XXXXXX@XXXXXX.XX</p>
        </div>
      </div>
    </div>
  );
}
