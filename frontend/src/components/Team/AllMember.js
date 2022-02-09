import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import team1 from "../../asset/img/team-1.jpg";
import team2 from "../../asset/img/team-2.jpg";
import team3 from "../../asset/img/team-3.jpg";
import team4 from "../../asset/img/team-4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";


export default class AllMember extends Component {
  render() {
    return (
      <Fragment>
        <Container className="py-5">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Instructors
            </h6>
            <h1 className="mb-5">Expert Instructors</h1>
          </div>
          <Row className="g-4">
            <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={team1} alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={team2} alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={team3} alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={team4} alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={team4} alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={team4} alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={team4} alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={team4} alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </Col>
            
          </Row>
        </Container>
      </Fragment>
    );
  }
}
