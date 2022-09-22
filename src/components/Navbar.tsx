import { Navbar as NavbarBs, Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar:React.FC = () => {
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                   <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                   <Nav.Link as={NavLink} to="/store">Store</Nav.Link>
                   <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                </Nav>
                <Button style={{ width: "3rem", height: "3rem", position: "relative" }} variant="outline-primary" className="rounded-circle" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
               
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color: "white", width:"1.5rem", height:"1.5rem", position: "absolute", bottom:"0", right:"0", transform:"translate(25%, 25%)" }}>
                    3
                </div>
                </Button>
            </Container>
        </NavbarBs>
    )
}

export default Navbar