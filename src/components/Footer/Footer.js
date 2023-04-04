import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <img
              alt="..."
              className="tapad-carousel"
              src={require("assets/img/tapad-carousel.png")}
            />
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/components" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/landing-page" tag={Link}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/register-page" tag={Link}>
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/profile-page" tag={Link}>
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="#">
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">
                  License
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <center>
              
            </center>
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="#"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Follow us on Twitter
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="#"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-facebook-square" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Like us on Facebook
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="#"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-dribbble" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
                Follow us on Dribbble
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md="12">
            <div className="d-flex justify-content-center align-items-center">
              <span className="text-muted">© 2023 The Investream Business Solutions Inc. All rights reserved.</span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
