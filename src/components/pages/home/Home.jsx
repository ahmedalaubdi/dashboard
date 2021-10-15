import React from "react";
import Chart from "../../chart/Chart";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import "./home.css";
import { data } from "../../../DummyUsers";
import WidgetSm from "../../widgetS/WidgetSm";
import WidgetLg from "../../widgetL/WidgetLg";
import WidgetBg from "../../widgetL/WidgetBg";
const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={data} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSm />

        <WidgetBg />
      </div>
    </div>
  );
};

export default Home;
