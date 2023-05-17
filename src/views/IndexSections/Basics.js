import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledCarousel
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/project1.jpg"),
    altText: "Slide 1",
    caption: ""
  },
  {
    src: require("assets/img/project2.jpg"),
    altText: "Slide 2",
    caption: ""
  },
  {
    src: require("assets/img/project3.jpg"),
    altText: "Slide 3",
    caption: ""
  }
];

export default function Basics() {

  return (
    <div className="section section-basic" id="basic-elements">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <h2 className="title">WHO WE ARE</h2> 
        <Container>
          <Row>
            <Col className="mb-5 mb-lg-0" lg="5">
            <h3 className="des" style={{textAlign: "justify"}}><b>TIBSI• The Investream Business Solutions Inc.</b> is a company that was established and incorporated on a specific date (please provide the date). It operates as a business consulting firm with a primary focus on delivering creative and effective solutions to assist businesses in optimizing their operations and enhancing overall efficiency. TIBSI offers its expertise and knowledge to various companies across different industries.</h3>
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={true}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
