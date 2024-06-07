"use client";

import { useEffect } from "react";
import { LeaderBoardIcon, QuestIcon } from "./icons";
import Link from "next/link";

export const Sidebar = ({ sidebarActive }) => {
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
          <li>
            <Link
              href="/"
              className={`group flex items-center p-2 text-sm text-white hover:bg-[#0F0F13] sm:text-base lg:text-lg ${window?.location?.pathname === "/" ? "bg-[#0F0F13]" : "bg-none"}`}
            >
              <QuestIcon />
              <span className="ms-3">Quest</span>
            </Link>
          </li>
          <li>
            <Link
              href="/leaderboard"
              className={`group flex items-center p-2 text-sm text-white hover:bg-[#0F0F13] sm:text-base lg:text-lg ${window?.location?.pathname === "/leaderboard" ? "bg-[#0F0F13]" : "bg-none"}`}
            >
              <LeaderBoardIcon />
              <span className="ms-3 flex-1 whitespace-nowrap">Leaderboard</span>
            </Link>
          </li>
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
