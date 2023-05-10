import React, { useState, useRef, useEffect } from "react";
import { Container } from "reactstrap";
import Swiper from "swiper";

const teamMembers = [
  {
    name: "Gilfred Petancio",
    position: "Technical Support/IT Man",
    details:
      "Gilfred is an experienced IT Man with over 10 years of experience. He has managed numerous successful projects across various industries.",
    image: require("assets/img/gilfred.jpg"),
  },
  {
    name: "Ralph Gacayan",
    position: "Software Engineer",
    details:
      "Ralph is a skilled software engineer with expertise in React and Node.js. He has worked on several web applications and is passionate about building great software.",
    image: require("assets/img/ralph.jpg"),
  },

  {
    name: "Dale Enrico Calvo",
    position: "OJT - Software Engineer",
    details:
      "Dale is a talented OJT with a keen eye for detail. He has designed several award-winning websites and mobile apps, and is always looking for new design challenges.",
    image: require("assets/img/dale.jpg"),
  },

  {
    name: "Lexie Lore",
    position: "HR Assistant",
    details:
      "Lexie is a talented designer with a keen eye for detail. She has designed several award-winning websites and mobile apps, and is always looking for new design challenges.",
    image: require("assets/img/lexie.jpg"),
  },

  {
    name: "Liam Neeson",
    position: "Purchasing",
    details:
      "Liam Neeson is a skilled Purchasing Manager with a proven track record of success. He has extensive experience in procurement, supplier management, and contract negotiations.",
    image: require("assets/img/liam.jpg"),
  },

  {
    name: "Paul Walker",
    position: "Driver",
    details:
      "Paul Walker was a skilled and experienced company driver. He had a strong record of safe driving and a deep understanding of traffic rules and regulations.",
    image: require("assets/img/paul.jpg"),
  },
];

const Signup = () => {
  const [currentMember, setCurrentMember] = useState(0);
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current.slidePrev();
    const newIndex = (currentMember - 1 + 3) % 3;
    setCurrentMember(newIndex);
  };

  const handleNext = () => {
    swiperRef.current.slideNext();
    const newIndex = (currentMember + 1) % 3;
    setCurrentMember(newIndex);
  };

  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 3,
      navigation: {
        prevEl: ".swiper-arrow-prev",
        nextEl: ".swiper-arrow-next",
      },
    });
    swiperRef.current = swiper;
  }, []);

  return (
    <Container>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {teamMembers.map((member, index) => (
            <div
              className={`swiper-slide ${
                index === currentMember ? "active" : ""
              }`}
              key={index}
            >
              <div className="card-container">
                <div className="card-image-container">
                  <img
                    className="card-image img-center img-fluid rounded-circle"
                    srcSet={`${member.image} 1x, ${member.image} 2x`}
                    sizes="(min-width: 768px) 200px, 100px"
                    alt={member.name}
                  />
                </div>
                <div className="card-details">
                  <h2>{member.name}</h2>
                  <h3>{member.position}</h3>
                  <p>{member.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-arrow-prev" onClick={handlePrev}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="swiper-arrow-next" onClick={handleNext}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </Container>
  );  
};

export default Signup;
