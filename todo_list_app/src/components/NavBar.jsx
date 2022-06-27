import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const NavBarItem = () => {
  return (
   <>
    <Navbar bg="dark" variant="dark">
        <Container>
            <Nav className="me-auto">
                <NavLink className="navLink" to="/">Home</NavLink>
                <NavLink className="navLink" to="/UseState">UseState</NavLink>
                <NavLink className="navLink" to="/UseEffects">UseEffects</NavLink>
                <NavLink className="navLink" to="/UseContext">UseContext</NavLink>
                <NavLink className="navLink" to="/UseRef">UseRef</NavLink>
            </Nav>
        </Container>
  </Navbar>
   </>
  )
}

export default NavBarItem