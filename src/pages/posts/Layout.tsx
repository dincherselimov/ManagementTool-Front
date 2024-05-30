import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div>
        <Navbar/>
         <main>{children}</main>
       <Footer/>
    </div>
  );
}