import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import '../css/style.css';

class Footer extends Component {
    render() {
        return (
            <>
                <Navbar bg="black">
                        <Navbar.Brand>
                            <img
                                src="/img/logo_boursorama_black.png"
                                width="180"
                                height="36"
                                className="d-inline-block align-top margin-left"
                                alt="Logo Boursorama"
                            />
                        </Navbar.Brand>
                </Navbar>
            </>
        );
    };
}

export default Footer;