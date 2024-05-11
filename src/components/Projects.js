import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/GameDev-UnityFPSProject.png";
import projImg2 from "../assets/img/InfinityDugeonSS.png";
import projImg3 from "../assets/img/ToonTankSS.png";
import projImg4 from "../assets/img/PhongShadingSS.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Projects = () => {

    //프록젝트 배열.
    //현재는 탭1에서만 사용됨.
    //탭2 이상부터는 새로운 배열을 만드는 것이 좋을 듯
    const projects = [
        {
            title: "FPS Project",
            description: "Unity",
            imgUrl: projImg1,
            url: "https://github.com/CHEDDARcb/TPSProject"
        },
        {
            title: "Arena Battle",
            description: "Unreal Egine4",
            imgUrl: projImg2,
            url: "https://github.com/CHEDDARcb/ArenaBattle"
        },
        {
            title: "Toon Tank",
            description: "Unreal Engine5",
            imgUrl: projImg3,
            url: "https://github.com/CHEDDARcb/UnrealEngine5_ToonTanks"
        }
    ];

    const projectsDirectX = [
        {
            title: "Phong Shading Renderer",
            description: "DirectX 11",
            imgUrl: projImg4,
            url: "https://github.com/CHEDDARcb/PhongShadingRenderer"
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2>Projects</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="GameDev">
                            {/****탭버튼**** 
                         tab N을 누를때마다 해당항목의 프로젝트 표시
                         tab이 아닌 다른 카테고리명으로 분류예정*/}
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="GameDev">GameDev</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="DirectX">DirectX</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Labo">Labo</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            {/*실제 탭버튼 하단의 프로젝트 목록표시
                        Tab.Pane의 EventKey로 분류되어있음
                        이 역시 상단의 tab명이 바뀌면 같이 변경해줘야함. */}
                            <Tab.Content>
                                <Tab.Pane eventKey="GameDev">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="DirectX">
                                    <Row>
                                        {
                                            projectsDirectX.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Labo">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}