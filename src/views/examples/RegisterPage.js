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

export default function RegisterPage() {
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
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
            <Col md="6">
          <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1387.7435231982972!2d123.90756078376909!3d10.331366060156247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99921d7b5e137%3A0x2e3419602a07d84c!2sSkyrise%201!5e0!3m2!1sen!2sph!4v1683182369742!5m2!1sen!2sph" title="location-map" height="436px" width="600px" style={{ borderRadius: 20 }} allowFullScreen="" aria-hidden="false" tabIndex="0" />
            </div>
              </Col>
              <Col className="ml-auto text-center" md="4">
  <div className="info" style={{marginLeft: "-1em", marginTop: "-4em"}}>
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
</Col>
<Col className="ml-auto text-center" md="4">
  <div className="info" style={{marginLeft: "-10em", marginTop: "-4em"}}>
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
        </section>
        <Footer />
      </div>
    </>
  );
}
