import HeaderComponent from "./HeaderComponent";
import {Button, Container, Image} from "react-bootstrap";
import {Link, Route, Routes} from "react-router-dom";
import Main from "./Main";
import FooterComponent from "./FooterComponent";
function ImageWithButton() {
    return (

        <div style={{marginTop : "300px", position: 'relative', display: 'inline-block' }}>
            <img src="/contact-us.jpg" alt="Your Image" style={{ width: '100%' }} />
            <Button variant="primary" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: '#000', border: 'none' }}>
                Contact us
            </Button>
        </div>
    );
}
const About = () => {
    return (
        <Container>
            <div className="d-flex">
                <div >

                    <Image
                        src="https://via.placeholder.com/400x600"

                    />

                </div>

                <div className="d-flex align-items-center ms-3">
                    <p>
                        <h2> About me</h2>
                        <p>
                            Ich bin ein professioneller Maler und Lackierer mit 25 Jahren Erfahrung in der Branche.
                        </p>
                        <p>
                            Ich bin der kompetente Partner für Ihre Maler- und Lackierarbeiten und stehe Ihnen mit Rat und Tat zur Seite.
                        </p>
                    </p>
                </div>
            </div>

           <div  style={{marginTop :"100px"}}>
                <h2> Wir schaffen Ihren ganz persönlichen Raum.</h2>
               <div className="d-flex mt-3" >
                   <div className="d-flex flex-column align-items-center">
                       <Image
                            src="https://via.placeholder.com/150"
                            roundedCircle
                            className="m-3"
                        />

                          <h3>Perfection</h3>
                          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl
                            tempus
                            convallis quis ac lectus. Nulla quis</p>
                     </div>
                     <div className="d-flex flex-column align-items-center">

                         <Image
                             src="https://via.placeholder.com/150"
                             roundedCircle
                             className="m-3"
                         />
                         <h3>Quality</h3>
                          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl
                            tempus
                            convallis quis ac lectus. Nulla quis</p>
                     </div>
                        <div className="d-flex flex-column align-items-center">

                            <Image
                                src="https://via.placeholder.com/150"
                                roundedCircle
                                className="m-3"
                            /><h3>Customer satisfaction</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl
                                tempus
                                convallis quis ac lectus. Nulla quis</p>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <Image
                                src="https://via.placeholder.com/150"
                                roundedCircle
                                className="m-3"
                            />
                            <h3>Technology</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl
                                tempus
                                convallis quis ac lectus. Nulla quis</p>
                        </div>
               </div>

           </div>

            <div className="d-flex " style={{marginTop :"100px"}}>
                <div className="d-flex align-items-center me-3">
                    <p>
                        <h2> About company</h2>
                        <p>
                            Wir sind ein Unternehmen, das professionelle Maler- und Lackierdienste anbietet.
                            Wir bieten unseren Kunden qualitativ hochwertige Dienstleistungen und führen professionelle Maler- und Lackierarbeiten im Innen- und Außenbereich von Gebäuden durch.
                            Unsere Experten verwenden modernste Technologien und hochwertige Materialien, um die Anforderungen unserer Kunden zu erfüllen und schöne Ergebnisse zu erzielen.
                            Wir helfen Ihnen gerne dabei,
                            Ihr Gebäude in ein wunderschönes Kunstwerk zu verwandeln.
                        </p>
                    </p>
                </div>
                <div>

                    <Image
                        /*src="https://via.placeholder.com/400x600"*/
                        src="/about-company.jpg"
                        style={{width: "400px", height: "600px"}}
                    />

                </div>



            </div>


            <ImageWithButton />


        </Container>


    )
        ;
}

export default About;
