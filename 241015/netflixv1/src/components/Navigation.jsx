import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Nav, Navbar } from "react-bootstrap";

const Logo = styled.img`
  width: 100px;
  object-fit: cover;
`;

const BtnItem = styled.span`
  color: #fff;
  transition: color 0.3s;
  &:hover {
    color: crimson;
  }
`;

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <Logo
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "80px" }}
            navbarScroll
          >
            <Nav.Link href="/">
              <BtnItem>Home</BtnItem>
            </Nav.Link>
            <Nav.Link href="/movie">
              <BtnItem>Movie</BtnItem>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Movie Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
