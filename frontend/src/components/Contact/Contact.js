import React, { Component, Fragment } from "react";
import { Container, Row, Col,Form,FloatingLabel,Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt,faPhoneAlt,faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Container className="py-5">
          <Container>
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Contact Us
              </h6>
              <h1 className="mb-5">Contact For Any Query</h1>
            </div>
            <Row className="row g-4">
              <Col lg={4} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
                <h5>Get In Touch</h5>
                <p className="mb-4">
                  The contact form is currently inactive. Get a functional and
                  working contact form with Ajax & PHP in a few minutes. Just
                  copy and paste the files, add a little code and you're done.{" "}
                  <a href="https://htmlcodex.com/contact-form">Download Now</a>.
                </p>
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                    style={{width: '50px', height: '50px'}}
                  >
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white"></FontAwesomeIcon>
                  </div>
                  <div className="ms-3">
                    <h5 className="text-primary">Office</h5>
                    <p className="mb-0">123 Street, New York, USA</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                    style={{width: '50px', height: '50px'}}
                  >
                    <FontAwesomeIcon icon={faPhoneAlt} className="text-white"></FontAwesomeIcon>
                  </div>
                  <div className="ms-3">
                    <h5 className="text-primary">Mobile</h5>
                    <p className="mb-0">+012 345 67890</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                    style={{width: '50px', height: '50px'}}
                  >
                    <FontAwesomeIcon icon={faEnvelopeOpen} className="text-white"></FontAwesomeIcon>
                  </div>
                  <div className="ms-3">
                    <h5 className="text-primary">Email</h5>
                    <p className="mb-0">info@example.com</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} className="wow fadeInUp" data-wow-delay="0.3s">
                <iframe
                  title="Contact"
                  className="position-relative rounded w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                  frameborder="0"
                  style={{minHeight: '300px', border:'0'}}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </Col>
              <Col
                lg={4}
                md={12}
                className="wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <Form>
                  <Row className="g-3">
                    <Col md={6}>
                        <FloatingLabel label="Your Name">
                            <Form.Control type="text" placeholder="Your Name" />
                        </FloatingLabel>
                      
                    </Col>
                    <Col md={6}>
                        <FloatingLabel label="Your Email">
                            <Form.Control type="email" placeholder="Your Email" />
                        </FloatingLabel>
                      
                    </Col>
                    <Col md={12}>
                    <FloatingLabel label="Subject">
                            <Form.Control type="email" placeholder="Subject" />
                        </FloatingLabel>

                      
                    </Col>
                    <Col lg={12} md={12}>
                    <FloatingLabel label="Message">
                            <Form.Control as="textarea" style={{height: '150px'}} placeholder="Leave a message here" />
                        </FloatingLabel>
                      
                    </Col>
                    <Col lg={12} md={12}>
                      <Button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </Container>
      </Fragment>
    );
  }
}
