import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WOW from "wowjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faGlobe,
  faHome,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import 'animate.css';


export default class Service extends Component {
  // Defining WOW
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }
  render() {
    return (
      <Fragment>
        <Container className="py-5">
          <Row className="g-4">
            <Col className="wow fadeInUp" sm={6} lg={3} data-wow-delay="0.1s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <FontAwesomeIcon
                    size="3x"
                    icon={faGraduationCap}
                    className="text-primary mb-4"
                  />

                  <h5 className="mb-3">Skilled Instructors</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </Col>
            <Col className="wow fadeInUp" sm={6} lg={3} data-wow-delay="0.3s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <FontAwesomeIcon
                    size="3x"
                    icon={faGlobe}
                    className="text-primary mb-4"
                  />

                  <h5 className="mb-3">Online Classes</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </Col>
            <Col className="wow fadeInUp" sm={6} lg={3} data-wow-delay="0.5s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <FontAwesomeIcon
                    size="3x"
                    icon={faHome}
                    className="text-primary mb-4"
                  />

                  <h5 className="mb-3">Home Projects</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </Col>
            <Col className="wow fadeInUp" sm={6} lg={3} data-wow-delay="0.7s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <FontAwesomeIcon
                    size="3x"
                    icon={faBookOpen}
                    className="text-primary mb-4"
                  />

                  <h5 className="mb-3">Book Library</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
