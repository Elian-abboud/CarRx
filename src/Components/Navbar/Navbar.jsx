// src/components/Navbar/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar as BSNavbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";
import logo from "../../../public/logo2.png";

const Navbar = () => {
  return (
    <BSNavbar
      expand="lg"
      className="custom-navbar fixed-navbar"
      fixed="top"
      variant="light"
    >
      <Container>
        <BSNavbar.Brand as={Link} to="/" className="brand-logo">
          <img src={logo} alt="CarRx Logo" className="logo-image" />
        </BSNavbar.Brand>

        <BSNavbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler-custom"
        />

        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="nav-link-item">
              <span className="nav-icon">🏠</span>
              <span className="nav-text">Home</span>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/service" className="nav-link-item">
              <span className="nav-icon">🔧</span>
              <span className="nav-text">Services</span>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/help" className="nav-link-item">
              <span className="nav-icon">🚗</span>
              <span className="nav-text">Help</span>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link-item">
              <span className="nav-icon">📞</span>
              <span className="nav-text">Contact</span>
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
