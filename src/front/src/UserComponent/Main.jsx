///create main page for painter
import React from 'react';
import {Button, Container, FigureCaption, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

function ImageWithText() {

    return (

        <div style={{marginTop : "300px", position: 'relative', display: 'inline-block' }}>
            <img src="https://via.placeholder.com/1200x600" alt="Your Image" style={{ width: '100%' }} />
            <div className="text-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <h1 className="display-4">Maler & Lackiere</h1>
                <p className="lead">Professionelle Maler- und Lackierarbeiten</p>
            </div>
        </div>
    );
}

const Main = () => {
    return (
        <Container>

            <ImageWithText/>
            <h1 className="mt-5">Willkommen bei Maler & Lackiere</h1>
            <div className="d-flex justify-content-center align-content-center">
                <div className="w-50 text-right">
                    <p className="lead">Wir sind ein professionelles Maler- und Lackierunternehmen, das sich auf die
                        Renovierung von Wohn- und Geschäftsräumen spezialisiert hat. Wir bieten eine breite Palette von
                        Dienstleistungen an, die von der Innen- und Außenmalerei bis hin zur Lackierung von Möbeln und
                        anderen Oberflächen reichen. Unsere erfahrenen Maler und Lackierer verwenden nur hochwertige
                        Farben und Materialien, um sicherzustellen, dass Ihre Räume makellos aussehen. Wir sind stolz
                        darauf, unseren Kunden qualitativ hochwertige Arbeit zu liefern und exzellenten Kundenservice zu
                        bieten. Kontaktieren Sie uns noch heute für ein kostenloses Angebot!</p>
                </div>
                <div className=" w-50 " style={{paddingLeft:"100px"}}>
                    <Image src="https://via.placeholder.com/300" alt="Your Image"/>
                </div>
            </div>

            <div className="text-center mt-5 d-flex bg-body-secondary" >
                <div className="d-flex flex-column align-items-center">
                    <Image
                        src="https://via.placeholder.com/150"
                        roundedCircle
                        className="m-3"
                    />
                    <h3>Qualität</h3>
                    <p>Wir verwenden nur hochwertige Farben und Materialien, um sicherzustellen, dass Ihre Räume makellos aussehen.</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <Image
                        src="https://via.placeholder.com/150"
                        roundedCircle
                        className="m-3"
                    />
                    <h3>Zuverlässigkeit</h3>
                    <p>Wir halten uns an unsere Termine und liefern pünktlich.</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <Image
                        src="https://via.placeholder.com/150"
                        roundedCircle
                        className="m-3"
                    />
                    <h3>Professionalität</h3>
                    <p>Unsere erfahrenen Maler und Lackierer liefern qualitativ hochwertige Arbeit.</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <Image
                        src="https://via.placeholder.com/150"
                        roundedCircle
                        className="m-3"
                    />
                    <h3>Kundenservice</h3>
                    <p>Wir sind stolz darauf, exzellenten Kundenservice zu bieten.</p>
                </div>
            </div>


            <h2 className="mt-5">Unsere Dienstleistungen</h2>
            <div className="mt-5 d-flex justify-content-center align-content-center">
                <div className="text-center">
                    <Image src="https://via.placeholder.com/200" alt="Your Image"/>
                    <p>1</p>
                </div>
                <div className="ps-5 text-center">

                    <Image src="https://via.placeholder.com/200" alt="Your Image"/>
                    <p>1</p>
                </div>
                <div className="ps-5 text-center">

                    <Image src="https://via.placeholder.com/200" alt="Your Image"/>
                    <p>1</p>
                </div>


            </div>


            <h2 className="mt-5">Öffnungszeiten</h2>
            <div  className="p-3 bg-body-secondary text-center">
                <h3>Montag - Freitag: 8:00 - 18:00 Uhr</h3>
                <h3>Samstag: 9:00 - 14:00 Uhr</h3>
                <h3>Sonntag: Geschlossen</h3>

            </div>

            //googlemap of location
<iframe
                width="100%"
                height="300"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Berlin+(Maler%20%26%20Lackiere)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <div className="text-center mt-5">
                <h2>Kontaktieren Sie uns</h2>
                <p>Wir freuen uns, von Ihnen zu hören!</p>
                <Link to="/contact">
                    <Button variant="primary">Kontakt</Button>
                </Link>
            </div>




        </Container>
    );

}

export default Main;