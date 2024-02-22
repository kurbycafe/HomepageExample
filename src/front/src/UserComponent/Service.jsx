import {Button, Col, Container, Row} from "react-bootstrap";

const Service = () => {
    const services = [
        {
            id: 1,
            title: "Maler - und Tapezierarbeiten aller Art im Innenbereich",
            description: "",
            image: "https://via.placeholder.com/500",

        },
        {
            id: 2,
            title: "Fußbodenarbeiten im Innenberiech ",
            description: "Verlegen von PVC, Laminat, Click-Vinyl",
            image: "https://via.placeholder.com/500",

        },

    ];

    return (
        <Container>
            <h1 className="mt-5 mb-4">Servies von Uns </h1>
            {services.map(service => (
                <div key={service.id} className="service-item d-flex align-items-center " style={{ marginBottom:"200px"}}>
                    <img src={service.image} alt={service.title} className="service-image" style={{marginRight:"-30px"}} />
                    <div className="service-details bg-body-secondary h-50">
                        <div className="p-5">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        </div>
                    </div>
                </div>
            ))}


            <Row className="mt-5">

                    <h2>Putzarbeiten im Innen- und Außenbereich</h2>
                    <p>Wir bieten Ihnen hochwertige Putzarbeiten für Innen- und Außenbereiche an.</p>

            </Row>
            <Row className="mt-5">

                <h2>Anbringen von Akustikpaneelen im Innenbereich</h2>

            </Row>
            <Row className="mt-5">

                <h2>Kleinere Trockenbauarbeiten</h2>
                {/* detail need */}
            </Row>
            <Row className="mt-5">

                <h2> Restauration von Fachwekfassaden </h2>


            </Row>

        </Container>
    );
}
export default Service;
