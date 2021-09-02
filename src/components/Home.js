import MyNavBar from "./Nav";
import heroImage from "../assets/MERN.png";
import laptopVector from "../assets/laptop-vector.png";
import { Button, Col, Container, Row } from "react-bootstrap";
import expressLogo from "../assets/express.png";
import nodeLogo from "../assets/node.png";
import mongoLogo from "../assets/MongoDB.png";
import reactLogo from "../assets/react.svg";
import { Link } from "react-router-dom";


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

                    <Col md={{ order: 'last' }} className="text-center" >
                        <img src={laptopVector} alt="laptop" className="laptop-vector" />
                    </Col>
                    <Col md={{ order: 'first' }} className="text-center text-md-start" mdPull={6}>
                        <h2 className="mb-4 poppins">Wanna know a secret?</h2>
                        <p className="text-secondary">We got <span className="text-green text-bold">awesome</span> trainers to walk you through the whole training process and guide you towards success!</p>
                        <p className="text-secondary">We'll help you keep up with industry standards and learn the <span className="text-green text-bold">latest technologies</span> to help you fit in with the fast paced tech world.</p>
                        <Button variant="dark" className="mt-4 poppins">Great, I'm in!</Button>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

function WhatIsMern() {
    return (
        <div className="what-is-mern bg-dark-accent text-white">
            <Container className="text-center">
                <h2 className="text-light mb-4 poppins">What is <span className="text-green">MERN</span> Stack?</h2>
                <Row className="mern">
                    <Col md={3} sm={6}>
                        <img src={mongoLogo} alt="mongo" className="mongo-logo" />
                        <h4 className="text-light mb-4">MongoDB</h4>
                        <p className="text-secondary">MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas.</p>
                    </Col>
                    <Col md={3} sm={6}>
                        <img src={expressLogo} alt="express" className="express-logo" />
                        <h4 className="text-light mb-4">Express JS</h4>
                        <p className="text-secondary">Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
                    </Col>
                    <Col md={3} sm={6}>
                        <img src={reactLogo} alt="react" className="react-logo" />
                        <h4 className="text-light mb-4">React JS</h4>
                        <p className="text-secondary">React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.</p>
                    </Col>
                    <Col md={3} sm={6}>
                        <img src={nodeLogo} alt="node" className="node-logo" />
                        <h4 className="text-light mb-4">Node JS</h4>
                        <p className="text-secondary">Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside a web browser.</p>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

function Subscribe() {
    return (
        <div className="subscribe bg-accent">
            <Container>
                <h2 className="mb-4 poppins"><span className="text-green">Subscribe</span> to our newsletter</h2>
                <p className="text-secondary">Subscribe to our newsletter for latest updates on our sessions!</p>
                <form className="subscribe-form">
                    <input type="text" className="form-control" placeholder="Enter your email" />
                    <button className="btn btn-dark mt-3 poppins">Subscribe</button>
                </form>
            </Container>
        </div>
    )
}

function Footer() {
    return (
        <div className="footer bg-dark-accent text-white">
            <Container>
                <Row className="py-5">
                    <Col md={4} className="text-center text-md-start">
                        <h4 className="mb-4">About Us</h4>
                        <p className="text-secondary">
                            We are a team of experienced developers who can help you learn Web development with MERN Stack!
                        </p>
                    </Col>
                    <Col md={4} className="text-center text-md-start">
                    </Col>
                    <Col md={4} className="text-center text-md-start">
                        <h4 className="mb-4">Quick Links</h4>
                        <Link to="/" className="footer-link">Home</Link><br />
                        <Link to="/about" className="footer-link">About Us</Link><br />
                        <Link to="/contact" className="footer-link">Contact Us</Link><br />
                    </Col>
                </Row>
                <hr />
                <p className="py-3 text-secondary text-center">
                    &copy; 2021 MERN Stack Training. All Rights Reserved.
                </p>
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
            <WhatIsMern />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Home;
