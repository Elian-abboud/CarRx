// src/components/Help/Help.jsx
import React from "react";
import { Container, Row, Col, Card, Accordion, Badge } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import "./Help.css";

const Help = () => {
  // الأسئلة الشائعة
  const faqItems = [
    {
      question: "How do I find my car's error code?",
      answer:
        "You can retrieve error codes using an OBD2 scanner connected to your vehicle's diagnostic port, usually located under the dashboard near the steering wheel. Most auto parts stores offer free code reading services.",
    },
    {
      question: "What does the 'P' in error codes mean?",
      answer:
        "The 'P' stands for Powertrain, which includes engine, transmission, and related components. Other codes include: B for Body, C for Chassis, and U for Network communication.",
    },
    {
      question: "Are your solutions applicable to all car models?",
      answer:
        "Our solutions are general guidelines that apply to most vehicles. However, always consult your vehicle's service manual or a professional mechanic for model-specific repairs and procedures.",
    },
    {
      question: "How accurate is your database?",
      answer:
        "Our database is regularly updated with information from automotive manufacturers, technical service bulletins, and professional technicians. We maintain a 98% accuracy rate across all error codes.",
    },
    {
      question: "Can I clear error codes using your service?",
      answer:
        "No, our service provides diagnostic information only. You'll need an OBD2 scanner to clear codes after completing repairs. Never clear codes without fixing the underlying issue.",
    },
    {
      question: "Do you support all OBD2 protocols?",
      answer:
        "Yes, we support all standard OBD2 protocols including CAN, ISO, KWP, and J1850 protocols used by various vehicle manufacturers worldwide.",
    },
  ];

  // خطوات الاستخدام
  const usageSteps = [
    {
      step: 1,
      icon: "🔍",
      title: "Get Your Error Code",
      description:
        "Use an OBD2 scanner to read the error code from your vehicle's computer system.",
    },
    {
      step: 2,
      icon: "⌨️",
      title: "Enter the Code",
      description:
        "Type the code (e.g., P0300) into our search tool on the Service page.",
    },
    {
      step: 3,
      icon: "📊",
      title: "Review Analysis",
      description:
        "Get detailed information about the error, possible causes, and recommended solutions.",
    },
    {
      step: 4,
      icon: "🔧",
      title: "Perform Repairs",
      description:
        "Follow our step-by-step solutions or consult a professional mechanic.",
    },
  ];

  // نصائح سريعة
  const quickTips = [
    {
      icon: "⏰",
      title: "Act Quickly",
      description: "Address error codes promptly to prevent further damage",
    },
    {
      icon: "📖",
      title: "Read Carefully",
      description: "Review all possible causes before starting repairs",
    },
    {
      icon: "🛠️",
      title: "Use Proper Tools",
      description: "Always use recommended tools and safety equipment",
    },
    {
      icon: "👨‍🔧",
      title: "Consult Professionals",
      description: "Seek professional help for complex electrical issues",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="help-wrapper">
        <Container className="help-container">
          {/* Hero Section */}
          <Row className="help-hero">
            <Col lg={8} className="mx-auto text-center">
              <Badge bg="warning" className="help-badge">
                Help & Support
              </Badge>
              <h1 className="help-title">How Can We Help You?</h1>
              <p className="help-subtitle">
                Find answers to common questions, learn how to use our service
                effectively, and get expert support for all your car diagnostic
                needs.
              </p>
            </Col>
          </Row>

          {/* Quick Tips Section */}
          <Row className="justify-content-center mt-5">
            <Col lg={10}>
              <h2 className="section-title-quick-tips text-center mb-4">
                <span className="section-icon">💡</span>
                Quick Tips for Success
              </h2>
              <Row>
                {quickTips.map((tip, index) => (
                  <Col key={index} lg={3} md={6} className="mb-4">
                    <Card className="tip-card text-center h-100">
                      <Card.Body>
                        <div className="tip-icon">{tip.icon}</div>
                        <Card.Title className="tip-title">
                          {tip.title}
                        </Card.Title>
                        <Card.Text className="tip-description">
                          {tip.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          {/* How to Use Section */}
          <Row className="justify-content-center mt-5">
            <Col lg={10}>
              <Card className="usage-card">
                <Card.Body className="p-4">
                  <h2 className="section-title text-center mb-4">
                    <span className="section-icon">🚀</span>
                    How to Use Our Service
                  </h2>
                  <Row>
                    {usageSteps.map((step, index) => (
                      <Col key={index} lg={6} className="mb-4">
                        <Card className="step-card h-100">
                          <Card.Body className="d-flex align-items-start">
                            <div className="step-number">{step.step}</div>
                            <div className="step-content">
                              <div className="step-icon">{step.icon}</div>
                              <Card.Title className="step-title">
                                {step.title}
                              </Card.Title>
                              <Card.Text className="step-description">
                                {step.description}
                              </Card.Text>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* FAQ Section */}
          <Row className="justify-content-center mt-5">
            <Col lg={10}>
              <Card className="faq-card">
                <Card.Body className="p-4">
                  <h2 className="section-title text-center mb-4">
                    <span className="section-icon">❓</span>
                    Frequently Asked Questions
                  </h2>
                  <Accordion flush>
                    {faqItems.map((faq, index) => (
                      <Accordion.Item
                        key={index}
                        eventKey={index.toString()}
                        className="faq-item"
                      >
                        <Accordion.Header>
                          <strong>{faq.question}</strong>
                        </Accordion.Header>
                        <Accordion.Body>{faq.answer}</Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Help;
