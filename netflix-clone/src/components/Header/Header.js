import React from "react";
import "./Header.css";
import netflix from "../../assets/images/netflix.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <div className="header_container">
      <div className="header_left">
        <ul>
        <li><img src={netflix} alt="netflix" width="100"/></li>
          <li>Netflix</li>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by Language</li>
          
          {/* <li>Watch Later</li>
          <li>Settings</li> */}
        </ul>
      </div>
      <div className="header_right">
        <ul>
           <li><SearchIcon /></li> 
          
          <li><NotificationsIcon /></li>
          
          <li><AccountBoxIcon /></li>
          <li><ArrowDropDownIcon /></li> 
        </ul>
      </div>
    </div>
  );
};

export default Header;
