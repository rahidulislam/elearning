import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class TopPage extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="py-5 bg-primary mb-5 page-header">
          <Container className="py-5">
            <Row className="justify-content-center">
              <Col lg={10} className="text-center">
                <h1 className="display-3 text-white animated slideInDown">
                  {this.props.pageHeader}
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a className="text-white" href="#dd">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a className="text-white" href="#dd">
                        Pages
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item text-white active"
                      aria-current="page"
                    >
                      {this.props.pageHeader}
                    </li>
                  </ol>
                </nav>
              </Col>
            </Row>
          </Container>
        </Container>
      </Fragment>
    );
  }
}
