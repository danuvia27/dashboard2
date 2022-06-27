import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { FiAlertOctagon } from "react-icons/fi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import CurrentDate from "./CurrentDate";

export default function Navbar(getAllFour) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#FC5750" }}>
        <div className="navbar">
          <Link to="/" className="menu-bars"></Link>
          <ul className="nav justify-content-end">
            <li className="nav-date">
              <a>
                {" "}
                <CurrentDate />{" "}
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <FiAlertOctagon />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FiSettings />
              </Link>
            </li>
          </ul>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <div className="dash"> Dashboard</div>
              <Link to="/" className="menu-bars">
                <MdOutlineDashboardCustomize />{" "}
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
