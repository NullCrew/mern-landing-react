import MyNavBar from "./Nav";
import heroImage from "../assets/MERN.png";
import laptopVector from "../assets/laptop-vector.png";
import { Button, Col, Container, Row } from "react-bootstrap";

function HeroSection() {
    return (
        <div className="hero" style={{ width: '100%' }}>
            <Container>
                <Row className="py-5" style={{ alignItems: 'center' }}>
                    <Col md={6}>
                        <img src={heroImage} alt="hero" className="hero-image" />
                    </Col>
                    <Col md={6} className="text-center mt-5 mb-5">
                        <h2 className="text-light mb-4 poppins"><span className="text-green">MERN</span> Stack Training</h2>
                        <p className="text-secondary">
                            We provide courses on MERN stack Web Development. <br />
                            We have a team of experienced developers who can help you learn! <br />
                            Join us and experience the fun of Web Development.
                        </p>
                        <Button variant="light" className="mt-4 poppins">
                            Get Started
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

function CTA1() {
    return (
        <div className="cta-1 bg-accent">
            <Container>
                <Row className="py-5" style={{ alignItems: 'center' }}>

                    <Col md={{order: 'last'}} className="text-center" >
                        <img src={laptopVector} alt="laptop" className="laptop-vector" />
                    </Col>
                    <Col md={{order: 'first'}} className="text-center text-md-start" mdPull={6}>
                        <h2 className="mb-4 poppins">Wanna know a secret?</h2>
                        <p className="text-secondary">We got awesome trainers to walk you through the whole training process and guide you towards success!</p>
                        <p className="text-secondary">We'll help you keep up with industry standards and learn the latest technologies to help you fit in with the fast paced tech world.</p>
                        <Button variant="dark" className="mt-4 poppins">Great, I'm in!</Button>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

function Home() {
    return (
        <div>
            <MyNavBar />
            <HeroSection />
            <CTA1 />
        </div>
    )
}

export default Home;
