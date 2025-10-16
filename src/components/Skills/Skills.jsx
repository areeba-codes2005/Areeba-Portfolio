import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <div className="skills container-fluid" id="skills">
        <div className="container pb-5">
          <h2
            className="text-center display-4 display-md-4 display-lg-3 fw-bold pt-5 skills-heading"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            My <span>Skills</span>
          </h2>
          <div className="row justify-content-evenly">
            <div className="col-12 col-md-6 col-lg-6 g-5 column">
              <h3
                className="fs-4 fw-bold pb-3 skills-subheading"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Coding Skills
              </h3>
              <div
                className="skills-box"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div className="skills-content">
                  <div className="skills-progress">
                    <h3 className="fs-6">
                      HTML <span>90%</span>
                    </h3>
                    <div className="bar">
                      <span></span>
                    </div>
                  </div>
                  <div className="skills-progress">
                    <h3 className="fs-6">
                      CSS <span>80%</span>
                    </h3>
                    <div className="bar">
                      <span></span>
                    </div>
                  </div>
                  <div className="skills-progress">
                    <h3 className="fs-6">
                      JavaScript <span>65%</span>
                    </h3>
                    <div className="bar">
                      <span></span>
                    </div>
                  </div>
                  <div className="skills-progress">
                    <h3 className="fs-6">
                      Bootstrap <span>90%</span>
                    </h3>
                    <div className="bar">
                      <span></span>
                    </div>
                  </div>
                  <div className="skills-progress">
                    <h3 className="fs-6">
                      React.js <span>80%</span>
                    </h3>
                    <div className="bar">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 g-5 column">
              <h3
                className="fs-4 fw-bold pb-3 skills-subheading"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                Professional Skills
              </h3>
              <div
                className="skills-box"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <div className="skills-content">
                  <div className="skills-progress">
                    <h3 className="fs-6">
                      Web Designer<span>95%</span>
                    </h3>
                    <div className="bar">
                      <span></span>
                    </div>
                  </div>
                  <div className="skills-progress">
                    <h3 className="fs-6">
                      Web Developer<span>80%</span>
                    </h3>
                    <div className="bar">
                      <span></span>
                    </div>
                  </div>
                  <div className="skills-progress">
                    <h3 className="fs-6">
                      Figma<span>85%</span>
                    </h3>
                    <div className="bar">
                      <span></span>
                    </div>
                  </div>
                  <div className="skills-progress">
                    <h3 className="fs-6">
                      Canva<span>80%</span>
                    </h3>
                    <div className="bar">
                      <span></span>
                    </div>
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

export default Skills;
