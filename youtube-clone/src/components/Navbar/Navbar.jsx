import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import searchIcons from "../../assets/search.png";
import uploaded_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          src={menu_icon}
          alt=""
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev == false ? true : false))}
        />
       <Link to={'/'}> <img src={logo} alt="" className="logo" /> </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={searchIcons} alt="" className="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={uploaded_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} alt="" className="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
