"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Sidebar } from "@/components";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [sidebarActive, setSidebarActive] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header
          setSidebarActive={setSidebarActive}
          sidebarActive={sidebarActive}
        />
        <div className="grid grid-cols-1 lg:grid-cols-[288px,1fr]">
          <Sidebar sidebarActive={sidebarActive} />
          <main className="px-3 sm:px-4 md:px-5 lg:pl-0 lg:pr-6 xl:pr-7 2xl:pr-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
