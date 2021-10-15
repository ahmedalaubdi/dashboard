import { Visibility } from "@material-ui/icons";
import React from "react";
import "./widgetSm.css";
import user from "../../img/user.png";
const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmItem">
          <img src={user} alt="img" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ahmed Aubdi</span>
            <span className="widgetSmUserTitle">Network Engineer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="widgetIcons" />
            display
          </button>
        </li>
        <li className="widgetSmItem">
          <img src={user} alt="img" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ahmed Aubdi</span>
            <span className="widgetSmUserTitle">Network Engineer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="widgetIcons" />
            display
          </button>
        </li>
        <li className="widgetSmItem">
          <img src={user} alt="img" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ahmed Aubdi</span>
            <span className="widgetSmUserTitle">Network Engineer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="widgetIcons" />
            display
          </button>
        </li>
        <li className="widgetSmItem">
          <img src={user} alt="img" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ahmed Aubdi</span>
            <span className="widgetSmUserTitle">Network Engineer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="widgetIcons" />
            display
          </button>
        </li>
        <li className="widgetSmItem">
          <img src={user} alt="img" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ahmed Aubdi</span>
            <span className="widgetSmUserTitle">Network Engineer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="widgetIcons" />
            display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
