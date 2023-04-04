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
        <h3 className="des"><b>TIBSI• The Investream Business Solutions Inc.</b>(hereinafter referred to as "TIBSI") was founded and incoporated in <b>(Input Date Here.)</b> Investream Business Solutions Inc. is a business consulting firm that specializes in providing innovative solutions to help businesses streamline their operations and increase their efficiency. </h3>
        <p className="category"><h4>Here are some ways Investream can help your business:</h4></p>
        <Row>
          <Col md="10">
            <Button className="first" type="button">
            Business process automation: Investream can help you identify opportunities for automation and implement solutions that will streamline your processes, reduce errors, and save time and money.
            </Button>
            <Button className="second" type="button">
            Cloud-based solutions: Investream can help you migrate to cloud-based solutions, which will enable you to access your data and tools from anywhere, collaborate with team members remotely, and reduce the need for on-site infrastructure.
            </Button>
            <Button className="third" type="button">
            Data analytics: Investream can help you analyze your data to identify areas where you can improve efficiency, reduce costs, and increase revenue. With advanced analytics tools, Investream can provide insights into your sales, customer behavior, and employee performance.
            </Button>
            <Button className="fourth" type="button">
            Agile methodologies: Investream can help you implement agile methodologies to respond quickly to changing market conditions, customer demands, and industry trends. With agile methodologies, Investream can help you streamline your development processes and accelerate your time-to-market.
            </Button>
          </Col>
        </Row>
        <p className="category"><h4>By partnering with The Investream Business Solutions Inc., you can take advantage of innovative solutions that will help you optimize your operations, reduce costs, and improve your overall productivity.</h4></p>
        
        <Container>
          <div className="title">
            <h3>Carousel</h3>
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
                Bootstrap carousel
              </h1>
              <p className="text-white mt-4">
                Black Design comes with three pre-built pages to help you get
                started faster. You can change the text and images and you're
                good to go.
              </p>
              <Button
                className="mt-4"
                color="warning"
                href="#"
              >
                See all components
              </Button>
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
