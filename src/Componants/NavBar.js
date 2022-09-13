import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" className='fixed-top' expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">News Monkey</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScrol>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/business">Business</Nav.Link>
                                <Nav.Link href="/entertainment">Entertainment</Nav.Link>
                                <Nav.Link href="/sports">Sports</Nav.Link>
                                <Nav.Link href="/health">Health</Nav.Link>
                                <Nav.Link href="/science">Science</Nav.Link>
                                <Nav.Link href="/technology">Technology</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
