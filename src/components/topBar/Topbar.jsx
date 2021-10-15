import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import React from "react";
import "./topbar.css";
import Avatar from "../../img/user.png";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="logo">Aubdiadmin</div>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={Avatar} alt="user" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
