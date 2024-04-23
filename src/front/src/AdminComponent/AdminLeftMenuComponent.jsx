import {Col, Container, Row} from "react-bootstrap";
import {useState} from "react";

const AdminLeftMenuComponent = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    return(

        <Container fluid>
            <Row>
                <Col sm={3} className="bg-dark text-white w-100" style={{minHeight: "70vh"}}>
                    <ul className="list-unstyled">
                        {/* <li className="p-3" onClick={toggleSubMenu}>메뉴 항목 1</li>
                        {showSubMenu && (
                            <ul className="list-unstyled">
                                <li className="ms-5 mb-1">하위 메뉴 1</li>
                                <li className="ms-5 mb-1">하위 메뉴 2</li>
                                <li className="ms-5 mb-1">하위 메뉴 3</li>
                            </ul>
                        )}*/}
                        <li className="p-3"><a className="text-decoration-none text-light" href="/admin/contact/list"> Kontakt </a></li>
                        <li className="p-3">portfolio</li>
                        <li className="p-3"><a className="text-decoration-none text-light" href="#"> faq </a></li>
                    </ul>
                </Col>

            </Row>
        </Container>
    );
}
export default AdminLeftMenuComponent;