//create header component
import React from 'react';
import {Navbar, Nav, Container, NavDropdown, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" style={{width:"300px"}} className="d-flex justify-content-center m-0">
                    <Image src="/logo.png"  className="w-50"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/about" className="fs-4" >Über uns</Nav.Link>
                        <Nav.Link href="/services" className="fs-4">Dienstleistungen</Nav.Link>
                        <Nav.Link href="/portfolio" className="fs-4">Portfolio</Nav.Link>
                       {/* <Nav.Link href="/reservation" className="fs-4">Reservierung</Nav.Link>*/}
                        <Nav.Link href="/faq" className="fs-4">FAQ</Nav.Link>

                        <Nav.Link href="/contact" className="fs-4">Kontakt</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderComponent;