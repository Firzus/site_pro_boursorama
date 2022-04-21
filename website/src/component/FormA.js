//import React from 'react';
import React, { useState } from "react";
import { Form, Col, Row, Button } from 'react-bootstrap';

function FormA() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault()
      let Data ={
        Prenom: event.target[0].value,
        Nom: event.target[1].value,
        Email: event.target[2].value,
        Birthday: event.target[3].value,
        Adresse_Postale: event.target[4].value,
        Newsletter: {id:'register07'}
      }
      console.log(Data.Prenom);
      console.log(Data.Nom);
      console.log(Data.Email);
      console.log(Data.Birthday);
      console.log(Data.Adresse_Postale);
      console.log(Data.Newsletter);
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      
      setValidated(true);
      fetch(" http://localhost:1337/api/Client", {
        method: "POST",
        headers: {
          'Content-Type': 'text/html',
          'charset':'UTF-8'
        },
        body: JSON.stringify(Data)
      });
      console.log()
    };
    
    return (
      <div className="FormA">
        <Form noValidate validated={validated} onSubmit={handleSubmit} >

          <Row className="mb-4 justify-content-md-center">
            <Form.Group as={Col} md="4" controlId="register01">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                required
                name='Prenom'
                type="text"
                placeholder="Prénom"
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="register02">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nom"
                name='Nom'
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-4 justify-content-md-center">

            <Form.Group as={Col} md="4" controlId="register03">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Email" 
                name='Email'
                required 
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="register04">
              <Form.Label>Date de Naissance</Form.Label>
              <Form.Control 
              type="date" 
              placeholder="Date de naissance" 
              required 
              name='Birthday'
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>

          </Row>
          <Row className="mb-4 justify-content-md-center">
            <Col md="2"></Col>
            <Form.Group as={Col} md="4" controlId="register05">
              <Form.Label>Adresse Postale</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="Adresse Postale" 
              required 
              name='Adresse_Postale'
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>

            <Col>
              <Form.Group className="mb-4">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                  />
              </Form.Group>
              <Form.Group className="mb-4" controlId="register07">
                <Form.Check
                  label="Do you want to subscribe to our newletter?"
                  name='Newsletter'
                  type='checkbox'
                  />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-4">
            <Button type="submit">Submit form</Button>
          </Row>
        </Form>
      </div>
    ); 
  }

export default FormA;