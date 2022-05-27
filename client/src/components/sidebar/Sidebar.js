import "./sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { HiOutlineSupport } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <AiOutlineHome className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <AiOutlineThunderbolt className="sidebarIcon" />
              Outages
            </li>
            <li className="sidebarListItem">
              <AiOutlineTeam className="sidebarIcon" />
              Team
            </li>
            <li className="sidebarListItem">
              <HiOutlineSupport className="sidebarIcon" />
              Support
            </li>
            <li className="sidebarListItem">
              <FiSettings className="sidebarIcon" />
              Settings
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <HiOutlineMail className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <AiOutlineThunderbolt className="sidebarIcon" />
              Outages
            </li>
            <li className="sidebarListItem">
              <AiOutlineTeam className="sidebarIcon" />
              Team
            </li>
            <li className="sidebarListItem">
              <HiOutlineSupport className="sidebarIcon" />
              Support
            </li>
            <li className="sidebarListItem">
              <FiSettings className="sidebarIcon" />
              Settings
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
