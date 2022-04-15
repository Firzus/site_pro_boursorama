//import React from 'react';
import React, { useState } from "react";
import { Form, Col, Row, Button } from 'react-bootstrap';

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
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-4">
          <Col className="s-2"></Col>
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Email"
            />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Mot de Passe"
            />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>
          <Col className="s-2"></Col>

        </Row>
        <Row className="mb-4">
          <Col className="s-5"></Col>
          <Form.Group as={Col} md="1" className="mb-3">
                <Form.Check
                label="Remember me."
                />
            </Form.Group>
          <Col className="s-5"></Col>
        </Row>
        <Row className="mb-4">
          <Col className="s-5"></Col>
            <Button as={Col} md="1" type="submit">Submit form</Button>
          <Col className="s-5"></Col>
        </Row>
      </Form>
    ); 
  }

export default FormB;