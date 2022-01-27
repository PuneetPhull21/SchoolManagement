import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavbarPage() {
  return (

    <>
    { localStorage.getItem('role') === "admin" ?
 <Navbar bg="primary" variant="dark">
 <Container>
   <Navbar.Brand style={{ fontFamily: 'cursive' }} href="#home">School Management</Navbar.Brand>
   <Nav style={{ fontFamily: 'cursive' }} className="mr-auto">
     <Nav.Link href="/">Home</Nav.Link>
     <Nav.Link href="/admission">AddStudent</Nav.Link>
     <Nav.Link href="/careers">AddTeacher</Nav.Link>
     <Nav.Link href="/games">Attendence Approve </Nav.Link>
     <Nav.Link href="/contact">Time Table</Nav.Link>
   </Nav>
 </Container>
</Navbar>
    : 
     <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand style={{ fontFamily: 'cursive' }} href="#home">School Management</Navbar.Brand>
          <Nav style={{ fontFamily: 'cursive' }} className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/admission">Admission</Nav.Link>
            <Nav.Link href="/careers">Careers</Nav.Link>
            <Nav.Link href="/games">Games</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  }

    </>
  );
}
