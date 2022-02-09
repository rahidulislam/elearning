import React, { Component, Fragment } from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
export default class Error404 extends Component {
  render() {
    return (
      <Fragment>
        <Container className="py-5 wow fadeInUp" data-wow-delay="0.1s">
        <Container className="text-center">
            <Row className="justify-content-center">
                <Col lg={6}>
                    <FontAwesomeIcon icon={faExclamationTriangle} className="display-1 text-primary"></FontAwesomeIcon>
                    <h1 className="display-1">404</h1>
                    <h1 className="mb-4">Page Not Found</h1>
                    <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                    <a className="btn btn-primary rounded-pill py-3 px-5" href="">Go Back To Home</a>
                </Col>
            </Row>
        </Container>
    </Container>
      </Fragment>
    );
  }
}
