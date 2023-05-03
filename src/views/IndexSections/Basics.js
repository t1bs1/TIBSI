import React from "react";
// plugin that creates slider
import Slider from "nouislider";

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
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: ""
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: ""
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: ""
  }
];

export default function Basics() {
  const slider1 = React.useRef(null);
  const slider2 = React.useRef(null);
  React.useEffect(() => {
    Slider.create(slider1.current, {
      start: [40],
      connect: [true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
    Slider.create(slider2.current, {
      start: [20, 60],
      connect: [false, true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
  }, []);
  return (
    <div className="section section-basic" id="basic-elements">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <h2 className="title">WHO WE ARE</h2> 
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
            <h3 className="des" style={{textAlign: "justify"}}><b>TIBSI• The Investream Business Solutions Inc.</b>(hereinafter referred to as "TIBSI") was founded and incoporated in <b>(Input Date Here.)</b> Investream Business Solutions Inc. is a business consulting firm that specializes in providing innovative solutions to help businesses streamline their operations and increase their efficiency. </h3>
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          </Row>
        </Container>
        <Row>
          <Col lg="3" sm="6">
              <div className="slider" ref={slider1} />
              <br />
              <div className="slider slider-info mb-3" ref={slider2} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
