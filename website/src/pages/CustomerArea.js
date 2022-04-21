import Navigation from "../component/Navigation";
import Footer from "../component/Footer";
import FormA from '../component/FormA';
import FormB from '../component/FormB';
import { Component } from "react";
import { Col, Row, Container } from 'react-bootstrap';

class CustomerArea extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="background">
                <Navigation/>

                <Container fluid className="pt-5 pb-2">
                    <Row className="pt-5 pb-1">
                        <Col className="text-center text-uppercase fs-2 fw-bold font-face-hnl">
                            tu veux créer un compte, c'est par ici !
                        </Col>
                    </Row>
                    <FormA />
                    <Container>
                        <Row className="pt-1 pb-1">
                            <Col className="text-center fs-2 fw-bold text-uppercase font-face-hnl">
                                tu as déja un compte !
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center fs-2 fw-bold text-uppercase font-face-hnl">
                                connecte toi !
                            </Col>
                        </Row>
                    </Container>
                    <FormB />

                    <img
                        src="/img/decoration_5.png"
                        alt="Décoration"
                        className="img-hidden position-absolute position-deco_5"
                    />

                </Container>

                <Footer/>
            </div>
        )
    }
}

export default CustomerArea;