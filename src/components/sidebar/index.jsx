import React from "react";
import { LeaderBoardIcon, QuestIcon } from "./icons";

export const Sidebar = ({ sidebarActive }) => {
  return (
    <aside
      className={`fixed z-40 h-full w-72 -translate-x-full transition-transform lg:relative lg:translate-x-0 ${sidebarActive ? "translate-x-0" : ""}`}
    >
      <div className="h-full overflow-y-auto bg-black px-3 py-3">
        <ul className="space-y-2 font-medium sm:space-y-3">
          <li>
            <a
              href="#"
              className="group flex items-center p-2 text-sm text-white hover:bg-[#0F0F13] sm:text-base lg:text-lg"
            >
              <QuestIcon />
              <span className="ms-3">Quest</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="group flex items-center p-2 text-sm text-white hover:bg-[#0F0F13] sm:text-base lg:text-lg"
            >
              <LeaderBoardIcon />
              <span className="ms-3 flex-1 whitespace-nowrap">Leaderboard</span>
            </a>
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
