"use client";

import { useEffect } from "react";
import Link from "next/link";
import { SidebarList } from "@/mock/Sidebar";
import { usePathname } from "next/navigation";

export const Sidebar = ({ sidebarActive }) => {
  const pathname = usePathname();
  console.log(pathname);
  useEffect(() => {
    if (sidebarActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [sidebarActive]);
  return (
    <aside
      className={`fixed z-40 h-full min-h-screen w-72 -translate-x-full transition-transform lg:relative lg:translate-x-0 ${sidebarActive ? "translate-x-0" : ""}`}
    >
      <div className="h-full overflow-y-auto bg-black px-3 py-3">
        <ul className="space-y-2 font-medium sm:space-y-3">
          {SidebarList?.map((menus) => {
            return (
              <li key={menus?.id}>
                <Link
                  href={menus?.slug}
                  className={`group flex items-center p-2 text-sm text-white hover:bg-[#0F0F13] sm:text-base lg:text-lg ${pathname === menus?.slug ? "bg-[#0F0F13]" : "bg-none"} `}
                >
                  {menus?.icon}
                  <span className="ms-3">{menus?.pathname}</span>
                </Link>
              </li>
            );
          })}

          <li>
            <div className="gradient-border h-10 w-40 sm:h-12 sm:w-44 lg:hidden">
              <button className="gradient-button px-2 text-sm font-bold text-white">
                Connect Wallet
              </button>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};
