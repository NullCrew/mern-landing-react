import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomePage from "./Home";

class Footer extends Component {

    constructor(props) {
        super(props);

    }


    render() {
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
                        v1.2 | &copy; 2021 MERN Stack Training. All Rights Reserved.
                    </p>
                </Container>
            </div>
        )
    }
}

export default Footer;