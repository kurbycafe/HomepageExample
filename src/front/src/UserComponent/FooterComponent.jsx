
import React from 'react';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const FooterComponent = () => {
    return (

            <Navbar bg="black" className="pt-5 ">
                <Container >
                    <Row className="text-white w-100">

                            <Col>
                                <h5 className="">Adresse</h5>
                                <p className="text-white-50 m-0">testStraße 1</p>
                                <p className="text-white-50 m-0">12345 teststadt</p>
                            </Col>
                            <Col className="p-0">
                                <h5 className="">Rechtliches</h5>
                                <Nav.Link href="/Datenschutz" className="text-white-50"> Datenschutz</Nav.Link>
                                <Nav.Link href="/Impressum" className="text-white-50">Imoressum</Nav.Link>
                                <Nav.Link href="/AGB" className="text-white-50">AGB</Nav.Link>

                            </Col>
                        <Col>
                            <h5>Kontakt</h5>
                            <p className="text-white-50 m-0">Tel: 123456789</p>
                            <h5 className="m-0">Email</h5>
                            <p className="text-white-50 mt-1">Mail: test@test.com</p>

                        </Col>
                    </Row>



                </Container>
            </Navbar>

    );


}
export default FooterComponent;