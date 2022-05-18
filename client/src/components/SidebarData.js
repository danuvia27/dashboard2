import React from "react";
import { MdDashboard } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { AiFillThunderbolt } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <MdDashboard />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    icon: <RiTeamFill />,
    cName: "nav-text",
  },
  {
    title: "Outages",
    path: "/outages",
    icon: <AiFillThunderbolt />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <HiDocumentReport />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <FiSettings />,
    cName: "nav-text",
  },
];
