import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faYoutube, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { faPhone, faMapMarkerAlt, faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import course1 from '../../asset/img/course-1.jpg'
import course2 from '../../asset/img/course-2.jpg'
import course3 from '../../asset/img/course-3.jpg'

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                
    <Container fluid={true} className="bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <Container className="py-5">
            <Row className="g-5">
                <Col lg={3} md={5}>
                    <h4 className="text-white mb-3">Quick Link</h4>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Privacy Policy</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">FAQs & Help</a>
                </Col>
                <Col lg={3} md={5}>
                    <h4 className="text-white mb-3">Contact</h4>
                    <p className="mb-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-3"></FontAwesomeIcon>123 Street, New York, USA</p>
                    <p className="mb-2"><FontAwesomeIcon icon={faPhone} className="me-3"></FontAwesomeIcon>+012 345 67890</p>
                    <p className="mb-2"><FontAwesomeIcon icon={faEnvelope} className="me-3"></FontAwesomeIcon>info@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href=""><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                        <a className="btn btn-outline-light btn-social" href=""><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                        <a className="btn btn-outline-light btn-social" href=""><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
                        <a className="btn btn-outline-light btn-social" href=""><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a>
                    </div>
                </Col>
                <Col lg={3} md={5}>
                    <h4 className="text-white mb-3">Gallery</h4>
                    <Row className="row g-2 pt-2">
                        <Col lg={4} md={6} sm={12}>
                            <img className="img-fluid bg-light p-1" src={course1} alt=""/>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <img className="img-fluid bg-light p-1" src={course2} alt=""/>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <img className="img-fluid bg-light p-1" src={course3} alt=""/>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <img className="img-fluid bg-light p-1" src={course2} alt=""/>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <img className="img-fluid bg-light p-1" src={course3} alt=""/>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <img className="img-fluid bg-light p-1" src={course1} alt=""/>
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} md={5}>
                    <h4 className="text-white mb-3">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    
                </Col>
            </Row>
        </Container>

        <Container>
            
                <Row className="copyright">
                    <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="#">E Learning</a>, All Right Reserved.
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <div className="footer-menu">
                            <a href="">Home</a>
                            <a href="">Cookies</a>
                            <a href="">Help</a>
                            <a href="">FQAs</a>
                        </div>
                    </Col>
                </Row>
            
        </Container>
    </Container>

    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon></a>

            </Fragment>
        )
    }
}
