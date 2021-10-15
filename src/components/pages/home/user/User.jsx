import React from "react";
import "./user.css";
import userPhoto from "../../../../img/user.png";
import {
  CalendarToday,
  LocalActivityOutlined,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userEdit">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddBtn">Create</button>
        </Link>
      </div>

      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={userPhoto} alt="user" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Jhon Doe</span>
              <span className="userShowUserTitle">Network Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo first_div">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">ahmed007</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10-3-2000</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 23423402</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">jhon@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocalActivityOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">Toronto - Canada</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  placeholder="demo"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Full name</label>
                <input
                  type="text"
                  placeholder="demo demon"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="demo@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  placeholder="+1 23410987"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="Toranto - Canada"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src={userPhoto} alt="user" className="userUpdateImg" />
                <label htmlFor="file">
                  {" "}
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
