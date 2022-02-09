import React, { Component,Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from '../../asset/img/carousel-1.jpg';
import image2 from '../../asset/img/carousel-2.jpg';


export default class TopCarousel extends Component {
    render() {
        var settings = {
            autoplay:true,
            autoplaySpeed:3000,
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <Fragment>
                <Container fluid={true} className='p-0 mb-5'>
                    <Slider {...settings}>
                        <div className='position-relative'>
                            <img className='img-fluid' src={image2} alt="" />
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(24, 29, 56, .7)'}}>
                                <Container>
                                    <Row class="justify-content-start">
                                        <Col sm={10} lg={8}>
                                            <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                                            <h1 className="display-3 text-white animated slideInDown">The Best Online Learning Platform</h1>
                                            <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                                            <a href="#ddd" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                            <a href="#ddd" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className='position-relative'>
                            <img className='img-fluid' src={image1} alt="" />
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(24, 29, 56, .7)'}}>
                                <Container>
                                    <Row class="justify-content-start">
                                        <Col sm={10} lg={8}>
                                            <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                                            <h1 className="display-3 text-white animated slideInDown">Get Educated Online From Your Home</h1>
                                            <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                                            <a href="#ddd" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                            <a href="#ddd" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </Slider>
                    
                </Container>
            </Fragment>
        )
    }
}
