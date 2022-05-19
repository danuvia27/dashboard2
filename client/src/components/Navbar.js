import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="topLeft">
          <span className="logo">
            Dashboard <MdOutlineDashboardCustomize />
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <IoMdNotificationsOutline />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <AiOutlineSetting />
          </div>
          <div className="topbarIconContainer">
            <IoMdTime />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
