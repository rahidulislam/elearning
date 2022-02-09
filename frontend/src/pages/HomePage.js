import React, { Component, Fragment } from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Category from "../components/Category/Category";
import Course from "../components/Course/Course";
import Footer from "../components/Footer/Footer";
import Service from "../components/Service/Service";
import Team from "../components/Team/Team";
import Testimonial from "../components/Testimonial/Testimonial";
import TopCarousel from "../components/TopCarousel/TopCarousel";
import TopNavigation from "../components/TopNavigation/TopNavigation";

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <TopCarousel />
        <Service />
        <AboutUs />
        <Category />
        <Course />
        <Team />
        <Testimonial />
        <Footer />
      </Fragment>
    );
  }
}
