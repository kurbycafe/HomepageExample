
import {Col, Container, Row} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import Main from "../UserComponent/Main";
import AdminMain from "./AdminMain";
import AdminLeftMenuComponent from "./AdminLeftMenuComponent";
import AdminContactList from "./AdminContact/AdminContactList";




const AdminApp = () => {

    return (

        <div className="AdminApp">
            <h4><a href="/admin/main">main </a></h4>
            <Container className="min-vh-100 mt-5 mb-5">
            <Row>
                <Col sm={3}><AdminLeftMenuComponent/></Col>
                <Col sm={9}>

                    <Routes>
                        <Route path='/main' element={<AdminMain/>}/>
                        <Route path='/contact/list' element={<AdminContactList/>} />
                    </Routes>
                </Col>
            </Row>
            </Container>


        </div>
    );
}

export default AdminApp;