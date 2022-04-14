import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";
import { Component } from "react";

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="home background" >
                <Navigation />
                <Container className="pt-5 pb-2">
                    <Row className="pt-3 pb-3">
                        <Container>
                            <Row className="pt-2 pb-1">
                                <Col className="fs-1 font-face-hnl text-center text-uppercase">
                                    la lfl s'allie avec boursorama !
                                </Col>
                            </Row>
                            <Row className="pt-1 pb-2 d-flex">
                                <Col className="fs-5 font-face-hnl text-center">
                                    Regardez la Ligue Française de LoL sur
                                    notre steam spécial, ne ratez aucun match !
                                </Col>
                            </Row>
                            <Row className="pt-2">
                                <img
                                    src="/img/api_twitch.png"
                                    width="732"
                                    height="408"
                                    alt="API Twitch"
                                    className="d-flex justify-content-center"
                                />
                            </Row>
                        </Container>
                    </Row>

                    <Row className="pt-3 pb-3 d-flex justify-content-center">
                        <Col xs={8} className="margin-left margi-right">
                            <Row className="pb-1">
                                <Col className="fs-1 text-center text-uppercase">
                                    la carte boursorama banque à ton effigie !
                                </Col>
                            </Row>
                            <Row className="pt-1 pb-1">
                                <Col className="fs-5 text-center">
                                    La carte Collection League of Legends permet la participation
                                    aux tirages au sort pour les clients afin de vivre l'esport
                                    au plus près de l'action et d'échanger avec les meilleurs joueurs.
                                </Col>
                            </Row>
                            <Row className="pt-1 pb-2 d-flex align-items-end">
                                <Col className="d-flex justify-content-center">
                                    <Button variant="secondary" className='text-center text-uppercase'>
                                        commande ta carte
                                    </Button>{' '}
                                </Col>
                            </Row>
                        </Col>
                        <Col className="pt-2 d-flex justify-content-center">
                            <img
                                src="/img/credit_card.png"
                                width="484"
                                height="305"
                                alt="Carte de crédit"
                            />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default Home;