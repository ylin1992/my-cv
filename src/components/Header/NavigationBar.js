import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Container} from "react-bootstrap";
import React from 'react'

function NavigationBar(props) {



    return (
        <div className="rwd-component" id="navbar-container">
            <Navbar  className="ms-auto" collapseOnSelect expand="sm" bg="navbar-light" variant="light">
                <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="navbar-items" href="#header">Home</Nav.Link>
                        <Nav.Link className="navbar-items" href="#about">About Me</Nav.Link>
                        {/* <Nav.Link className="navbar-items" href="#project">Projects</Nav.Link> */}
                        <Nav.Link className="navbar-items" href="#posts">Posts</Nav.Link>
                        <Nav.Link href="#footer">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar
