import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";

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
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png")}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png")}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png")}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png")}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
            <Col lg="6" md="6">
                <h1 className="text-white">Welcome to Our IT Services</h1>
              </Col>
            </Row>
          </div>
        </div>
        <section className="section section-lg">
        <section className="section section-lg section-safe">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5">
              <h1 className="text-white">About Us</h1>
                  <p className="text-white">
                    At our IT services company, we are committed to providing top-quality IT solutions to our clients. Our team of experienced professionals is dedicated to ensuring that your IT needs are met, and your business can operate efficiently.
                  </p>
              </Col>
              <Col md="5">
              <h1 className="text-white">About Us</h1>
                  <p className="text-white">
                    At our IT services company, we are committed to providing top-quality IT solutions to our clients. Our team of experienced professionals is dedicated to ensuring that your IT needs are met, and your business can operate efficiently.
                  </p>
              </Col>
            </Row>
          </Container>
          </section>
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path5.png")}
          />
          <img
            alt="..."
            className="path3"
            src={require("assets/img/path2.png")}
          />
          <Container>
            <Row className="justify-content-center">
              <Col lg="8">
                <h2 className="text-white">Why Choose Us?</h2>
                <p className="text-white">
                  Our IT services company has a proven track record of delivering successful IT solutions to businesses of all sizes. We pride ourselves on our attention to detail, exceptional customer service, and commitment to providing the best IT services possible.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5">
                <h2 className="text-white">Secure IT Services</h2>
                <p className="text-white">
                  At our IT services company, we understand the importance of secure IT solutions. That's why we use the latest security technologies to ensure that your data is safe and protected at all times.
                </p>
              </Col>
              <Col md="5">
                <h2 className="text-white">Reliable IT Services</h2>
                <p className="text-white">
                  We know that downtime can be costly for your business. That's why our IT services are designed to be reliable and minimize any interruptions to your business operations.
                </p>
              </Col>
              <Col md="5">
                <h2 className="text-white">Secure IT Services</h2>
                <p className="text-white">
                  At our IT services company, we understand the importance of secure IT solutions. That's why we use the latest security technologies to ensure that your data is safe and protected at all times.
                </p>
              </Col>
              <Col md="5">
                <h2 className="text-white">Reliable IT Services</h2>
                <p className="text-white">
                  We know that downtime can be costly for your business. That's why our IT services are designed to be reliable and minimize any interruptions to your business operations.
                </p>
              </Col>
            </Row>
          </Container>
        <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path5.png")}
          />
        </section>
        <Container>
        <Row className="justify-content-center">
          <Col lg="4" md="6">
            <h2 className="text-center">Our Services</h2>
            <p className="lead text-center">
              We offer a wide range of IT services to help you achieve your business goals.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="4" md="6">
            <div className="info">
              <div className="icon icon-primary">
                <i className="nc-icon nc-laptop"></i>
              </div>
              <div className="description">
                <h4 className="info-title">IT Support</h4>
                <p>
                  We provide comprehensive IT support services to ensure that your business runs smoothly and efficiently.
                </p>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="info">
              <div className="icon icon-warning">
                <i className="nc-icon nc-chart-bar-32"></i>
              </div>
              <div className="description">
                <h4 className="info-title">Data Analytics</h4>
                <p>
                  Our data analytics services enable you to make informed business decisions based on insights gained from your data.
                </p>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="info">
              <div className="icon icon-success">
                <i className="nc-icon nc-briefcase-24"></i>
              </div>
              <div className="description">
                <h4 className="info-title">IT Consulting</h4>
                <p>
                  Our IT consulting services help you to optimize your technology investments and align them with your business goals.
                </p>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="info">
              <div className="icon icon-danger">
                <i className="nc-icon nc-layout-11"></i>
              </div>
              <div className="description">
                <h4 className="info-title">Web Design</h4>
                <p>
                  We offer web design services to help you create an online presence that represents your brand and engages your customers.
                </p>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon nc-bulb-63"></i>
              </div>
              <div className="description">
                <h4 className="info-title">Software Development</h4>
                <p>
                  Our software development services help you to build custom solutions that are tailored to your business needs.
                </p>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="info">
              <div className="icon icon-primary">
                <i className="nc-icon nc-cloud-download-93"></i>
              </div>
              <div className="description">
                <h4 className="info-title">Cloud Services</h4>
                <p>
                  Our cloud services enable you to access your data and applications from anywhere, while reducing your IT costs.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
        </section>
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png")}
          />
        </section>
        <section className="section section-lg">
    </section>
    <Footer />
    </div>
  </>
)};
