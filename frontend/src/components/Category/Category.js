import React, { Component, Fragment } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import cat1 from '../../asset/img/cat-1.jpg';
import cat2 from '../../asset/img/cat-2.jpg';
import cat3 from '../../asset/img/cat-3.jpg';
import cat4 from '../../asset/img/cat-4.jpg';
export default class Category extends Component {
    render() {
        return (
            <Fragment>
               <Container className="py-5 mt-3 category">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Categories</h6>
                <h1 className="mb-5">Courses Categories</h1>
            </div>
            <Row className="g-3">
                <Col lg={7} md={6}>
                    <Row className="g-3">
                        <Col lg={12} md={12} className="wow zoomIn" data-wow-delay="0.1s">
                            <a className="position-relative d-block overflow-hidden" href="#ff">
                                <img className="img-fluid" src={cat1} alt=""/>
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                                    <h5 className="m-0">Web Design</h5>
                                    <small className="text-primary">49 Courses</small>
                                </div>
                            </a>
                        </Col>
                        <Col lg={6} md={12} className="wow zoomIn" data-wow-delay="0.3s">
                            <a className="position-relative d-block overflow-hidden" href="#ff">
                                <img className="img-fluid" src={cat2} alt=""/>
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                                    <h5 className="m-0">Graphic Design</h5>
                                    <small className="text-primary">49 Courses</small>
                                </div>
                            </a>
                        </Col>
                        <Col lg={6} md={12} className="wow zoomIn" data-wow-delay="0.5s">
                            <a className="position-relative d-block overflow-hidden" href="#ff">
                                <img className="img-fluid" src={cat3} alt=""/>
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                                    <h5 className="m-0">Video Editing</h5>
                                    <small className="text-primary">49 Courses</small>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Col>
                <Col lg={5} md={6} className="wow zoomIn" data-wow-delay="0.7s" style={{minHeight: '350px'}}>
                    <a className="position-relative d-block h-100 overflow-hidden" href="#dd">
                        <img classNName="img-fluid position-absolute w-100 h-100" src={cat4} alt="" style={{objectFit: 'cover'}}/>
                        <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                            <h5 className="m-0">Online Marketing</h5>
                            <small className="text-primary">49 Courses</small>
                        </div>
                    </a>
                </Col>
            </Row>
        </Container>
            </Fragment>
        )
    }
}
