import React, { Component } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import '../fonts/Helvetica/Helvetica-Neue-Light.ttf';
import { Link } from 'react-router-dom';

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
                                <Navbar.Brand as="button" className='text-uppercase font-face-hnl fs-3 margin-right margin-left font-face-hnl' href="#">accueil</Navbar.Brand>
                                <Navbar.Brand as="button" className='text-uppercase font-face-hnl fs-3 margin-right margin-left font-face-hnl'><Link to="/commander-sa-carte">cartes</Link></Navbar.Brand>
                                <Navbar.Brand as="button" className='text-uppercase font-face-hnl fs-3 margin-right margin-left font-face-hnl'><Link to="/tournois">tournois</Link></Navbar.Brand>
                                <Navbar.Brand as="button" className='text-uppercase font-face-hnl fs-3 margin-right margin-left font-face-hnl'><Link to="/faq">faq</Link></Navbar.Brand>
                            </Nav>
                        </Container>
                        <Nav>
                            <Container>
                                <Button
                                    href='#home'
                                    className='font-face-hnl text-uppercase font-face-hnl fs-3 d-flex justify-content-center'
                                    variant="secondary">
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