import React from "react";
import "./newUser.css";
const NewUser = () => {
  return (
    <div className="newUser">
      <h3 className="newUserTitle">New user</h3>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Demo" />
        </div>
        <div className="newUserItem">
          <label>Full name</label>
          <input type="text" placeholder="Demo doe" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="text" placeholder="Demo@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="text" placeholder="paswotd" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 56743210" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="paswotd" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserBtn">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
