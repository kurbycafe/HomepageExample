import HeaderComponent from "./HeaderComponent";
import {Container} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import Main from "./Main";
import FooterComponent from "./FooterComponent";
import About from "./About";
import FAQ from "./FAQ";
import Portfolio from "./Portfolio";
import Service from "./Service";
import Contact from "./Contact";
import Reservation from "./Reservation";
import ReservationDetail from "./ReservationDetail";



const UserApp = () => {

    return (

        <div className="UserApp">

            <HeaderComponent />
            <Container className="min-vh-100 mt-5 mb-5">
                <Routes >

                    <Route exact path='/'  element={<Main />}  />
                    <Route exact path='/about'  element={<About />}  />
                    <Route exact path='/faq'  element={<FAQ />}  />
                    <Route path='/portfolio' element={<Portfolio/>} />
                    <Route path='/services' element={<Service />} />
                    <Route path='/reservation' element={<Reservation />} />
                    <Route path='/reservation/apply/' element={<ReservationDetail />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Container>



            <FooterComponent />
        </div>
    )
}

export default UserApp;