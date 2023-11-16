import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'
import Home from '../home/home'
function Header() {
  return (
    <div>
        <div>
      <Navbar bg="primary" fixed="top" expand="md" data-bs-theme="dark">
        <Container>
          <Navbar.Brand  id="name" href="#home">Manoj Kumar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
        <Home/>
    </div>
    
  )
}

export default Header