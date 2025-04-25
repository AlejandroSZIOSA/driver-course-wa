import UserHeader from "@/components/user-header";
import "../globals.css";

//RootLayout is not an reserved name
export default function UserLayout({ children }) {
  return (
    <>
      <UserHeader />
      {children}
    </>
  );
}
