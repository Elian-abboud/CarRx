// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar as BSNavbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BSNavbar
      expand="lg"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
      sticky="top"
      variant="light"
    >
      <Container>
        <BSNavbar.Brand as={Link} to="/" className="brand-logo">
          <img src="/logo2.png" alt="CarRx Logo" className="logo-image" />
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
