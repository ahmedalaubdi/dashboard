import React from "react";
import "./widgetLg.css";
import user from "../../img/user.png";
const WidgetLg = () => {
  const Button = ({ type }) => {
    return <Button className={"widgetLgBtn " + type}>{type}</Button>;
  };
  return (
    <div className="widgetLg">
      <h2 className="widgetLgTitle">Latest transaction</h2>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={user} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Ahmed Aubdi</span>
          </td>
          <td className="widgetLgDate">20 4 2021</td>
          <td className="widgetLgAmount">$213.01</td>
          <td className="widgetLgStatus">Active</td>
          <td className="widgetLgTdBtn">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
