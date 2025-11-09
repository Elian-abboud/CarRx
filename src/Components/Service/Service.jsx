// src/components/Service/Service.jsx
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
  Spinner,
  Badge,
} from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Database from "../../data/Database"; // استيراد قاعدة البيانات
import "./Service.css";

const Service = () => {
  const [errorCode, setErrorCode] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // تحويل المصفوفة إلى كائن للبحث السريع
  const DatabaseDatabase = Database.reduce((acc, item) => {
    acc[item.code] = item;
    return acc;
  }, {});

  const handleSearch = (e) => {
    e.preventDefault();

    if (!errorCode.trim()) {
      setError("Please enter an error code");
      return;
    }

    setIsLoading(true);
    setError("");
    setSearchResults(null);

    // محاكاة استدعاء API
    setTimeout(() => {
      const code = errorCode.trim().toUpperCase();
      const result = DatabaseDatabase[code];

      if (result) {
        setSearchResults(result);
      } else {
        setError(`Error code "${code}" not found in our database`);
      }

      setIsLoading(false);
    }, 1000);
  };

  const getSeverityVariant = (code) => {
    // تحديد مستوى الخطورة بناءً على الكود
    if (code.startsWith("P00") && parseInt(code.substring(3)) < 100) {
      return "danger"; // High severity
    } else if (code.startsWith("P00") && parseInt(code.substring(3)) < 200) {
      return "warning"; // Medium severity
    } else {
      return "info"; // Low severity
    }
  };

  const getSeverityText = (code) => {
    if (code.startsWith("P00") && parseInt(code.substring(3)) < 100) {
      return "High Priority";
    } else if (code.startsWith("P00") && parseInt(code.substring(3)) < 200) {
      return "Medium Priority";
    } else {
      return "Low Priority";
    }
  };

  // الأكواد الشائعة للعرض السريع
  const commonCodes = ["P0001", "P0016", "P0030", "P0036", "P0050"];

  return (
    <>
      <Navbar />
      <div className="service-wrapper">
        <Container className="service-container">
          {/* Hero Section */}
          <Row className="service-hero">
            <Col lg={8} className="mx-auto text-center">
              <h1 className="service-title">Car Error Code Diagnostics</h1>
              <p className="service-subtitle">
                Enter your car's error code to get detailed analysis and repair
                solutions in both English and Arabic
              </p>
            </Col>
          </Row>

          {/* Search Section */}
          <Row className="justify-content-center">
            <Col lg={8} md={10}>
              <Card className="search-card">
                <Card.Body className="p-4">
                  <Form onSubmit={handleSearch}>
                    <Row className="align-items-end">
                      <Col md={8}>
                        <Form.Group className="mb-3">
                          <Form.Label className="search-label">
                            <strong>Enter Error Code</strong>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="e.g., P0001, P0016, P0030..."
                            value={errorCode}
                            onChange={(e) => setErrorCode(e.target.value)}
                            className="search-input"
                            disabled={isLoading}
                          />
                          <Form.Text className="text-muted">
                            Enter OBD2 codes like P0001, P0016, P0030, etc.
                          </Form.Text>
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Button
                          type="submit"
                          className="search-btn w-100"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                className="me-2"
                              />
                              Searching...
                            </>
                          ) : (
                            <>
                              <span className="btn-icon">🔍</span>
                              Search Code
                            </>
                          )}
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Error Message */}
          {error && (
            <Row className="justify-content-center mt-3">
              <Col lg={8} md={10}>
                <Alert variant="danger" className="text-center">
                  ⚠️ {error}
                </Alert>
              </Col>
            </Row>
          )}

          {/* Loading Spinner */}
          {isLoading && (
            <Row className="justify-content-center mt-5">
              <Col className="text-center">
                <Spinner
                  animation="border"
                  role="status"
                  variant="warning"
                  className="loading-spinner"
                >
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
                <p className="mt-3 text-light">
                  Searching in our database of {Database.length} error codes...
                </p>
              </Col>
            </Row>
          )}

          {/* Results Section */}
          {searchResults && !isLoading && (
            <Row className="justify-content-center mt-4">
              <Col lg={10}>
                <Card className="results-card">
                  <Card.Body className="p-4">
                    {/* Code Header */}
                    <div className="code-header-section">
                      <Row className="align-items-center">
                        <Col md={6}>
                          <h2 className="code-title">{searchResults.code}</h2>
                          <Badge
                            bg={getSeverityVariant(searchResults.code)}
                            className="severity-badge"
                          >
                            {getSeverityText(searchResults.code)}
                          </Badge>
                        </Col>
                        <Col md={6} className="text-md-end">
                          <div className="code-actions">
                            <Button
                              variant="outline-warning"
                              size="sm"
                              className="me-2"
                              onClick={() => window.print()}
                            >
                              📋 Print Report
                            </Button>
                            <Button
                              variant="outline-info"
                              size="sm"
                              onClick={() => {
                                setErrorCode("");
                                setSearchResults(null);
                              }}
                            >
                              🔄 New Search
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    {/* Error Description */}
                    <div className="description-section mt-4">
                      <Row>
                        <Col lg={6} className="mb-3">
                          <Card className="h-100 language-card">
                            <Card.Header className="language-header">
                              English
                            </Card.Header>
                            <Card.Body>
                              <h5>{searchResults.title.en}</h5>
                              <p className="mb-0">
                                {searchResults.description.en}
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col lg={6} className="mb-3">
                          <Card className="h-100 language-card">
                            <Card.Header className="language-header">
                              العربية
                            </Card.Header>
                            <Card.Body>
                              <h5>{searchResults.title.ar}</h5>
                              <p className="mb-0">
                                {searchResults.description.ar}
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </div>

                    {/* Possible Causes */}
                    <div className="causes-section mt-4">
                      <Card className="cause-card">
                        <Card.Header className="cause-header">
                          <span className="header-icon">🔍</span>
                          Possible Causes
                        </Card.Header>
                        <Card.Body>
                          <Row>
                            <Col lg={6} className="mb-3">
                              <h6 className="text-warning mb-3"> English</h6>
                              <ul className="causes-list">
                                {searchResults.possibleCauses.en.map(
                                  (cause, index) => (
                                    <li key={index}>{cause}</li>
                                  )
                                )}
                              </ul>
                            </Col>
                            <Col lg={6}>
                              <h6 className="text-warning mb-3">العربية</h6>
                              <ul className="causes-list">
                                {searchResults.possibleCauses.ar.map(
                                  (cause, index) => (
                                    <li key={index}>{cause}</li>
                                  )
                                )}
                              </ul>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </div>

                    {/* Recommended Solutions */}
                    <div className="solutions-section mt-4">
                      <Card className="solution-card">
                        <Card.Header className="solution-header">
                          <span className="header-icon">🔧</span>
                          Recommended Solutions
                        </Card.Header>
                        <Card.Body>
                          <Row>
                            <Col lg={6} className="mb-3">
                              <h6 className="text-success mb-3">English</h6>
                              <ol className="solutions-list">
                                {searchResults.recommendedSolutions.en.map(
                                  (solution, index) => (
                                    <li key={index}>{solution}</li>
                                  )
                                )}
                              </ol>
                            </Col>
                            <Col lg={6}>
                              <h6 className="text-success mb-3"> العربية</h6>
                              <ol className="solutions-list">
                                {searchResults.recommendedSolutions.ar.map(
                                  (solution, index) => (
                                    <li key={index}>{solution}</li>
                                  )
                                )}
                              </ol>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </div>

                    {/* Additional Info */}
                    <div className="additional-info mt-4">
                      <Row>
                        <Col>
                          <Card className="info-card">
                            <Card.Body className="text-center">
                              <h6>💡 Professional Advice</h6>
                              <p className="mb-0 small">
                                For complex diagnostic codes like{" "}
                                {searchResults.code}, we recommend consulting
                                with a certified automotive technician. Some
                                repairs may require specialized diagnostic tools
                                and technical expertise.
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}

          {/* Quick Codes Section */}
          {!searchResults && !isLoading && (
            <Row className="justify-content-center mt-5">
              <Col lg={10}>
                <Card className="quick-codes-card">
                  <Card.Body className="text-center">
                    <h5>🚗 Common Error Codes</h5>
                    <p className="text-light mb-3">
                      Quick access to frequently searched error codes from our
                      database of {Database.length} codes
                    </p>
                    <Row className="mt-3">
                      {commonCodes.map((code, index) => (
                        <Col key={index} xs={6} md={4} lg={2} className="mb-2">
                          <Button
                            variant="outline-light"
                            size="sm"
                            className="quick-code-btn"
                            onClick={() => setErrorCode(code)}
                          >
                            {code}
                          </Button>
                        </Col>
                      ))}
                    </Row>
                    <div className="mt-3">
                      <small className="text-muted">
                        💡 Tip: Codes starting with P0xxx are generic OBD2 codes
                      </small>
                    </div>
                  </Card.Body>
                </Card>

                {/* Database Info */}
                <Card className="database-info-card mt-4">
                  <Card.Body className="text-center">
                    <Row>
                      <Col md={4}>
                        <div className="database-stat">
                          <h4>{Database.length}+</h4>
                          <p>Error Codes</p>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="database-stat">
                          <h4>100%</h4>
                          <p>Bilingual Support</p>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="database-stat">
                          <h4>24/7</h4>
                          <p>Available</p>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </>
  );
};

export default Service;
