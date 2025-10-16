import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact container-fluid" id="contact">
        <div className="container">
          <h2
            className="text-center display-4 display-md-4 display-lg-3 fw-bold pt-5 pb-5 contact-heading"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Contact <span>Me!</span>
          </h2>
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-10">
              <form>
                <div className="input-box">
                  <div
                    className="input-field d-flex justify-content-center align-items-center"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <input
                      type="text"
                      required
                      name=""
                      id=""
                      className="fs-6"
                      placeholder="Full Name"
                    />
                    <span className="focus"></span>
                  </div>
                  <div
                    className="input-field d-flex justify-content-center align-items-center"
                    data-aos="fade-right"
                    data-aos-delay="300"
                  >
                    <input
                      type="text"
                      required
                      className="fs-6"
                      name=""
                      id=""
                      placeholder="Email Address"
                    />
                    <span className="focus"></span>
                  </div>
                </div>
                <div className="input-box">
                  <div
                    className="input-field d-flex justify-content-center align-items-center"
                    data-aos="fade-right"
                    data-aos-delay="400"
                  >
                    <input
                      type="number"
                      required
                      name=""
                      id=""
                      className="fs-6"
                      placeholder="Mobile Number"
                    />
                    <span className="focus"></span>
                  </div>
                  <div
                    className="input-field d-flex justify-content-center align-items-center"
                    data-aos="fade-right"
                    data-aos-delay="500"
                  >
                    <input
                      type="text"
                      required
                      name=""
                      id=""
                      className="fs-6"
                      placeholder="Email Subject"
                    />
                    <span className="focus"></span>
                  </div>
                </div>
                <div
                  className="textarea-field d-flex justify-content-center align-items-center"
                  data-aos="fade-right"
                  data-aos-delay="600"
                >
                  <textarea
                    name=""
                    id=""
                    className="fs-6"
                    cols={30}
                    rows={10}
                    placeholder="Your Message"
                    required
                  ></textarea>
                  <span className="focus"></span>
                </div>
                <div
                  className="d-flex justify-content-center align-items-center btn-box"
                  data-aos="fade-right"
                  data-aos-delay="600"
                  data-aos-offset="0"
                >
                  <button
                    className="submit-btn px-5 py-2 mt-3 mb-5"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
