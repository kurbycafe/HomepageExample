//create header component
import React from 'react';
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Maler & Lackiere</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/about">Über uns</Nav.Link>
                        <Nav.Link href="/services">Dienstleistungen</Nav.Link>
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/quote">Angebot & Reservierung</Nav.Link>
                        <Nav.Link href="/faq">FAQ</Nav.Link>

                        <Nav.Link href="/contact">Kontakt</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderComponent;