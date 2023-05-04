import React from "react";
// javascript plugin used to create scrollbars on windows
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  UncontrolledTooltip} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

let ps = null;

function initMap() {
  // Set the coordinates of your desired location
  const myLatLng = { lat: 10.3313053, lng: 123.9075275 };

  // Create a new map centered on your location
  const map = new window.google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatLng,
  });

  // Add a marker to your location
  const marker = new window.google.maps.Marker({
    position: myLatLng,
    map,
    title: "7/F Skyrise 1 bldg., Villa St., Cebu IT Park, Apas, Lahug, Cebu City",
  });
}

export default function RegisterPage() {
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    
    // Load the Google Maps API script
  const script = document.createElement("script");
  script.src = `https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d62745.36183097494!2d123.95234090024472!3d10.611574912909765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x33a9ada36e2601a5%3A0x185700759424a125!2sCamp%20Choi%2C%20Camp%20Choi%2C%20Carmen%2C%20Cebu!3m2!1d10.617337!2d123.9613789!4m5!1s0x33a9b3d5b980744d%3A0x934cbb8bd330be37!2sCarmen%20Cebu!3m2!1d10.5937044!2d124.0186256!5e0!3m2!1sen!2sph!4v1636597396995!5m2!1sen!2sph`;
  script.async = true;
  document.body.appendChild(script);

    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
    };
  }, []);

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <section className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h5 className="text-on-back">Contact us</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Name</label>
                            <Input placeholder="Enter Your Name:" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Email address</label>
                            <Input placeholder="Enter Email Address:" type="email" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Phone</label>
                            <Input placeholder="Enter Phone Number:" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Company</label>
                            <Input placeholder="Enter Company Name:" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Message</label>
                            <Input placeholder="Hello there!" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                      >
                        Send text
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Find us at the office</h4>
                    <p>
                    7F Skyrise 1 Bldg., <br />
                    Villa St., Cebu IT Park, <br />
                    Apas, Lahug, Cebu City
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give us a ring</h4>
                    <p>
                      HR Admin - Assistant <br />
                      +40 762 321 762 <br />
                      Mon - Fri, 09:00-17:00
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section">
        <div id="map" style={{ height: "400px" }}>
          <center>
        <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1387.7435231982972!2d123.90756078376909!3d10.331366060156247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99921d7b5e137%3A0x2e3419602a07d84c!2sSkyrise%201!5e0!3m2!1sen!2sph!4v1683182369742!5m2!1sen!2sph" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
    />
    </center>
        </div>
        </section>
        <section className="section">

        </section>
        <Footer />
      </div>
    </>
  );
}
