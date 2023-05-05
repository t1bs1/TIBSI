import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Container,
  Row,
  Col,
  Button,
  NavLink,
  NavItem
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";


export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
            <Col lg="6" md="6">
                <h1 className="">Welcome to Our IT Services</h1>
              </Col>
            </Row>
          </div>
        </div>
        <section className="section section-lg section-safe">
        <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5">
                <h1 className="banner-text-header"><strong> Professional IT Services from the TIBSI IT-Personnel</strong>
                </h1>
                  <p className="text-white banner-text">
                    At our IT services company, we are committed to providing top-quality IT solutions to our clients. Our team of experienced professionals is dedicated to ensuring that your IT needs are met, and your business can operate efficiently.
                  </p>
              </Col>
            </Row>
          </Container>
                <div className="banner-overlay">
                <Button color="primary" size="lg" className="banner-button">
                <NavItem>
                <NavLink to="/profile-page" tag={Link}>
                  About Us
                </NavLink>
              </NavItem></Button>
                </div>
              <img alt="..." className="banner" src={require("assets/img/banner.jpg")}/>
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
          </section>
        <section className="section section-lg">

    </section>
    <Footer />
    </div>
  </>
)};
