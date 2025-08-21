import { ReactNode } from "react";
import "@/styles/index.scss";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/footer";

interface AuthProps {
  children: ReactNode;
}
export default function AuthLayout({ children }: AuthProps) {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
}
