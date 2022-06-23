import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiOutlineHome />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    icon: <AiIcons.AiOutlineTeam />,
    cName: "nav-text",
  },
  {
    title: "Outages",
    path: "/outages",
    icon: <AiIcons.AiOutlineThunderbolt />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <FiIcons.FiSettings />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <FiIcons.FiHelpCircle />,
    cName: "nav-text",
  },
];
