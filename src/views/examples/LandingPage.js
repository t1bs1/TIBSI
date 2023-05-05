import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Container,
  Row,
  Col,
  Button
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
        <section className="section section-lg section-safe">
        <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5">
                <h1 className="banner-text-header"><strong> Professional IT Services from the</strong><br/><strong> TIBSI IT-Personnel</strong>
                </h1>
                  <p className="text-white banner-text">
                    At our IT services company, we are committed to providing top-quality IT solutions to our clients. Our team of experienced professionals is dedicated to ensuring that your IT needs are met, and your business can operate efficiently.
                  </p>
              </Col>
            </Row>
          </Container>
                <div className="banner-overlay">
                <Button color="primary" size="lg" className="banner-button" to="/profile-page" tag={Link}>About Us</Button>
                </div>
              <img alt="..." className="banner" src={require("assets/img/banner.jpg")}/>
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
          </section>
        <section className="section section-lg">
        <Container>
            <Row className="row-grid justify-content-between align-items-center">
              <Col md="5" style={{marginTop: "-4.5em"}}>
                <h2><strong>Welcome to TIBSI IT-Services</strong></h2>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis magna at risus aliquam viverra.
                  Nulla tristique mauris vitae risus auctor, ut ultricies odio consequat. Praesent et lobortis odio.
                  Etiam finibus bibendum mauris sed commodo. Duis rutrum leo vitae mauris ullamcorper, non pellentesque nunc rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis magna at risus aliquam viverra.
                  Nulla tristique mauris vitae risus auctor, ut ultricies odio consequat. Praesent et lobortis odio.
                  Etiam finibus bibendum mauris sed commodo. Duis rutrum leo vitae mauris ullamcorper, non pellentesque nunc rhoncus.
                </p>
                <img alt="..." className="" src={require("assets/img/it-services.png")}/>
              </Col>
              <Col md="5">
                <h2><strong>Latest News</strong></h2>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis magna at risus aliquam viverra.
                  Nulla tristique mauris vitae risus auctor, ut ultricies odio consequat. Praesent et lobortis odio.
                  Etiam finibus bibendum mauris sed commodo. Duis rutrum leo vitae mauris ullamcorper, non pellentesque nunc rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis magna at risus aliquam viverra.
                  Nulla tristique mauris vitae risus auctor, ut ultricies odio consequat. Praesent et lobortis odio.
                  Etiam finibus bibendum mauris sed commodo. Duis rutrum leo vitae mauris ullamcorper, non pellentesque nunc rhoncus.
                </p>
                <h2 style={{marginTop: "2em"}}>
              <span style={{borderLeft: "5px solid #c71585", padding: "0 0.1em"}}></span>
            <strong>OUR SERVICES</strong>
              </h2>
                <p className="text-justify">
                <ul>
                  <li>Network installation and setup</li>
                  <br/>
                  <li>Data backup and recovery</li>
                  <br/>
                  <li>Cloud computing solutions</li>
                  <br/>
                  <li>Cybersecurity and virus protection</li>
                  <br/>
                  <li>Software and hardware upgrades</li>
                  <br/>
                  <li>Remote IT support</li>
                  <br/>
                  <li>24/7 monitoring and maintenance</li>
                  </ul>
                </p>
              </Col>
            </Row>
          </Container>
    </section>
    <Footer />
    </div>
  </>
)};
