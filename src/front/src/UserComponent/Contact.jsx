import {Button, Col, Container, Form, Row} from "react-bootstrap";

const Contact = () => {
    return (
        //create contact form with a bootstrap
        <Container >
            <h1 className="mt-5 mb-4 ">Kontakt</h1>
          <Form className="w-50">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

              <Row className="mb-3">
                  <Col>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Vorname</Form.Label>
                          <Form.Control type="password" placeholder="Vorname" />
                      </Form.Group>

                  </Col>
                  <Col>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Nachname</Form.Label>
                          <Form.Control type="password" placeholder="Nachname" />
                      </Form.Group>
                  </Col>
              </Row>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

          </Form>

        </Container>
    )
}

export default Contact;