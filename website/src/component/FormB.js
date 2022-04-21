//import React from 'react';
import React, { useState } from "react";
import { Form, Col, Row, Button, Container } from 'react-bootstrap';

function FormB() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Container className="d-flex justify-content-center pb-3">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

          <Row>

            <Col>
              <Form.Group controlId="validationCustom01">
                <Form.Label>Adresse mail</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Adresse mail"
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="validationCustom02">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Mot de Passe"
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Col>

          </Row>

          <Row className="pt-2 pb-2">
            <Col className="d-flex justify-content-center">
              <Form.Group>
                <Form.Check
                  label="Se souvenir de moi."
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="pt-2 pb-2">
            <Col className="d-flex justify-content-center">
              <Button
                variant="outline-dark"
                type="submit"
                className="fw-bold fs-2 text-center text-uppercase font-face-hnl text-dark color-button">
                connexion
              </Button>
            </Col>
          </Row>

        </Form>
      </Container>
    </>
  );
}

export default FormB;