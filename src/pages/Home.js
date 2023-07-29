import React from "react";
import "../styles/Home.css";

import Linked from "../assets/linkedin.png";
import github from "../assets/github.png";
import message from "../assets/message.png";
import profile from "../assets/profile.png";
import pdf from "../assets/Siddhesh Songire.pdf";
import ScrollToTopButton from "../components/ScrollToTopButton";

function Home() {
  return (
    <div className="home">
      <ScrollToTopButton />
      <div className="about">
        <h2> Hi, My name is Siddhesh </h2>
        <div className="prompt">
          <p> A software developer with a passion for learning and building.</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              justifyContent: "center",
            }}
          >
            <a
              href="https://www.linkedin.com/in/siddhesh-songire/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linked} alt="Example" className="icons-image" />
            </a>
            <a
              href="https://github.com/Siddhesh-Songire"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="Example" className="icons-image" />
            </a>
            <a
              href="mailto: siddheshsongire@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hoverEffect"
            >
              <img src={message} alt="Example" className="icons-image" />
            </a>

            <a href={pdf} target="_blank" rel="noopener noreferrer">
              <img src={profile} alt="Example" className="icons-image" />
            </a>
          </div>
        </div>
      </div>

      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>ReactJS ,HTML, CSS, NPM, BootStrap, MaterialUI,</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, REST, MySQL, MongoDB, AWS EC2, Netlify, AWS S3,
              MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span> C, C++, JavaScript, Java, Python, TypeScript</span>
          </li>
        </ol>
      </div>

      <div className="contact-container">
        <form
          method="POST"
          action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
          className="contact-form"
        >
          <div className="pb-8">
            <p className="contact-heading">Contact</p>
            <p className="contact-description"></p>
          </div>
          <input
            className="contact-input"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="contact-input"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="contact-textarea"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="contact-button">Let's Collaborate</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
