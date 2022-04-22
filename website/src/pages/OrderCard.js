import { Component } from "react";
import Navigation from "../component/Navigation";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import FormC from "../component/FormC";
import Footer from "../component/Footer";

class OrderCards extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="background" >
                <Navigation />

                <Container fluid className="pt-5 pb-2">

                    <Row className="pt-5 pb-1">
                        <Col className="fs-2 font-face-hnl text-center text-uppercase fw-bold d-flex justify-content-center">
                            La carte boursorama banque a ton effigie !
                        </Col>
                    </Row>

                    <Row className="pt-1 pb-3 side-container-2">
                        <Col className="fs-4 font-face-hnl text-center">
                            La carte Collection League of Legends permet
                            la participation aux tirages au sort pour les
                            clients afin de vivre l'esport au plus près de
                            l'action et d'échanger avec les meilleurs joueurs.
                        </Col>
                    </Row>

                    <Row className="pt-3 pb-1">
                        <Col className="fs-2 font-face-hnl text-center fw-bold d-flex justify-content-center">
                            1. Choisis ton design de carte
                        </Col>
                    </Row>

                    <Row className="pt-1 pb-2">
                        <Col className="w-25 d-flex justify-content-center">
                            <Carousel fade controls={false}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="http://localhost:1337/uploads/credit_card_221539a838.png?updated_at=2022-04-21T23:52:10.666Z"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="http://localhost:1337/uploads/credit_card_221539a838.png?updated_at=2022-04-21T23:52:10.666Z"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="http://localhost:1337/uploads/credit_card_221539a838.png?updated_at=2022-04-21T23:52:10.666Z"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>

                    <Row className="pt-2 pb-1">
                        <Col className="fs-2 font-face-hnl text-center fw-bold d-flex justify-content-center">
                            2. Remplis le formulaire d’inscription
                        </Col>
                    </Row>

                    <FormC />

                    <Row className="pt-1 pb-5 side-container-2 d-flex justify-content-center">
                        <Col className="fs-3 font-face-hnl text-center">
                            Tu vas recevoir par mail la dernière étape pour
                            commander ta carte, qui arrivera chez toi sous
                            24 à 48 heures !
                        </Col>
                    </Row>

                </Container>
                <Footer/>
            </div>
        )
    }
}

export default OrderCards;