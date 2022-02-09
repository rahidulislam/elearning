import React, { Component, Fragment } from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Footer from "../components/Footer/Footer";
import Service from "../components/Service/Service";
import Team from "../components/Team/Team";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopPage from "../components/TopPage/TopPage";

export default class AboutPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <TopPage pageHeader="About Us"/>
        <Service/>
        <AboutUs/>
        <Team/>
        <Footer/>
      </Fragment>
    );
  }
}
