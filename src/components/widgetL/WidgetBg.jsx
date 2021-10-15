import React from "react";
import "./widgetBg.css";
import user from "../../img/user.png";

const WidgetBg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetBgBtn " + type}>{type}</button>;
  };
  return (
    <div className="widgetBg">
      <h2 className="widgetBgTitle">Latest transaction</h2>

      <table className="widgetBgTable">
        <tr className="widgetBgTr">
          <th className="widgetBgTh">Customer</th>
          <th className="widgetBgTh">Date</th>
          <th className="widgetBgTh">Amount</th>
          <th className="widgetBgTh">Status</th>
        </tr>

        <tr className="widgetBgTr">
          <td className="widgetBgUser">
            <img src={user} alt="" className="widgetBgImg" />
            <span className="widgetBgName">Ahmed Aubdi</span>
          </td>
          <td className="widgetBgDate">20 4 2021</td>
          <td className="widgetBgAmount">$213.01</td>

          <td className="widgetBgbbb">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetBgTr">
          <td className="widgetBgUser">
            <img src={user} alt="" className="widgetBgImg" />
            <span className="widgetBgName">Ahmed Aubdi</span>
          </td>
          <td className="widgetBgDate">20 4 2021</td>
          <td className="widgetBgAmount">$213.01</td>

          <td className="widgetBgStatus">
            <Button type="Declared" />
          </td>
        </tr>
        <tr className="widgetBgTr">
          <td className="widgetBgUser">
            <img src={user} alt="" className="widgetBgImg" />
            <span className="widgetBgName">Ahmed Aubdi</span>
          </td>
          <td className="widgetBgDate">20 4 2021</td>
          <td className="widgetBgAmount">$213.01</td>

          <td className="widgetBgbbb">
            <Button type="Binding" />
          </td>
        </tr>
        <tr className="widgetBgTr">
          <td className="widgetBgUser">
            <img src={user} alt="" className="widgetBgImg" />
            <span className="widgetBgName">Ahmed Aubdi</span>
          </td>
          <td className="widgetBgDate">20 4 2021</td>
          <td className="widgetBgAmount">$213.01</td>

          <td className="widgetBgbbb">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetBg;
