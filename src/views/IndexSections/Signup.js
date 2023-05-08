import React from "react";
import Swiper from "swiper";
<link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />

function Reviews() {
  React.useEffect(() => {
    new Swiper(".reviews-slider", {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <section className="reviews">
      <h1 className="heading-title"> clients reviews </h1>
      <div className="swiper reviews-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide slide">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>Very nice environment 👍🤙👍</p>
            <h3>Ian Paul Dinoy</h3>
            <span>traveler</span>
            <img src="images/pic-1.png" alt="" />
          </div>
          <div className="swiper-slide slide">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>
              The services are excellent, very accommodating and the staff were
              very kind and attentive to us 🥰
            </p>
            <h3>Katarzhena Dela Cerna</h3>
            <span>student</span>
            <img src="images/pic-2.png" alt="" />
          </div>
          <div className="swiper-slide slide">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>University Campus that is fully equipped.</p>
            <h3>Lin Chang</h3>
            <span>traveler</span>
            <img src="images/pic-3.png" alt="" />
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default Reviews;
