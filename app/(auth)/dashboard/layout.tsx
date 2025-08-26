import { ReactNode } from "react";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/footer";
interface AuthProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: AuthProps) {
  return (
    <main>
      <Navigation />
      {children}
      <Footer />
    </main>
  );
}
