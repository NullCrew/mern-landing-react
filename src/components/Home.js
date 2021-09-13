import MyNavBar from "./Nav";
import heroImage from "../assets/MERN.png";
import laptopVector from "../assets/laptop-vector.png";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import expressLogo from "../assets/express.png";
import nodeLogo from "../assets/node.png";
import mongoLogo from "../assets/MongoDB.png";
import reactLogo from "../assets/react.svg";
import { Component } from "react";
import Footer from "./Footer";

class HomePage extends Component {

    // similar to python's __init__
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
        };

        this.HeroSection = this.HeroSection.bind(this);
        this.CTA1 = this.CTA1.bind(this);
        this.Subscribe = this.Subscribe.bind(this);
        this.WhatIsMern = this.WhatIsMern.bind(this);
        this.FormModal = this.FormModal.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showBool = true;

    handleModal() {
        this.setState({ showModal: !this.state.showModal });

        console.log(this.state.showModal);

        if (this.showBool === true) this.showBool = false;
        else this.showBool = true;
    }

    hideModal() {
        console.log('Hide modal is triggered');
        this.setState({ showModal: false });
    }

    FormModal() {
        return (
            <Modal show={this.state.showModal} onHide={this.hideModal}>
                <Modal.Header closeButton onClick={this.handleModal}>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleModal}>Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    HeroSection() {
        return (
            <div className="hero" style={{ width: '100%' }}>
                <Container>
                    <Row className="py-5" style={{ alignItems: 'center' }}>
                        <Col md={6}>
                            <img src={heroImage} alt="hero" className="hero-image" />
                        </Col>
                        <Col md={6} className="text-center mt-5 mb-5">
                            <h2 className="text-light mb-4 poppins"><span className="text-green">MERN</span> Stack Training Sessions</h2>
                            <p className="text-secondary">
                                We provide courses on MERN stack Web Development. <br />
                                We have a team of experienced developers who can help you learn! <br />
                                Join us and experience the fun of Web Development.
                            </p>
                            <Button variant="light" className="mt-4 poppins" onClick={this.handleModal}>
                                Get Started
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    CTA1() {
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

    WhatIsMern() {
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

    Subscribe() {
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

    render() { // similar to main()
        return (
            <div>
                <MyNavBar />
                < this.FormModal />
                < this.HeroSection />
                < this.CTA1 />
                < this.WhatIsMern />
                < this.Subscribe />
                < Footer />
            </ div>
        )
    }
}

export default HomePage;
