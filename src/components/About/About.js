import React from "react";
import { Link } from "react-router-dom";

import "../../styles/About/About.scss";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about__container">
          <div className="about__header" id="about__heading">
            <h1 data-aos="fade-down" data-aos-delay="0" data-aos-offset="20">
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                A
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                B
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                O
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                U
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                T
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
            <p></p>
          </div>

          <div className="about__details-container">
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-once="true"
            >
              <Link to="/about/intro">
                <h1>
                  0<span>1</span>
                </h1>
                <h2>
                  H<span>ello,</span>
                </h2>
                <p>
                  I am <span>Priyanthi</span> <br /> Highly passoinate
                  full-stack Developer with more than 2 years of experience and
                  an AL/ML Enthusiast.
                </p>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <Link to="/about/experience">
                <h1>
                  0<span>2</span>
                </h1>
                <h2>
                  E<span>xperience</span>
                </h2>
                <p>
                  <span>1.5 years of experience.</span>
                  <br />I have more than 1.5 years of experience in developing
                  highly responsive static websites using React.js and Vue.js
                  also dynamic websites in MERN stack and Laravel.
                </p>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="50"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <Link to="/about/internships">
                <h1>
                  0<span>3</span>
                </h1>
                <h2>
                  I<span>ndustrial Experience</span>
                </h2>
                <p>
                  <span>Current Employer -</span> <br />
                </p>
                <ul>
                  <li>
                    <span>Iphonik Pvt Ltd</span> - Associate Software Developer{" "}
                  </li>
                  <li>
                    <span>May 2024 - present </span>
                  </li>
                  {/* <li>
                    <span>XYZ Pvt Ltd</span> - Front-end Developer{" "}
                  </li> */}
                </ul>
                <br />
                <p>
                  <span>Interned at -</span> <br />
                </p>
                <ul>
                  <li>
                    <span>Upview Technologies</span> - Full-stack Developer{" "}
                  </li>
                  <li>
                    <span>December 2021 - March 2023 </span>
                  </li>
                  {/* <li>
                    <span>XYZ Pvt Ltd</span> - Front-end Developer{" "}
                  </li> */}
                </ul>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="700"
              data-aos-once="true"
            >
              <Link to="/about/graduation">
                <h1>
                  0<span>4</span>
                </h1>
                <h2>
                  S<span>oftware Engineering</span>
                </h2>
                <p>
                  <span>Srilanka Institue Of Information Technology</span>
                  <br />
                  February 2020 - January 2024
                  <br />
                  <br />
                  <b>
                    BSc (Hons) in Information Technology Specialized in Software
                    Engineering
                  </b>
                  {/* <br />
                  Grade - Second Class Honours */}
                  <br />
                  CGPA - 3.34
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
