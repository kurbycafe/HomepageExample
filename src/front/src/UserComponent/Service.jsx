import {Button, Col, Container, Row} from "react-bootstrap";

const Service = () => {
    const services = [
        {
            id: 1,
            title: "서비스 1",
            description: "서비스 1에 대한 간단한 설명을 여기에 추가합니다.",
            image: "https://via.placeholder.com/500",
            detail: "서비스 1에 대한 자세한 정보를 여기에 추가합니다.",
        },
        {
            id: 2,
            title: "서비스 2",
            description: "서비스 2에 대한 간단한 설명을 여기에 추가합니다.",
            image: "https://via.placeholder.com/500",
            detail: "서비스 2에 대한 자세한 정보를 여기에 추가합니다.",
        },
        {
            id: 3,
            title: "서비스 3",
            description: "서비스 3에 대한 간단한 설명을 여기에 추가합니다.",
            image: "https://via.placeholder.com/500",
            detail: "서비스 3에 대한 자세한 정보를 여기에 추가합니다.",
        },
    ];

    return (
        <Container>
            <h1 className="mt-5 mb-4">우리의 서비스</h1>
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


        </Container>
    );
}
export default Service;
