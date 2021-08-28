import { Nav, NavItem, NavLink, Navbar, NavbarBrand, Image, Container } from 'react-bootstrap';
import logo from '../logo.svg';

function MyNavBar() {
    return (
        <div>
            <Navbar className="my-nav" variant="dark">
                <Container>
                    <NavbarBrand href="/">
                        <Image src={logo} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo" />
                        MERN Training
                    </NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default MyNavBar;