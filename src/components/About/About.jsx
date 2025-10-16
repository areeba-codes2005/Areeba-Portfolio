import React from "react";
import girl from "../../assets/frontend-girl.png";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="container-fluid about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-12 col-12 d-flex flex-column justify-content-center align-items-center">
              <h2
                className="display-4 display-md-4 display-lg-3 fw-bold mt-5 about-heading"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                About <span>Me</span>
              </h2>
              <div
                className="about-img-box"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <img
                  src={girl}
                  className="mx-auto d-block about-img"
                  alt="Frontend Developer Areeba's Portfolio Image"
                />
                <span className="circle-spin"></span>
              </div>
              <h4
                className="display-6 display-md-5 display-lg-4 fw-bold about__subtitle"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                Frontend Developer!
              </h4>
              <p
                className="text-center about-description"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                Hi, I'm Areeba — a Web Designer & Frontend Web Developer
                specializing in creating visually engaging and user-friendly
                websites. I blend creative UI/UX design in Figma with
                responsive, functional code using HTML, CSS, JavaScript, React,
                and Bootstrap to bring digital ideas to life.
              </p>
              <button
                className="read-more-btn px-4 py-2 mt-3 mb-5"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-offset="0"
                data-aos-duration="1500"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
