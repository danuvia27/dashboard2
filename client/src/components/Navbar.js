import React, { useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbarWrapper">
            <div className="topLeft">
              <span className="logo">Dashboard</span>
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
          <Link to="#" className="menu-bars">
            <AiOutlineUnorderedList onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
