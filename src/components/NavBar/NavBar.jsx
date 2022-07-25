import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Prophet</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/unit-one">Unit One</Nav.Link>
              <Nav.Link href="/unit-two">Unit Two</Nav.Link>
              <Nav.Link href="/unit-three">Unit Three</Nav.Link>
              <Nav.Link href="/unit-four">Unit Four</Nav.Link>
              <Nav.Link href="/profiles">Community</Nav.Link>
              <Nav.Link href="/" onClick={handleLogout}>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
