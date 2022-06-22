import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBarItem = () => {
  return (
   <>
    <Navbar bg="dark" variant="dark">
        <Container>
            <Nav className="me-auto">
                <Nav.Link href="#">UseState</Nav.Link>
                <Nav.Link href="#">UseEffect</Nav.Link>
                <Nav.Link href="#">UseContext</Nav.Link>
                <Nav.Link href="#">UseRef</Nav.Link>
            </Nav>
        </Container>
  </Navbar>
   </>
  )
}

export default NavBarItem