import React, { Component,Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import course1 from '../../asset/img/course-1.jpg'
import course2 from '../../asset/img/course-2.jpg'
import course3 from '../../asset/img/course-3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar,faUser,faClock, faUserTie} from '@fortawesome/free-solid-svg-icons'
export default class Course extends Component {
    render() {
        return (
            <Fragment>
               <Container className="py-5 mt-3">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                <h1 className="mb-5">Popular Courses</h1>
            </div>
            <Row className="g-4 justify-content-center">
                <Col lg={4} md={6} sm={12} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="course-item bg-light">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src={course1} alt="" />
                            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                <a href="#dd" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{borderRadius: '30px 0 0 30px'}}>Read More</a>
                                <a href="#dd" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{borderRadius: '0 30px 30px 0'}}>Join Now</a>
                            </div>
                        </div>
                        <div className="text-center p-4 pb-0">
                            <h3 className="mb-0">$149.00</h3>
                            <div className="mb-3">
                                <small><FontAwesomeIcon className='text-primary' icon={faStar} /></small>
                                <small><FontAwesomeIcon className='text-primary' icon={faStar} /></small>
                                <small><FontAwesomeIcon className='text-primary' icon={faStar} /></small>
                                <small><FontAwesomeIcon className='text-primary' icon={faStar} /></small>
                                <small><FontAwesomeIcon className='text-primary' icon={faStar} /></small>
                                
                                <small>(123)</small>
                            </div>
                            <h5 className="mb-4">Web Design & Development Course for Beginners</h5>
                        </div>
                        <div className="d-flex border-top">
                            <small className="flex-fill text-center border-end py-2"><FontAwesomeIcon icon={faUserTie} className="fa fa-user-tie text-primary me-2"></FontAwesomeIcon>John Doe</small>
                            <small className="flex-fill text-center border-end py-2"><iFontAwesomeIcon icon={faClock}className="fa fa-clock text-primary me-2"></iFontAwesomeIcon>1.49 Hrs</small>
                            <small className="flex-fill text-center py-2"><FontAwesomeIcon icon={faUser} className="fa fa-user text-primary me-2"></FontAwesomeIcon>30 Students</small>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} className="wow fadeInUp" data-wow-delay="0.3s">
                    <div className="course-item bg-light">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src={course2} alt="" />
                            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                <a href="#dd" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{borderRadius: '30px 0 0 30px'}}>Read More</a>
                                <a href="#dd" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{borderRadius: '0 30px 30px 0'}}>Join Now</a>
                            </div>
                        </div>
                        <div className="text-center p-4 pb-0">
                            <h3 className="mb-0">$149.00</h3>
                            <div className="mb-3">
                            <small><FontAwesomeIcon className='text-primary' icon={faStar} /></small>
                                <small><FontAwesomeIcon className='text-primary' icon={faStar} /></small>
                                <small><FontAwesomeIcon className='text-primary' icon={faStar} /></small>
                                <small><FontAwesomeIcon className='text-primary' icon={faStar} /></small>
                                <small><FontAwesomeIcon className='text-primary' icon={faStar} /></small>
                                <small>(123)</small>
                            </div>
                            <h5 className="mb-4">Web Design & Development Course for Beginners</h5>
                        </div>
                        <div className="d-flex border-top">
                            <small className="flex-fill text-center border-end py-2"><FontAwesomeIcon icon={faUser} className="text-primary me-2"></FontAwesomeIcon>John Doe</small>
                            <small className="flex-fill text-center border-end py-2"><FontAwesomeIcon icon={faClock} className="ftext-primary me-2"></FontAwesomeIcon>1.49 Hrs</small>
                            <small className="flex-fill text-center py-2"><FontAwesomeIcon icon={faUser} className="text-primary me-2"></FontAwesomeIcon>30 Students</small>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} className="wow fadeInUp" data-wow-delay="0.5s">
                    <div className="course-item bg-light">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src={course3} alt="" />
                            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                <a href="#dd" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{borderRadius: '30px 0 0 30px'}}>Read More</a>
                                <a href="#dd" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{borderRadius: '0 30px 30px 0'}}>Join Now</a>
                            </div>
                        </div>
                        <div className="text-center p-4 pb-0">
                            <h3 className="mb-0">$149.00</h3>
                            <div className="mb-3">
                            <small><FontAwesomeIcon className='text-primary' icon={faStar} /></small>
                                <small><FontAwesomeIcon className='text-primary' icon={faStar} /></small>
                                <small><FontAwesomeIcon className='text-primary' icon={faStar} /></small>
                                <small><FontAwesomeIcon className='text-primary' icon={faStar} /></small>
                                <small><FontAwesomeIcon className='text-primary' icon={faStar} /></small>
                                <small>(123)</small>
                            </div>
                            <h5 className="mb-4">Web Design & Development Course for Beginners</h5>
                        </div>
                        <div className="d-flex border-top">
                            <small className="flex-fill text-center border-end py-2"><FontAwesomeIcon icon={faUser} className="text-primary me-2"></FontAwesomeIcon>John Doe</small>
                            <small className="flex-fill text-center border-end py-2"><FontAwesomeIcon icon={faClock} className="text-primary me-2"></FontAwesomeIcon>1.49 Hrs</small>
                            <small className="flex-fill text-center py-2"><FontAwesomeIcon icon={faUserTie} className="text-primary me-2"></FontAwesomeIcon>30 Students</small>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container> 
            </Fragment>
        )
    }
}
