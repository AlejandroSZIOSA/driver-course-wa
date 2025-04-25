import MainFooter from "@/components/main-footer";
import "../globals.css";
import MainHeader from "@/components/main-header";

//RootLayout is not an reserved name
export default function MainLayout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}
