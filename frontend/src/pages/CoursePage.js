import React, { Component, Fragment } from "react";
import Category from "../components/Category/Category";
import Course from "../components/Course/Course";
import Footer from "../components/Footer/Footer";
import Testimonial from "../components/Testimonial/Testimonial";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopPage from "../components/TopPage/TopPage";

export default class CoursePage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <TopPage pageHeader="Courses" />
        <Category />
        <Course />
        <Testimonial />
        <Footer />
      </Fragment>
    );
  }
}
