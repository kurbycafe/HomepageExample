import HeaderComponent from "./HeaderComponent";
import {Container} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import Main from "./Main";
import FooterComponent from "./FooterComponent";

const UserApp = () => {

    return (

        <div className="UserApp">

            <HeaderComponent />
            <Container className="min-vh-100 mt-5 mb-5">
                <Routes >

                    <Route exact path='/'  element={<Main />}  />


                </Routes>
            </Container>



            <FooterComponent />
        </div>
    )
}

export default UserApp;