///create main page for painter
import React from 'react';
import {Button, Container, Image} from "react-bootstrap";
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
            <p className="lead">Wir sind ein professionelles Maler- und Lackierunternehmen, das sich auf die Renovierung von Wohn- und Geschäftsräumen spezialisiert hat. Wir bieten eine breite Palette von Dienstleistungen an, die von der Innen- und Außenmalerei bis hin zur Lackierung von Möbeln und anderen Oberflächen reichen. Unsere erfahrenen Maler und Lackierer verwenden nur hochwertige Farben und Materialien, um sicherzustellen, dass Ihre Räume makellos aussehen. Wir sind stolz darauf, unseren Kunden qualitativ hochwertige Arbeit zu liefern und exzellenten Kundenservice zu bieten. Kontaktieren Sie uns noch heute für ein kostenloses Angebot!</p>
            <Link to="/quote" className="btn btn-primary">Angebot & Reservierung</Link>


        </Container>
    );

}

export default Main;