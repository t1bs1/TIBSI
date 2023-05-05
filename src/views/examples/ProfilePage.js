import React from "react";
// reactstrap components
import {
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function RegisterPage() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };
  return (
    <>
      <ExamplesNavbar />
        <div className="about-part">
          <div className="content-center">
                <Col>
                <div className="mission">
                <div className="text-center-epic">
                  <h2>
                    <strong>Our </strong>
                  <span style={{ color: "#1d8cf8" }}>
                <strong>Mission</strong>
              </span>
            <strong> and </strong>
          <span style={{ color: "#1d8cf8" }}>
            <strong>Vision</strong>
              </span>
                </h2>
                  </div>
              <div className="mission-img">
            <img src={require("assets/img/vision.jpg")} alt="mission-img" />
          </div>
        <div className="mission-description">
          <h2>
            <strong>Our</strong>{" "}
              <span style={{ color: "#1d8cf8" }}>
                <strong>Mission</strong>
                  </span>
                    </h2>
                      <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu convallis neque. Nam gravida, lorem a lacinia tincidunt, arcu velit pharetra leo, sed semper elit eros ut massa.
                      </p>
                    </div>
                  </div>
                  
                  <div className="vision">                   
                    <div className="vision-img">
                      <img src={require("assets/img/mission.jpg")} className="vision-img" alt="vision-img"/>
                  </div>
                        <div className="vision-description">
                      <h2><strong>Our</strong> <span style={{ color: "#1d8cf8" }}><strong>Vision</strong></span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu convallis neque. Nam gravida, lorem a lacinia tincidunt, arcu velit pharetra leo, sed semper elit eros ut massa.</p>
                    </div>
                  </div>
                </Col>
              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
          </div>

          <div className="about-part">
        <div className="content-center">
          <Row>
            <Col>
              <div className="our-values">
              <h2><strong>Our </strong><span style={{ color: "#1d8cf8" }}><strong>Values</strong></span></h2>
              </div>
              <div className="other-text" style={{ paddingLeft: "100px", paddingRight: "100px" }}>
                <h3 style={{ color: "#1d8cf8"  }}><strong>For clients and beneficiaries</strong></h3>
            <p>Equality: We aim for equal opportunities for everybody.</p>
            <p style={{ marginBottom: "40px" }}> 
            ACSFI believes that education is a powerful head start for all people seeking better lives. Education brings equal opportunities for all people towards creating a better society. The principle of equality is one of the pillars of democracy and moreover it fosters social inclusion and a progressive community life.
            </p>
            
            <h3 style={{ color: "#1d8cf8"  }}><strong>For community and employees and volunteers</strong></h3>
            <p>Community and Teamwork: We value the transformative impact of collaboration.</p>

            <p style={{ marginBottom: "40px" }}> 
            ACSFI believes that its charitable activities are critical to meeting society’s unmet needs. Charitable works keeps us all together and creates a deep sense of meaningful contribution and care. A sense of belonging to something bigger than us. By working together, fostering open communication, furthering understanding, and building caring and supportive environments, we can achieve something bigger than we could do alone.
            </p>
                
            <h3 style={{ color: "#1d8cf8"  }}>
              <strong>For external stakeholders (Patrons, Donors, Government, Suppliers, Volunteers, Partners)</strong>
              </h3>

            <p>Stewardship: We honor our heritage by being socially, financially, and environmentally responsible.</p>
            <p style={{ marginBottom: "40px" }}>ACSFI believes in ethical governance and fosters a culture of accountability, transparency, responsibility. We treat our resources as gifts that God has entrusted to us, including our earth, environment, facilities, and finances. We recognize God as the owner of our resources, businesses, and careers. We are only its stewards.</p>

            <div className="our-values">
            <h3><strong> Our </strong><span style={{ color: "#1d8cf8" }}><strong> Goals </strong></span><strong>  and </strong><span style={{ color: "#1d8cf8" }}><strong> Tasks </strong></span></h3>
            </div>

                <ol>
                  <li style={{ marginBottom: "10px" }}>To grant scholarships to qualified and high-potential students with challenged economic circumstance.</li>
                  <li style={{ marginBottom: "10px" }}>To assist in providing educational facilities and materials to students and educational institutions.</li>
                  <li style={{ marginBottom: "10px" }}>To assist in community projects where the businesses of ACSFI operate especially in environmental projects and/or government initiatives and research and development.</li>
                  <li style={{ marginBottom: "10px" }}>To contribute to the socio-economic development of urban and rural poor communities through providing financial support and services to client-initiated income generating projects, resulting in the improvement of their quality of life and enabling them to achieve social equity.</li>
                </ol>
              </div>
            </Col>
              </Row>
            </div>
          </div>

        </div>
        <Footer />
    </>
  );
}
