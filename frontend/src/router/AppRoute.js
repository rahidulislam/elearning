import React, { Component, Fragment } from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import CoursePage from '../pages/CoursePage';
import HomePage from '../pages/HomePage';
import Page404 from '../pages/Page404';
import TeamPage from '../pages/TeamPage';
import TestimonialPage from '../pages/TestimonialPage';
export default class AppRoute extends Component {
  render() {
    return (
        <Fragment>
            <Routes>
                <Route end path="/" element={<HomePage/>} />
                <Route end path="/about" element={<AboutPage/>}/>
                <Route end path="/courses" element={<CoursePage/>}/>
                <Route end path="/team" element={<TeamPage/>}/>
                <Route end path="/testimonial" element={<TestimonialPage/>}/>
                <Route end path="/contact" element={<ContactPage/>}/>
                <Route end path="/404" element={<Page404/>}/>
                <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
        </Fragment>
    );
  }
}
