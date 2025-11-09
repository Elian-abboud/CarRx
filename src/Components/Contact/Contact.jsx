// src/components/Contact/Contact.jsx
import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";

const Contact = () => {
  // طرق الاتصال الرئيسية
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Support",
      detail: "elianabboud5@gmail.com",
      description:
        "For technical inquiries, database questions, and general support. We respond within 2-4 hours during business days.",
    },
  ];

  // وسائل التواصل الاجتماعي
  const socialMedia = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/elian-abboud/",
      description: "Connect with me professionally",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      name: "GitHub",
      url: "https://github.com/Elian-abboud",
      description: "Check out my projects and contributions",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.947v1.053h-1v-.998c-1.035-.018-2.106-.265-3-.727l.455-1.644c.956.371 2.229.765 3.225.54 1.149-.26 1.384-1.442.114-2.011-.931-.434-3.778-.805-3.778-3.243 0-1.363 1.039-2.583 2.984-2.85v-1.067h1v1.018c.438.015 1.122.132 2.145.48l-.362 1.647c-.768-.27-1.617-.515-2.443-.465-1.489.087-1.62 1.376-.581 1.916 1.712.805 3.944 1.402 3.944 3.547.002 1.699-1.063 2.675-3 2.924z" />
        </svg>
      ),
      name: "Portfolio",
      url: "https://elian-abboud.github.io/new_portfolio/",
      description: "Visit my personal website and portfolio",
    },
  ];

  // الأسئلة المتوقعة
  const commonQuestions = [
    {
      question: "How long does it take to get a response?",
      answer: "We typically respond within 2-4 hours during business hours.",
    },
    {
      question: "Do you provide technical support for mechanics?",
      answer:
        "No, our service is designed for individual car owners and DIY enthusiasts. Professional mechanics should use specialized diagnostic tools.",
    },
    {
      question: "Can I suggest new error codes for your database?",
      answer:
        "Absolutely! We welcome suggestions to improve our database coverage.",
    },
    {
      question: "Do you offer API access for developers?",
      answer:
        "No, we currently do not provide API access. Our service is available exclusively through our web platform and mobile app.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="contact-wrapper">
        <Container className="contact-container">
          {/* Hero Section */}
          <Row className="contact-hero">
            <Col lg={8} className="mx-auto text-center">
              <Badge bg="warning" className="contact-badge">
                Get In Touch
              </Badge>
              <h1 className="contact-title">Contact Us</h1>
              <p className="contact-subtitle">
                Have questions about error codes or need technical support? Our
                team is here to help you get back on the road quickly and
                safely.
              </p>
            </Col>
          </Row>

          {/* Contact Methods */}
          <Row className="justify-content-center mt-5">
            <Col lg={10}>
              <Card className="contact-methods-card">
                <Card.Body className="p-4">
                  <h2 className="methods-title text-center mb-5">
                    <span className="methods-icon">📞</span>
                    How to Reach Us
                  </h2>

                  <Row>
                    {contactMethods.map((method, index) => (
                      <Col key={index} lg={6} className="mb-4">
                        <div className="method-item">
                          <div className="method-icon">{method.icon}</div>
                          <div className="method-content">
                            <h5>{method.title}</h5>
                            <p className="method-detail">{method.detail}</p>
                            <p className="method-description">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>

                  {/* Social Media Links */}
                  <div className="social-section mt-5">
                    <h3 className="social-title text-center mb-4">
                      <span className="social-icon">🌐</span>
                      Connect With Me
                    </h3>
                    <Row className="justify-content-center">
                      {socialMedia.map((social, index) => (
                        <Col key={index} lg={4} md={6} className="mb-3">
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                          >
                            <div className="social-item">
                              <div className="social-icon-wrapper">
                                {social.icon}
                              </div>
                              <div className="social-content">
                                <h5>{social.name}</h5>
                                <p className="social-description">
                                  {social.description}
                                </p>
                              </div>
                            </div>
                          </a>
                        </Col>
                      ))}
                    </Row>
                  </div>

                  {/* Response Time Info */}
                  <div className="response-info text-center mt-4">
                    <Badge bg="success" className="response-badge">
                      ⏰ Average Response Time: Within 2-4 Hours
                    </Badge>
                    <p className="mt-2 mb-0 text-muted">
                      We prioritize all technical inquiries and aim to respond
                      as quickly as possible
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Common Questions - Full Width */}
          <Row className="justify-content-center mt-5">
            <Col lg={10}>
              <Card className="questions-card">
                <Card.Body className="p-4">
                  <h2 className="questions-title text-center mb-4">
                    <span className="questions-icon">❓</span>
                    Frequently Asked Questions
                  </h2>
                  <Row>
                    {commonQuestions.map((item, index) => (
                      <Col key={index} lg={6} className="mb-4">
                        <div className="question-item">
                          <h5>{item.question}</h5>
                          <p>{item.answer}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
