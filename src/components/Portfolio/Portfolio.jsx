import React from "react";
import "./Portfolio.css";
import Portfolioimg1 from "../../assets/Portfolioimg1.png";
import Portfolioimg2 from "../../assets/Portfolioimg2.png";
import Portfolioimg3 from "../../assets/Portfolioimg3.png";
import Portfolioimg4 from "../../assets/Portfolioimg4.png";
import Portfolioimg5 from "../../assets/Portfolioimg5.png";
import Portfolioimg6 from "../../assets/Portfolioimg6.png";

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio container-fluid" id="port">
        <div className="container pb-5">
          <h2
            className="text-center display-5 display-md-4 display-lg-3 fw-bold pt-5 port-heading"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            What <span>I've Built</span>
          </h2>
          <div className="row d-flex justify-content-around mt-5">
            <div
              className="col-12 col-md-5 col-lg-5"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="project-box">
                <div className="design-box1">
                  <div className="design-box">
                    <img
                      src={Portfolioimg1}
                      alt="e-commerce website screenshot"
                      className="img-fluid"
                    />
                    <h6 className="fs-6 fs-md-5 fs-lg-4 web-title pt-3">
                      e-commerce website
                    </h6>
                    <p className="pro-des">
                      Technologies Used: React.js, HTML5, CSS3, Bootstrap 5
                    </p>
                    <a
                      href="https://areeba-codes2005.github.io/furniture/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 project-btn"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-5 col-lg-5"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="project-box">
                <div className="design-box1">
                  <div className="design-box mt-3 mt-md-0">
                    <img
                      src={Portfolioimg2}
                      alt="Coffee website screenshot"
                      className="img-fluid"
                    />
                    <h6 className="fs-6 fs-md-5 fs-lg-4 web-title pt-3">
                      Coffee website
                    </h6>
                    <p className="pro-des">
                      Technologies Used: React.js, HTML5, CSS3, Bootstrap 5
                    </p>
                    <a
                      href="https://areeba-codes2005.github.io/coffee-commerce/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 project-btn"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-around">
            <div
              className="col-12 col-md-5 col-lg-5"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div className="project-box">
                <div className="design-box1">
                  <div className="design-box mt-3">
                    <img
                      src={Portfolioimg3}
                      alt="Watches website screenshot"
                      className="img-fluid"
                    />
                    <h6 className="fs-6 fs-md-5 fs-lg-4 web-title pt-3">
                      Watches website
                    </h6>
                    <p className="pro-des">
                      Technologies Used: React.js, HTML5, CSS3, Bootstrap 5
                    </p>
                    <a
                      href="https://areeba-codes2005.github.io/watches-commerce/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 project-btn"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-5 col-lg-5"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <div className="project-box">
                <div className="design-box1">
                  <div className="design-box mt-3">
                    <img
                      src={Portfolioimg4}
                      alt="Portfolio website screenshot"
                      className="img-fluid"
                    />
                    <h6 className="fs-6 fs-md-5 fs-lg-4 web-title pt-3">
                      Portfolio website
                    </h6>
                    <p className="pro-des">
                      Technologies Used: HTML5, CSS3,
                      <br /> Bootstrap 5
                    </p>
                    <a
                      href="https://areeba-codes2005.github.io/portfolio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 project-btn"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-around">
            <div
              className="col-12 col-md-5 col-lg-5"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <div className="project-box">
                <div className="design-box1">
                  <div className="design-box mt-3">
                    <img
                      src={Portfolioimg5}
                      alt="T shirt website screenshot"
                      className="img-fluid"
                    />
                    <h6 className="fs-6 fs-md-5 fs-lg-4 web-title pt-3">
                      T shirt website
                    </h6>
                    <p className="pro-des">
                      Technologies Used: HTML5, CSS3, Bootstrap 5
                    </p>
                    <a
                      href="https://areeba-codes2005.github.io/T-Shirt-Store/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 project-btn"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-5 col-lg-5"
              data-aos="fade-right"
              data-aos-delay="700"
            >
              <div className="project-box">
                <div className="design-box1">
                  <div className="design-box mt-3">
                    <img
                      src={Portfolioimg6}
                      alt="Watch website screenshot"
                      className="img-fluid"
                    />
                    <h6 className="fs-6 fs-md-5 fs-lg-4 web-title pt-3">
                      Watch website
                    </h6>
                    <p className="pro-des">
                      Technologies Used: HTML5, CSS3, Bootstrap 5
                    </p>
                    <a
                      href="https://areeba-codes2005.github.io/watch/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 project-btn"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
