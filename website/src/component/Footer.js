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
                                src="http://localhost:1337/uploads/logo_boursorama_black_e7d70379dd.png?updated_at=2022-04-21T23:52:10.752Z"
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