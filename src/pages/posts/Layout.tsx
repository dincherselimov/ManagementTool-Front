import React, { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div>
       <main>{children}</main>
    </div>
  );
}