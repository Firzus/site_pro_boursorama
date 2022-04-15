//import React from 'react';
import React, { useState } from "react";
import { Form, Col, Row, Button } from 'react-bootstrap';

function FormA() {
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
      <div className="FormA">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

          <Row className="mb-4">
            <Col className="s-2"></Col>
            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Prénom"
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nom"
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
            <Col className="s-2"></Col>
          </Row>

          <Row className="mb-4">

            <Col className="s-2"></Col>
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Email" 
                required 
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>Date de Naissance</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="Date de naissance" 
              required />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
            <Col className="s-2"></Col>

          </Row>
          <Row className="mb-4">
            <Col className="s-2"></Col>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Adresse Postale</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="Adresse Postale" 
              required />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>

            <Col>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                  />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  label="Do you want to subscribe to our newletter?"
                  />
              </Form.Group>
            </Col>
            <Col className="s-2"></Col>
          </Row>
          <Row className="mb-4">
            <Col className="s-5"></Col>
            <Button as={Col} md="1" type="submit">Submit form</Button>
            <Col className="s-5"></Col>
          </Row>
        </Form>
      </div>
    ); 
  }

export default FormA;