import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import testimonial1 from "../../asset/img/testimonial-1.jpg";
import testimonial2 from "../../asset/img/testimonial-2.jpg";
import testimonial3 from "../../asset/img/testimonial-3.jpg";
import testimonial4 from "../../asset/img/testimonial-4.jpg";
export default class Testimonial extends Component {
  render() {
    var settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <Container className="py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Testimonial
            </h6>
            <h1 className="mb-5">Our Students Say!</h1>
          </div>
          <Slider
            {...settings}
            className="testimonial-carousel position-relative"
          >
            <div className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src={testimonial1}
                style={{ width: "80px", height: "80px" }}
                alt=""
              />
              <h5 className="mb-0">Client Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src={testimonial2}
                style={{ width: "80px", height: "80px" }}
                alt=""
              />
              <h5 className="mb-0">Client Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src={testimonial3}
                style={{ width: "80px", height: "80px" }}
                alt=""
              />
              <h5 className="mb-0">Client Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src={testimonial4}
                style={{ width: "80px", height: "80px" }}
                alt=""
              />
              <h5 className="mb-0">Client Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </div>
          </Slider>
        </Container>
      </Fragment>
    );
  }
}
