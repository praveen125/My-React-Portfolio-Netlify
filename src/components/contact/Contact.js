import React, { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { ThemeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [done, setDone] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qa3ktm6",
        "template_hwqsvrc",
        formRef.current,
        "user_e02EKmb0qBMkNnnzVJnQd"
      )
      .then(
        (result) => {
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 8185978750
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              praveensurisetti0@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              kotapadu, Visakhapatnam 531034 India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "#fff" : "black",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "#fff" : "black",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "#fff" : "black",
              }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "#fff" : "black",
              }}
              name="message"
              placeholder="Message"
              rows="5"
            />
            <button>Submit</button>
            <br /> {done && <h4 className="c-wish">Thank You...</h4>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
