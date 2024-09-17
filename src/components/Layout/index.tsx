import Navbar from "../Navbar/index";
import React from "react";
import { usePathname } from "next/navigation";
import Footer from "../Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="leading-normal tracking-normal text-white absolute w-screen ">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
