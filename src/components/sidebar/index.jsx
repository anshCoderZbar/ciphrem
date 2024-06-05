import React from "react";
import { LeaderBoardIcon, QuestIcon } from "./icons";

export const Sidebar = () => {
  return (
    <aside className="z-40 h-screen w-72 -translate-x-full transition-transform sm:translate-x-0">
      <div className="h-full overflow-y-auto bg-black px-5 py-5">
        <ul className="space-y-3 font-medium">
          <li>
            <a
              href="#"
              className="group flex items-center p-2 text-lg text-white hover:bg-[#0F0F13]"
            >
              <QuestIcon />
              <span className="ms-3">Quest</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="group flex items-center p-2 text-lg text-white hover:bg-[#0F0F13]"
            >
              <LeaderBoardIcon />
              <span className="ms-3 flex-1 whitespace-nowrap">Leaderboard</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
