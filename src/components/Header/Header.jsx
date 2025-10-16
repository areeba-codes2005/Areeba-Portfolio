import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [activeId, setActiveId] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("div[id]");
      let scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPosition >= offset && scrollPosition < offset + height) {
          setActiveId(`#${id}`);
        }
      });
    };

    //clicks (hashchange)
    const handleHashChange = () => {
      setTimeout(() => {
        setActiveId(window.location.hash || "#home");
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    // Initial call (on page load)
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div>
      <header className="header fixed-top container-fluid">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand p-3" href="#" data-aos="fade-right">
              Areeba.
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li
                  className="nav-item p-3"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <a
                    className={`nav-link ${
                      activeId === "#home" ? "active" : ""
                    }`}
                    aria-current="page"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li
                  className="nav-item p-3"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <a
                    className={`nav-link ${
                      activeId === "#about" ? "active" : ""
                    }`}
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li
                  className="nav-item p-3"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <a
                    className={`nav-link ${
                      activeId === "#port" ? "active" : ""
                    }`}
                    href="#port"
                  >
                    Portfolio
                  </a>
                </li>
                <li
                  className="nav-item p-3"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  <a
                    className={`nav-link ${
                      activeId === "#skills" ? "active" : ""
                    }`}
                    href="#skills"
                  >
                    Skills
                  </a>
                </li>
                <li
                  className="nav-item p-3"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  <a
                    className={`nav-link ${
                      activeId === "#contact" ? "active" : ""
                    }`}
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
