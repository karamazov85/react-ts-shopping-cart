import { Navbar as NavbarBs, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar:React.FC = () => {
    return (
        <NavbarBs className="bg-white shadow-sm mb-3">
            <Container>
                <Nav>
                   <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                   <Nav.Link as={NavLink} to="/store">Store</Nav.Link>
                   <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}

export default Navbar