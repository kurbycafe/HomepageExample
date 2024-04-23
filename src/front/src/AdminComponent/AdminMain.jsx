import {Col, Container, Row} from "react-bootstrap";

const AdminMain = () => {

    return (
        <Container>
            <h2> Admin Main </h2>
            <div className=" w-50 pt-3">
                <Row className="justify-content-between">
                    <Col><h5>Recent Contact</h5></Col>
                    <Col className="text-end"><span> <a href="#" className="text-decoration-none text-dark"> More </a> </span></Col>
                </Row>



                {/* only three list of contact , new -> old */}
                <div className="border rounded">
                    <ul className="list-unstyled ">
                        <li className="d-flex ">
                            <p className="px-5 m-0"><a> it is the example titled</a></p>
                            <p className="px-5 m-0">03. 04. 20204</p>
                        </li>
                        <li className="d-flex">
                            <p className="px-5 m-0"><a> it is the example titled</a></p>
                            <p className="px-5 m-0">03. 04. 20204</p>
                        </li>
                    </ul>

                </div>

            </div>
        </Container>
    );
}
export default AdminMain;