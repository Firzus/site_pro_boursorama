import { Component } from "react";
import Navigation from "../component/Navigation";
import { Button, Col, Container, Row } from "react-bootstrap";
import FormA from '../component/FormA';

class OrderCards extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="home background" >
                <Navigation/>

                <Container fluid className="pt-5 pb-2">

                    <Row className="pt-4 pb-4 w-100 side-container">
                        <Col>
                            <Row className="pt-2 pb-1">
                                <Col className="fs-1 font-face-hnl text-center text-uppercase fw-bold">
                                    La carte boursorama <br/>
                                    banque a ton effigie !
                                </Col>
                            </Row>
                            <Row className="pt-2 d-flex justify-content-center">
                                <Col className="pt-3 d-flex justify-content-center">
                                    <img
                                        src="/img/credit_card.png"
                                        width="403"
                                        height="254"
                                        alt="Carte de crédit"
                                    />
                                </Col>
                            </Row>
                            <Row className="pt-1 pb-1">
                                <Col className="font-face-hnl fs-5 text-center">
                                    Choisis parmis ces 4 design uniques et exclusifs de cartes pour te distinguer ! <br/>
                                    Cette carte est vendue a 10 000 exemplaires seulement, alors ne tarde pas.
                                </Col>
                            </Row>
                            <Row className="pt-1 pb-1">
                                <Col className="font-face-hnl fs-5 text-center">
                                    Tu es nouveau client ? La carte est offerte avec l'ouverture <br/>
                                    d'un compte Boursorama Banque :
                                </Col>
                            </Row>
                            <FormA/>
                        </Col>
                    </Row>

                    <Row className="background-part pt-4 pb-4 d-flex justify-content-center side-container">
                        <Col>
                            <Row className="pt-1 pb-1">
                                <Col className="font-face-hnl fs-5 text-center">
                                    Tu es déjà client Boursorama Banque ? Connecte toi à ton <br/>
                                    compte et laisse toi guider !
                                </Col>
                            </Row>
                            <Button
                                href='#home'
                                className='fw-bold font-face-hnl text-uppercase fs-3 d-flex justify-content-center text-dark color-button'
                                variant="outline-dark">
                                Connexion
                            </Button>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default OrderCards;
