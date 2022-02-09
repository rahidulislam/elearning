import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutImg from "../../asset/img/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default class AboutUs extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="g-5">
            <Col
              lg={6}
              className="wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src={aboutImg}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Col>
            <Col lg={6} className="wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                About Us
              </h6>
              <h1 className="mb-4">Welcome to eLEARNING</h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <Row className="gy-2 gx-4 mb-4">
                <Col sm={6}>
                  <p class="mb-0">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-primary me-2"
                    />
                    Skilled Instructors
                  </p>
                </Col>
                <Col sm={6}>
                  <p className="mb-0">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-primary me-2"
                    />
                    Online Classes
                  </p>
                </Col>
                <Col sm={6}>
                  <p className="mb-0">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-primary me-2"
                    />
                    International Certificate
                  </p>
                </Col>
                <Col sm={6}>
                  <p className="mb-0">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-primary me-2"
                    />
                    Skilled Instructors
                  </p>
                </Col>
                <Col sm={6}>
                  <p className="mb-0">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-primary me-2"
                    />
                    Online Classes
                  </p>
                </Col>
                <Col sm={6}>
                  <p className="mb-0">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-primary me-2"
                    />
                    International Certificate
                  </p>
                </Col>
              </Row>
              <a className="btn btn-primary py-3 px-5 mt-2" href="#dd">
                Read More
              </a>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
