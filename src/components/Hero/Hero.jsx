import React, { useEffect, useState } from "react";
import girl from "../../assets/frontend-girl.png";
import "./Hero.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  const [startTyping, setStartTyping] = useState(false);
  const [outlined, setOutlined] = useState(false);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setStartTyping(true); // start typing after delay
    }, 4000); // wait 4 seconds

    const finishDelay = setTimeout(() => {
      setOutlined(true); // apply stroke style
    }, 6500); // 4s wait + 2.5s typing = 6.5s

    return () => {
      clearTimeout(startDelay);
      clearTimeout(finishDelay);
    };
  }, []);

  return (
    <div>
      <div className="hero container-fluid" id="home">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-md-6">
              <h1
                className="display-5 display-md-4 display-lg-3 fw-bold hero-heading"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Hi, I'm Areeba
              </h1>
              <h3
                className={`display-6 display-md-5 display-lg-4 hero__subtitle text-nowrap ${
                  outlined ? "outlined" : ""
                }`}
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Frontend Developer
              </h3>
              <p
                className="hero-subtext mt-4 mb-4"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                Hi I am Areeba, a passionate Web Developer. Welcome to my
                portfolio.
              </p>
              <div className="d-flex flex-wrap gap-5">
                <button
                  type="button"
                  className="px-4 py-2 hire-button but"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  Hire Me
                </button>
                <button
                  type="button"
                  className="px-4 py-2 talk-button but"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  Let's Talk
                </button>
              </div>
              <div className="ico-box">
                <a
                  href="#"
                  data-aos="fade-right"
                  data-aos-delay="600"
                  data-aos-offset="0"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  data-aos="fade-right"
                  data-aos-delay="700"
                  data-aos-offset="0"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="www.linkedin.com/in/areebahammad"
                  data-aos="fade-right"
                  data-aos-delay="800"
                  data-aos-offset="0"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div
              className="col-12 col-md-6 position-relative"
              data-aos="fade-right"
              data-aos-delay="900"
            >
              <img
                src={girl}
                className="d-block mx-lg-auto img-fluid"
                alt="Areeba – Frontend Developer"
                loading="lazy"
              />
              <div className="hero-img"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
