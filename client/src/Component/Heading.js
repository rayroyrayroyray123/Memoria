import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import { Container, Nav, Navbar, NavDropdown, Dropdown } from "react-bootstrap";
import "../Style/global.css";

function Heading() {
  let navigate = useNavigate();
  let body = {
    userId: Cookies.get("userId"),
  };
  console.log(body.userId);

  const onLogout = async (event) => {
    event.preventDefault();

    Cookies.remove("userId");
    Cookies.remove("token");
  };

  if (body.userId == null) {
    // User not logged in heading.
    return (
      <Navbar
        bg="light"
        expand="lg"
        
      >
        <Container>
          <Navbar.Brand
            href="/"
            style={{
              fontFamily: "'Pacifico', cursive",
            }}
          >
            Memoria
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>

            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link
                  href="/login"
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Log In
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    // User has logged in heading.
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand
            href="/"
            style={{
              fontFamily: "'Pacifico', cursive",
            }}
          >
            Memoria
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="/"
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginRight: "10px",
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/upload"
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginRight: "10px",
                }}
              >
                Upload
              </Nav.Link>
              <Nav.Link
                href="/map"
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginRight: "10px",
                }}
              >
                Map
              </Nav.Link>
            </Nav>

            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <img
                      src="../../../user.png"
                      alt="User Profile"
                      style={{
                        width: "32px",
                        height: "32px",
                        color: "black",
                      }}
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <NavDropdown.Item href={`/userprofile/${body.userId}`}>
                      User Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={(e) => {
                        onLogout(e);
                        navigate("/");
                        window.location.reload(true);
                      }}
                    >
                      Log Out
                    </NavDropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Heading;
