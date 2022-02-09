import React, { Component, Fragment } from "react";
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/custom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav } from "react-bootstrap";
import { Link,NavLink } from "react-router-dom";

export default class TopNavigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar
          sticky="top"
          expand="lg"
          bg="light"
          className="bg-white shadow p-0"
        >
          <a
            href="index.html"
            className="navbar-brand d-flex align-items-center px-4 px-lg-5"
          >
            <h2 className="m-0 text-primary">
              <FontAwesomeIcon
                icon={faBook}
                className="fa fa-book me-3"
              ></FontAwesomeIcon>
              eLEARNING
            </h2>
          </a>
          <Navbar.Toggle
            aria-controls="navbarCollapse"
            className="me-4 btn btn-primary"
          />

          <Navbar.Collapse
            className="collapse navbar-collapse"
            id="navbarCollapse"
          >
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <Nav.Link>
                <NavLink end to="/" style={({isActive})=>({color:isActive ? '#06BBCC':'#181d38'})}>
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink end to="/about" style={({isActive})=>({color:isActive ? '#06BBCC':'#181d38'})}>About</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink end to="/courses" style={({isActive})=>({color:isActive ? '#06BBCC':'#181d38'})}>Courses</NavLink>
              </Nav.Link>
              <div className="nav-item dropdown">
                <a
                  href="courses.html"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu fade-down m-0">
                  <Link end to="/team" className="dropdown-item">
                    Our Team
                  </Link>
                  
                  <Link end to="/testimonial" className="dropdown-item">
                    Testimonial
                  </Link>
                  <Link end to="/404" className="dropdown-item">
                    404 Page
                  </Link>
                </div>
              </div>
              <Nav.Link>
                <NavLink end to="/contact" style={({isActive})=>({color:isActive ? '#06BBCC':'#181d38'})}>Contact</NavLink>
              </Nav.Link>
            </div>
            <Nav.Link
              href="courses.html"
              className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
            >
              Join Now
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ms-3"
              ></FontAwesomeIcon>
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
