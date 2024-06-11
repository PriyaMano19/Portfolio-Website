import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faUnity,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import "../../styles/Contact/Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/send", formData)
      .then((response) => {
        console.log("Message sent: ", response.data);
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending message: ", error);
        alert("Error sending message.");
      });
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="contact__header">
          <h1>
            <span data-aos="fade-down" data-aos-delay="0" data-aos-offset="200">
              C
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-offset="200"
            >
              O
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-offset="200"
            >
              N
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="600"
              data-aos-offset="200"
            >
              T
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="800"
              data-aos-offset="200"
            >
              A
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="1000"
              data-aos-offset="200"
            >
              C
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="1200"
              data-aos-offset="200"
            >
              T
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="1400"
              data-aos-offset="200"
            >
              .
            </span>
          </h1>
        </div>
        <div className="contact__container">
          <div className="contact__details">
            <div className="contact__form" data-aos="fade-up">
              <form name="contact" method="post" onSubmit={handleSubmit}>
                <p className="contact__form-group">
                  <label htmlFor="name">Name: </label>
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeholder="Enter name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </p>
                <p className="contact__form-group">
                  <label htmlFor="email">Email: </label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Enter email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </p>
                <p className="contact__form-group">
                  <label htmlFor="message">Concern: </label>
                  <textarea
                    name="message"
                    id="contact__message"
                    cols="20"
                    rows="5"
                    placeholder="Type your messsage"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </p>
                <button type="submit" className="contact__send-btn">
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="contact__info" data-aos="fade-up">
            <h3 className="contact__info-title">Let's Connect</h3>
            <div className="contact__info-details">
              <ul>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faLocationDot} size="2x" />
                  <p>
                    <span>Address:&nbsp;&nbsp;</span>Dehiwala, Colombo
                  </p>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faPhone} size="2x" />
                  <p>
                    <span>Phone:</span>&nbsp;&nbsp;(+94) 767616605
                  </p>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  <p>
                    <span>Email:&nbsp;&nbsp;</span>
                    rajamanoharanpriyanthi@gmail.com
                  </p>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faSquareCheck} size="2x" />
                  <span>FREELANCE</span>
                </li>
              </ul>
            </div>
            <div className="contact__social">
              <p className="contact__linkedin">
                <a
                  href="https://www.linkedin.com/in/priyanthi-rajamanoharan-909526215/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </p>

              <p className="contact__github">
                <a
                  href="https://github.com/PriyaMano19"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </p>

              <p className="contact__youtube">
                <a
                  href="https://www.remotehub.com/priyanthi.rajamanoharan"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faUnity} size="2x" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
