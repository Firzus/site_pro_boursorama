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
                <Container className="pt-5 pb-2">
                    <Row className="pt-4 pb-4">
                        <Col className="">
                            <h2>TU VEUX CREER UN COMPTE, C’EST PAR ICI !</h2>
                        </Col>
                    </Row>
                    <FormA/>
                    <Row s={1}>
                        <Col className=""></Col>
                        <Col className="fs2 text-uppercase">
                            TU AS DEJA UN COMPTE? CONNECTE TOI!
                        </Col>
                        <Col s={1}></Col>
                    </Row>
                </Container>
                <FormB/>
                <Footer />
            </div>
        )
    }
}

export default CustomerArea;