import React, { Component } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import '../fonts/Helvetica/Helvetica-Neue-Light.ttf';

class Navigation extends Component {
    render() {
        return (
            <>
                <Navbar bg="white" fixed="top">
                    <Navbar.Brand>
                        <img
                            src="/img/logo_boursorama_color.png"
                            width="175"
                            height="36"
                            href="#"
                            className="d-inline-block align-top margin-left"
                            alt="Logo Boursorama"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Container className='d-flex justify-content-center'>
                        <Navbar.Brand href="#home" className='text-uppercase font-face-hnl fs-3 fw-bold'>accueil</Navbar.Brand>
                        <Navbar.Brand href="#home" className='text-uppercase font-face-hnl fs-3 fw-bold'>carte</Navbar.Brand>
                        <Navbar.Brand href="#home" className='text-uppercase font-face-hnl fs-3 fw-bold'>tournois</Navbar.Brand>
                        <Navbar.Brand href="#home" className='text-uppercase font-face-hnl fs-3 fw-bold'>faq</Navbar.Brand>
                    </Container>
                    <Button className='margin-right' variant="secondary">Secondary</Button>{' '}
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    };
}

export default Navigation;