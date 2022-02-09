import React, { Component, Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import Testimonial from '../components/Testimonial/Testimonial';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from '../components/TopPage/TopPage';

export default class TestimonialPage extends Component {
  render() {
    return (
        <Fragment>
            <TopNavigation/>
            <TopPage pageHeader="Testimonial" />
            <Testimonial/>
            <Footer/>
        </Fragment>
    );
  }
}
