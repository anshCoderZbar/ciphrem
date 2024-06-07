import { LeaderBoardIcon, QuestIcon } from "@/components/sidebar/icons";

export const SidebarList = [
  {
    id: 1,
    pathname: "Quest",
    slug: "/",
    icon: <QuestIcon />,
  },
  {
    id: 2,
    pathname: "Leaderboard",
    slug: "/leaderboard",
    icon: <LeaderBoardIcon />,
  },
];
