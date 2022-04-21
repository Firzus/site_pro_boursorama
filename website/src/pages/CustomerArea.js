import Navigation from "../component/Navigation";
import Footer from "../component/Footer";
import FormA from '../component/FormA';
import FormB from '../component/FormB';
import { Component } from "react";
import { Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import '../fonts/Helvetica/Helvetica-Neue-Light.ttf';

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
                <Container fluid className="h-100 pt-5 pb-2">
                    <Row className="pt-4 pb-4">
                        <Col className="text-center text-uppercase fs-1 fw-bold font-face-hnl">
                            tu veux créer un compte, c'est par ici !
                        </Col>
                    </Row>
                    <FormA/>
                    <Row s={1}>
                        <Col className=""></Col>
                        <Col className="fs-2 fw-bold text-uppercase font-face-hnl">
                            tu as déja un compte! connecte toi!
                        </Col>
                        <Col s={1}></Col>
                    </Row>
                    <FormB/>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default CustomerArea;