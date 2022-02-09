import React, { Component, Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import AllMember from '../components/Team/AllMember';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from '../components/TopPage/TopPage';

export default class TeamPage extends Component {
  render() {
    return (
        <Fragment>
            <TopNavigation/>
            <TopPage pageHeader="Our Team" />
            <AllMember/>
            <Footer/>
        </Fragment>
    );
  }
}
