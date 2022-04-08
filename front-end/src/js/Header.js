import "../stylesheets/Header.css"
import React from "react"
import {Navbar, Container, Nav} from "react-bootstrap"
import logo from "../img/Header-logo.png"
import home from "../img/Header-home.png"
import list from "../img/Header-list.png"
import profile from "../img/Header-profile.png"
import about from "../img/Header-about.png"

const Header = (props) => {
  const token = localStorage.getItem("token")
  if (token === "null") {
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt="site logo"
                src={logo}
                width="150"
                height="35"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">
                  <img
                    alt="home"
                    src={home}
                    width="22"
                    height="20"
                    className="d-inline-block align-top"
                  />{" "}Home</Nav.Link>
                <Nav.Link href="/list">
                  <img
                    alt="list"
                    src={list}
                    width="24"
                    height="20"
                    className="d-inline-block align-top"
                  />{" "}List View</Nav.Link>
                <Nav.Link href="/login">
                  <img
                    alt="login"
                    src={profile}
                    width="20"
                    height="22"
                    className="d-inline-block align-top"
                  />{" "}Login</Nav.Link>
                <Nav.Link href="/about">
                  <img
                    alt="about"
                    src={about}
                    width="20"
                    height="24"
                    className="d-inline-block align-top"
                  />{" "}About Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="site logo"
              src={logo}
              width="150"
              height="35"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">
                <img
                  alt="home"
                  src={home}
                  width="22"
                  height="20"
                  className="d-inline-block align-top"
                />{" "}Home</Nav.Link>
              <Nav.Link href="/list">
                <img
                  alt="list"
                  src={list}
                  width="24"
                  height="20"
                  className="d-inline-block align-top"
                />{" "}List View</Nav.Link>
              <Nav.Link href="/settings">
                <img
                  alt="setting"
                  src={profile}
                  width="20"
                  height="22"
                  className="d-inline-block align-top"
                />{" "}Setting</Nav.Link>
              <Nav.Link href="/about">
                <img
                  alt="about"
                  src={about}
                  width="20"
                  height="24"
                  className="d-inline-block align-top"
                />{" "}About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
