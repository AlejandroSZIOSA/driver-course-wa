import MainFooter from "@/components/main-footer";
import "../globals.css";
//RootLayout is not an reserved name
export default function MainLayout({ children }) {
  return (
    <div>
      {children}
      <MainFooter />
    </div>
  );
}
