import { Link } from "react-router-dom"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { CartWidget } from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/'> Nuevo Proyecto </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Link to='/categoria/carteras'>Carteras </Link>
                <Link to='/categoria/calzado'> Calzado </Link>
                </Nav>
                <Nav>
                    3
                    <Link to='/detail'>  
                    <CartWidget />
                    </Link>  
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
