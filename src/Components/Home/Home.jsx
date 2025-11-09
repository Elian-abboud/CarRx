// src/components/Home/Home.jsx
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState([
    { number: 0, target: 2000, label: "Error Codes", suffix: "+" },
    { number: 0, target: 50, label: "Car Brands", suffix: "+" },
    { number: 0, target: 98, label: "Accuracy Rate", suffix: "%" },
    { number: 0, target: 24, label: "Support", suffix: "/7" },
  ]);

  // Count-up animation
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) =>
        prevStats.map((stat) => {
          const increment = stat.target / 40;
          if (stat.number < stat.target) {
            return {
              ...stat,
              number:
                stat.number + increment > stat.target
                  ? stat.target
                  : stat.number + increment,
            };
          }
          return stat;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "🔧",
      title: "Advanced Error Code Analysis",
      description:
        "Comprehensive database of all car error codes with detailed technical explanations and possible causes.",
    },
    {
      icon: "🌐",
      title: "Bilingual Technical Support",
      description:
        "Full technical documentation available in both English and Arabic with professional translation of complex automotive terms.",
    },
    {
      icon: "📊",
      title: "Real-time Diagnostics",
      description:
        "Live diagnostic reports with severity levels, repair urgency indicators, and estimated repair costs.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Enter Your Error Code",
      description:
        "Input your car's OBD2 error code (e.g., P0300, P0420) or select your car model for advanced lookup.",
      details:
        "Supports all standard OBD2 codes and manufacturer-specific codes",
    },
    {
      number: "02",
      title: "Get Comprehensive Analysis",
      description:
        "Receive detailed technical analysis including symptoms, possible causes, and affected systems.",
      details:
        "Includes engine, transmission, emissions, and electrical systems",
    },
    {
      number: "03",
      title: "View Repair Solutions",
      description:
        "Access step-by-step repair guides with difficulty levels, required tools, and safety precautions.",
      details: "Professional mechanics approved solutions",
    },
    {
      number: "04",
      title: "Complete Your Repair",
      description:
        "Follow our detailed instructions to fix the issue and clear error codes from your vehicle's ECU.",
      details: "Includes code clearing procedures and verification steps",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="home-wrapper">
        {/* Hero Section */}
        <Container className="hero-container">
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content">
              <Badge bg="warning" className="hero-badge">
                Automotive Diagnostics
              </Badge>
              <h1 className="hero-title">
                Advanced Car Error
                <span className="highlight"> Code Diagnostics</span>
              </h1>
              <p className="hero-description">
                Our comprehensive platform provides detailed technical analysis
                of your vehicle's error codes. Get professional-grade
                diagnostics.
              </p>

              {/* ✅ Animated Stats Section */}
              <div className="hero-stats">
                <Row>
                  {stats.map((stat, index) => (
                    <Col key={index} xs={6} sm={3} className="stat-item">
                      <div className="stat-number">
                        {Math.floor(stat.number)}
                        {stat.suffix}
                      </div>
                      <div className="stat-label">{stat.label}</div>
                    </Col>
                  ))}
                </Row>
              </div>

              <div className="hero-actions">
                <Button
                  className="cta-button-primary"
                  onClick={() => navigate("/service")}
                >
                  <span className="btn-icon">🚀</span>
                  Start Diagnosis Now
                </Button>
              </div>
            </Col>

            <Col lg={6} className="hero-visual">
              <div className="visual-card">
                <div className="card-header">
                  <div className="card-icon">💻</div>
                  <h4>Live Diagnostic Preview</h4>
                </div>
                <div className="card-content">
                  <div className="code-example">
                    <div className="code-header">
                      <span>Error Code: P0300</span>
                      <Badge bg="danger">Critical</Badge>
                    </div>
                    <div className="code-details">
                      <p>
                        <strong>
                          Random/Multiple Cylinder Misfire Detected
                        </strong>
                      </p>
                      <ul>
                        <li>• Ignition system failure</li>
                        <li>• Fuel delivery issues</li>
                        <li>• Compression problems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Features Section */}
        <Container className="features-container">
          <Row className="justify-content-center">
            <Col lg={8} className="text-center section-header">
              <h2 className="section-title">
                Comprehensive Diagnostic Features
              </h2>
              <p className="section-subtitle">
                Professional-grade tools for accurate vehicle diagnostics and
                repair solutions
              </p>
            </Col>
          </Row>

          <Row className="features-grid">
            {features.map((feature, index) => (
              <Col key={index} lg={4} md={6} className="feature-card-col">
                <Card className="feature-card">
                  <Card.Body>
                    <div className="feature-icon-wrapper">
                      <div className="feature-icon">{feature.icon}</div>
                    </div>
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        {/* How It Works Section */}
        <Container className="process-container">
          <Row className="justify-content-center">
            <Col lg={8} className="text-center section-header">
              <h2 className="section-title">
                How Our Diagnostic Process Works
              </h2>
              <p className="section-subtitle">
                Four simple steps to diagnose and solve your car problems
              </p>
            </Col>
          </Row>

          <Row className="process-steps">
            {steps.map((step, index) => (
              <Col key={index} lg={3} md={6} className="process-step-col">
                <Card className="process-step-card">
                  <Card.Body>
                    <div className="step-number">{step.number}</div>
                    <Card.Title>{step.title}</Card.Title>
                    <Card.Text>{step.description}</Card.Text>
                    <div className="step-details">
                      <small>{step.details}</small>
                    </div>
                    <div className="step-arrow">
                      {index < steps.length - 1 && <span>→</span>}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        {/* CTA Section */}
        <Container className="cta-container">
          <Card className="cta-card">
            <Card.Body className="text-center">
              <h2>Ready to Diagnose Your Car?</h2>
              <p>
                Join thousands of car owners and mechanics who trust our
                platform for accurate error code analysis and repair solutions.
              </p>
              <Button
                className="cta-button-large"
                onClick={() => navigate("/service")}
              >
                <span className="btn-icon">🔧</span>
                Start Your Diagnostic Now
              </Button>
              <div className="cta-guarantee">
                <Badge bg="success">✓ 100% Accurate Database</Badge>
                <Badge bg="info">✓ Professional Support</Badge>
                <Badge bg="warning">✓ Free Basic Analysis</Badge>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Home;
