
import React from 'react';
import {Button, Container, FigureCaption, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FadeInWhenVisible, FramerHoverButton, FramerHoverZoomIn} from "./FramerMotionCollection";
import {motion} from "framer-motion";

function ImageWithText() {

    return (

        <div style={{marginTop : "200px", position: 'relative', display: 'inline-block' }}>
            <img src="https://via.placeholder.com/1200x600" alt="Your Image" style={{ width: '100%' }} />
            <div className="text-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <h1 className="display-4">Maler & Lackiere</h1>
                <p className="lead">Professionelle Maler- und Lackierarbeiten</p>
            </div>
        </div>
    );
}

//button hover effect


const Main = () => {

    const infoList = [
        {
            id: 1,
            title: "Qualität",
            description: "Wir verwenden nur hochwertige Farben und Materialien, um sicherzustellen, dass Ihre Räume makellos aussehen.",
            link : "https://img.icons8.com/ios/100/guarantee--v1.png"
        },
        {
            id: 2,
            title: "Zuverlässigkeit",
            description: "Wir halten uns an unsere Termine und liefern pünktlich.",
            link : "https://img.icons8.com/ios/100/trust--v1.png"
        },
        {
            id: 3,
            title: "Professionalität",
            description: "Unsere erfahrenen Maler und Lackierer liefern qualitativ hochwertige Arbeit.",
            link : "https://img.icons8.com/parakeet-line/96/full-tool-storage-box-.png"
        },
        {
            id: 4,
            title: "Kundenorientierung",
            description: "Wir sind stolz darauf, exzellenten Kundenservice zu bieten.",
            link : "https://img.icons8.com/ios/100/user--v1.png"
        }
    ];

    return (
        <Container>

            <ImageWithText/>
            <h1 style={{marginTop : "200px"}}>Willkommen bei Uns</h1>
            <div className="d-flex justify-content-center align-content-center mt-5" >
                <div className=" text-right">
                    <p className="lead">Wir sind ein professionelles Maler- und Lackierunternehmen, das sich auf die
                        Renovierung von Wohn- und Geschäftsräumen spezialisiert hat. Wir bieten eine breite Palette von
                        Dienstleistungen an, die von der Innen- und Außenmalerei bis hin zur Lackierung von Möbeln und
                        anderen Oberflächen reichen. Unsere erfahrenen Maler und Lackierer verwenden nur hochwertige
                        Farben und Materialien, um sicherzustellen, dass Ihre Räume makellos aussehen. Wir sind stolz
                        darauf, unseren Kunden qualitativ hochwertige Arbeit zu liefern und exzellenten Kundenservice zu
                        bieten. Kontaktieren Sie uns noch heute für ein kostenloses Angebot!</p>
                </div>
               {/* <div className=" w-50 " style={{paddingLeft:"100px"}}>
                    <Image src="https://via.placeholder.com/300" alt="Your Image"/>
                </div>*/}
            </div>



            <div className="text-center d-flex bg-body-secondary p-5" style={{marginTop : "200px"}}  >
                {infoList.map((info, index) => (
                    <FadeInWhenVisible>
                    <div className="d-flex flex-column align-items-center ">
                        <Image
                            src={info.link}
                            fluid
                            roundedCircle
                            className="m-3 "
                            style={{width: "150px", height: "150px", objectFit: "cover"}}
                        />
                        <h3>{info.title}</h3>
                        <p>{info.description}</p>
                    </div>
                    </FadeInWhenVisible>
                ))
                }


            </div>


            <h2 className="mt-5">Unsere Dienstleistungen</h2>
            <FadeInWhenVisible>
                <div className="mt-5 d-flex justify-content-center align-content-center">
                    <div className="text-center">
                       <FramerHoverZoomIn>

                           <Image src="https://via.placeholder.com/200" alt="Your Image"/>
                       </FramerHoverZoomIn>


                        <p>Maler - und Tapezierarbeiten im Innenbereich</p>
                    </div>
                    <div className="ps-5 text-center">

                        <FramerHoverZoomIn>

                            <Image src="https://via.placeholder.com/200" alt="Your Image"/>
                        </FramerHoverZoomIn>
                        <p>Fußbodenarbeiten im Innenberiech</p>
                    </div>
                    <div className="ps-5 text-center">

                        <FramerHoverZoomIn>

                            <Image src="https://via.placeholder.com/200" alt="Your Image"/>
                        </FramerHoverZoomIn>
                        <p>Putzarbeiten im Innen- und Außenbereich</p>
                    </div>

                </div>


                <div className="mt-5 d-flex justify-content-center align-content-center">
                    <motion.button
                        className={"mt-5 w-25 rounded-1 "}
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                        style={{background: "black", border: "none", height: "50px", color: "white", fontSize: "20px"}}
                        onClick={() => {
                            window.location.href = "/services";
                        }}
                    >
                        <p className={"m-0"}>mehr erfahren </p>
                    </motion.button>

                </div>


            </FadeInWhenVisible>


            <h2 className="mt-5">Öffnungszeiten</h2>
            <div className="p-3 bg-body-secondary text-center">
                <h3>Montag - Freitag: 8:00 - 18:00 Uhr</h3>
                <h3>Samstag: 9:00 - 14:00 Uhr</h3>
                <h3>Sonntag: Geschlossen</h3>

            </div>

            <iframe
                width="100%"
                height="300"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=de&amp;q=Gross steinum+(Maler%20%26%20Lackiere)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className="mt-5"
            />
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