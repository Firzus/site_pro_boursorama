import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";
import { Component } from "react";
import ReactPlayer from "react-player"

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="background">
                <Navigation />

                <Container fluid className="pt-5 pb-2">

                    <Row className="pt-4 pb-4 w-100 side-container">
                        <Col>
                            <Row className="pt-2 pb-1">
                                <Col className="fs-1 font-face-hnl text-center text-uppercase fw-bold">
                                    la lfl s'allie avec boursorama !
                                </Col>
                            </Row>
                            <Row className="pt-1 pb-2 d-flex">
                                <Col className="fs-5 font-face-hnl text-center">
                                    Regardez la Ligue Française de LoL sur
                                    notre steam spécial, ne ratez aucun match !
                                </Col>
                            </Row>
                            <Row className="pt-2 d-flex justify-content-center">
                                <ReactPlayer
                                    url="https://www.twitch.tv/amouranth"
                                    controls
                                />
                            </Row>
                        </Col>
                    </Row>

                    <Row className="background-part pt-4 pb-4 d-flex justify-content-center side-container">
                        <Col xs={8} className="d-flex flex-column">
                            <Row className="pt-4 pb-1">
                                <Col className="font-face-hnl fs-3 text-center text-uppercase fw-bold">
                                    la carte boursorama banque à ton effigie !
                                </Col>
                            </Row>
                            <Row className="pt-1 pb-1">
                                <Col className="font-face-hnl fs-5 text-center">
                                    La carte Collection League of Legends permet la participation
                                    aux tirages au sort pour les clients afin de vivre l'esport
                                    au plus près de l'action et d'échanger avec les meilleurs joueurs.
                                </Col>
                            </Row>
                            <Row className="pt-1 pb-1 mt-auto">
                                <Col className="d-flex justify-content-center">
                                    <Button variant="outline-dark" className='fw-bold text-center text-uppercase font-face-hnl text-dark color-button'>
                                        commande ta carte
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="pt-3 d-flex justify-content-center">
                            <img
                                src="http://localhost:1337/uploads/credit_card_221539a838.png?updated_at=2022-04-21T23:52:10.666Z"
                                width="403"
                                height="254"
                                alt="Carte de crédit"
                            />
                        </Col>
                    </Row>

                    <Row className="pt-4 pb-4 side-container-2">
                        <Col className="d-flex flex-column">
                            <Row className="pt-3 pb-1 mb-auto">
                                <Col className="font-face-hnl fs-1 text-center text-uppercase fw-bold">
                                    ouvre ton compte gratuitement et gagne 20€ !
                                </Col>
                            </Row>
                            <Row className="pt-1 pb-1 mb-auto">
                                <Col className="font-face-hnl fs-4 text-center">
                                    Le compte en ligne Boursorama propose une nouvelle expérience
                                    bancaire en vous permettant de gérer votre argent plus simplement.
                                    Ouvrez votre compte bancaire gratuit depuis votre téléphone ou
                                    votre ordinateur, sans frais ni paperasse. Ça ne prend que 8 minutes.
                                    Et on vous offre 20€ si vous êtes nouveaux chez nous.
                                </Col>
                            </Row>
                            <Row className="pt-2 pb-3 mt-auto">
                                <Col className="d-flex justify-content-center">
                                    <Button variant="outline-dark" size="lg" className='fw-bold text-center text-uppercase font-face-hnl text-dark color-button'>
                                        j'ouvre mon compte
                                    </Button>{' '}
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="background-part pt-4 pb-4 side-container" id="tournois">
                        <Col className="d-flex flex-column">
                            <Row className="pt-3 pb-1 mb-auto">
                                <Col className="font-face-hnl fs-1 text-center fw-bold">
                                    Participe aux tournois amateurs sponsorisés Boursorama Esport !
                                </Col>
                            </Row>
                            <Row className="pt-1 pb-1 mb-auto">
                                <Col className="font-face-hnl fs-4 text-center">
                                    Gagne des lots, ainsi que la chance de rencontrer tes joueurs
                                    préférés de la LFL en participant aux tournois Boursorama Esport
                                    x Toornament !
                                </Col>
                            </Row>
                            <Row className="pt-1 pb-1 mb-auto">
                                <Col className="font-face-hnl fs-4 text-center">
                                    Pour les finalistes, des places à gagner, pour
                                    aller voir le match final de la LFL (tous frais payés) !
                                </Col>
                            </Row>
                            <Row className="pt-2 pb-3 mt-auto">
                                <Col className="d-flex justify-content-center">
                                    <Button href="https://organizer.toornament.com/tournaments/5614200892996059136" target="_blank" variant="info" size="lg" className='fw-bold text-center text-uppercase font-face-hnl text-white'>
                                        Participer sur toornament.com
                                    </Button>{''}
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="pt-4 pb-4 side-container-2" id="faq">
                        <Col className="d-flex flex-column">
                            <Row className="pt-3 pb-1 mb-auto">
                                <Col className="font-face-hnl fs-1 text-center fw-bold">
                                    Vos questions que vous nous posez souvent (très, très souvent !)
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="font-face-hnl">A qui s’adressent ces offres ?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                            est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className="font-face-hnl"> Je suis nouveau client, puis-je aussi profiter de la carte personnalisée ?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                            est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header className="font-face-hnl">Quand prends fin cette offre ?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                            est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header className="font-face-hnl">Puis-je commander la carte personnalisée en étant déjà client Boursorama Banque ?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                            est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header className="font-face-hnl">Sous combien de temps mon compte bancaire est-il utilisable ?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                            est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Row>
                        </Col>
                    </Row>

                    <img
                        src="http://localhost:1337/uploads/decoration_1_ed989941b5.png?updated_at=2022-04-21T23:52:10.693Z"
                        alt="Décoration"
                        className="img-hidden position-absolute position-deco_1"
                    />
                    <img
                        src="http://localhost:1337/uploads/decoration_2_3ac520df1b.png?updated_at=2022-04-21T23:52:10.801Z"
                        alt="Décoration"
                        className="img-hidden position-absolute position-deco_2"
                    />
                    <img
                        src="http://localhost:1337/uploads/decoration_3_0eb30f376b.png?updated_at=2022-04-21T23:52:10.936Z"
                        alt="Décoration"
                        className="img-hidden position-absolute position-deco_3"
                    />
                    <img
                        src="http://localhost:1337/uploads/decoration_4_19f0af5363.png?updated_at=2022-04-21T23:52:10.705Z"
                        alt="Décoration"
                        className="img-hidden position-absolute position-deco_4"
                    />

                </Container>

                <Footer />
            </div>
        )
    }
}

export default Home;