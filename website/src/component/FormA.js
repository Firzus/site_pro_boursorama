//import React from 'react';
import React, { useState } from "react";
import { Form, Col, Row, Button, Container } from 'react-bootstrap';

function FormA() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault()
    let Data = {
      Prenom: event.target[0].value,
      Nom: event.target[1].value,
      Email: event.target[2].value,
      Birthday: event.target[3].value,
      Adresse_Postale: event.target[4].value,
      Newsletter: { id: 'register07' }
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
        'charset': 'UTF-8'
      },
      body: JSON.stringify(Data)
    });
    console.log()
  };

  return (
    <>
      <Container className="d-flex justify-content-center">
        <Form noValidate validated={validated} onSubmit={handleSubmit} >
          <Row>

            <Col className="pt-1 pb-1">

              <Row className="pt-1 pb-1 side-container">
                <Col>
                  <Form.Group controlId="register02">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Nom"
                      name='Nom'
                    />
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="pt-1 pb-1 side-container">
                <Col>
                  <Form.Group controlId="register04">
                    <Form.Label>Date de Naissance (JJ/MM/AAAA)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Date de Naissance (JJ/MM/AAAA)"
                      required
                      name='Birthday'
                    />
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="pt-1 pb-1 side-container">
                <Col>
                  <Form.Group controlId="register05">
                    <Form.Label>Adresse Postale</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Adresse Postale"
                      required
                      name='Adresse_Postale'
                    />
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="pt-4 pb-4">
                <Col className="d-flex justify-content-end">
                  <Button
                    variant="outline-dark"
                    type="submit"
                    className="fw-bold fs-2 text-center text-uppercase font-face-hnl text-dark color-button">
                    s'inscrire
                  </Button>
                </Col>
              </Row>

            </Col>

            <Col className="pt-1 pb-1">

              <Row className="pt-1 pb-1 side-container">
                <Col>
                  <Form.Group controlId="register01">
                    <Form.Label>Pr??nom</Form.Label>
                    <Form.Control
                      required
                      name='Prenom'
                      type="text"
                      placeholder="Pr??nom"
                    />
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="pt-1 pb-1 side-container">
                <Col>
                  <Form.Group controlId="register03">
                    <Form.Label>Adresse mail</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Adresse mail"
                      name='Email'
                      required
                    />
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="pt-3 pb-2 side-container">
                <Col>
                  <Form.Group>
                    <Form.Check
                      required
                      label="J'accepte le R??glement de Boursorama Banque."
                      feedback="Vous devez accepter les conditions avant de pouvoir continuer."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="pt-2 pb-1 side-container">
                <Col>
                  <Form.Group controlId="register07">
                    <Form.Check
                      label="Je souhaite recevoir des offres promotionnelles (newsletter) de Boursorama Banque."
                      name='Newsletter'
                      type='checkbox'
                    />
                  </Form.Group>
                </Col>
              </Row>

            </Col>

          </Row>
        </Form>
      </Container>

    </>
  );
}

export default FormA;