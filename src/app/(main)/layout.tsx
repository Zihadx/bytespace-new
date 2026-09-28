import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/Navbar";
import type { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
