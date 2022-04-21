import React, { Component } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import '../fonts/Helvetica/Helvetica-Neue-Light.ttf';
import { Link } from 'react-router-dom';
import '../css/style.css';


class Navigation extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="white" fixed="top">
                    <Navbar.Brand href="#">
                        <img
                            src="/img/logo_boursorama_color.png"
                            width="175"
                            height="36"
                            className="d-inline-block align-top margin-left"
                            alt="Logo Boursorama"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='margin-right' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Container className='d-flex justify-content-evenly'>
                            <Nav>
                                <Navbar.Brand className='fw-bold text-uppercase font-face-hnl fs-2 margin-right margin-left font-face-hnl' href='/#'>acceuil</Navbar.Brand>
                                <Navbar.Brand className='fw-bold text-uppercase font-face-hnl fs-2 margin-right margin-left font-face-hnl'><Link to="/commander-sa-carte" className='link'>carte</Link></Navbar.Brand>
                                <Navbar.Brand className='fw-bold text-uppercase font-face-hnl fs-2 margin-right margin-left font-face-hnl' href='/#tournois'>tournois</Navbar.Brand>
                                <Navbar.Brand className='fw-bold text-uppercase font-face-hnl fs-2 margin-right margin-left font-face-hnl' href='/#faq'>faq</Navbar.Brand>
                            </Nav>
                        </Container>
                        <Nav>
                            <Container>
                                <Button
                                    href='#home'
                                    className='fw-bold font-face-hnl text-uppercase fs-2 d-flex justify-content-center text-dark color-button'
                                    variant="outline-dark">
                                    espace client
                                </Button>
                            </Container>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    };
}

export default Navigation;