import React from 'react';
import { Container, Accordion, Card, Button } from 'react-bootstrap';

function FAQ() {
    return (
        <Container>
            <h2>Häufig gestellte Fragen (FAQ)</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> Frage 1: Was sind Ihre Öffnungszeiten? </Accordion.Header>
                    <Accordion.Body>
                        Unsere Öffnungszeiten sind von Montag bis Freitag von 8:00 Uhr bis 18:00 Uhr und samstags von 9:00 Uhr bis 14:00 Uhr.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Frage 2: Bieten Sie auch individuelle Farbberatung an? </Accordion.Header>
                    <Accordion.Body>
                        Ja, wir bieten eine individuelle Farbberatung an, um sicherzustellen, dass die Farben perfekt zu Ihren Vorstellungen und Ihrem Raum passen.

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

export default FAQ;
