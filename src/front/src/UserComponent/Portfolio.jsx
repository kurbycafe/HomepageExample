import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {useState} from "react";

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "프로젝트 1",
            description: "프로젝트 1에 대한 설명 lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://via.placeholder.com/300",
            resultImages: [
                "https://via.placeholder.com/300/FF5733/FFFFFF/?text=Project1_Result1",
                "https://via.placeholder.com/300/33FF57/FFFFFF/?text=Project1_Result2",
                "https://via.placeholder.com/300/33FF57/FFFFFF/?text=Project1_Result3",
                "https://via.placeholder.com/300/33FF57/FFFFFF/?text=Project1_Result4",

                // 다른 사진들 추가
            ],
            resultDescriptions: [
                "프로젝트 1 결과물1에 대한 설명 lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "프로젝트 1 결과물2에 대한 설명 lorem ipsum dolor sit amet, consectetur adipiscing elit.",

                "프로젝트 1 결과물3에 대한 설명 lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "프로젝트 1 결과물4에 대한 설명 lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                // 다른 설명들 추가
            ]
        },
        {
            id: 2,
            title: "프로젝트 2",
            description: "프로젝트 2에 대한 설명 lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://via.placeholder.com/300",
            resultImages: [
                "https://via.placeholder.com/300/FF5733/FFFFFF/?text=Project2_Result1",
                "https://via.placeholder.com/300/33FF57/FFFFFF/?text=Project2_Result2",
                // 다른 사진들 추가
            ],
            resultDescriptions: [
                "프로젝트 2 결과물1에 대한 설명 lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "프로젝트 2 결과물2에 대한 설명 lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                // 다른 설명들 추가
            ]
        },
        // 다른 프로젝트들 추가
    ];

    const handleShowResult = (projectIndex) => {
        setSelectedProject(projects[projectIndex]);
    };

    const handleCloseResult = () => {
        setSelectedProject(null);
    };

    return (
        <Container>
            <h1 className="mt-5 mb-4">이전 작업 사례들</h1>
            <Row>
                {projects.map((project, index) => (
                    <Col key={project.id} md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={project.image} />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <Button variant="primary" onClick={() => handleShowResult(index)}>자세히 보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {selectedProject && (
                <div className="mt-5">
                    <h2>{selectedProject.title} 결과물</h2>
                    {selectedProject.resultImages.map((resultImage, index) => (
                        <div key={index} className="mb-4">
                            <img src={resultImage} alt={selectedProject.title} style={{ maxWidth: '100%' }} />
                            <p>{selectedProject.resultDescriptions[index]}</p>
                        </div>
                    ))}
                    <Button variant="secondary" onClick={handleCloseResult}>닫기</Button>
                </div>
            )}
        </Container>
    );
}

export default Portfolio;