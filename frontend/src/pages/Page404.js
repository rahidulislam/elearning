import React, { Component, Fragment } from 'react';
import Error404 from '../components/Error/Error404';
import Footer from '../components/Footer/Footer';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from '../components/TopPage/TopPage';

export default class Page404 extends Component {
  render() {
    return (
        <Fragment>
            <TopNavigation/>
            <TopPage pageHeader="Not Found" />
            <Error404/>
            <Footer/>
        </Fragment>
    );
  }
}
