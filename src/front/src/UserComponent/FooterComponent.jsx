
import React from 'react';
import {Container, Nav, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const FooterComponent = () => {
    return (

            <Navbar bg="black" className="pt-5 ">
                <Container >
                    <Row className="text-white">
                        <Nav >
                            <Nav.Link href="/Impressum" className="text-white">Impressum</Nav.Link>
                            <Nav.Link href="/Datenschutz" className="text-white">Datenschutz</Nav.Link>
                            <Nav.Link href="/AGB" className="text-white">AGB</Nav.Link>
                            <Nav.Link href="/inquiry" className="text-white">Kontakt</Nav.Link>
                        </Nav>
                    </Row>

                </Container>
            </Navbar>

    );


}
export default FooterComponent;