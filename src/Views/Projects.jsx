import React from "react";
import Navbar from "../Components/Navbar1";
import { useState } from "react";
import "../CSS/project.css";

const Projects = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <Navbar />
      <div className="Myprojects">
        <p style={{ textAlign: "center" }}>My Projects</p>
        <div className="projectHolder">
          <div className="cardContainer" onClick={toggleFlip}>
            <div className={`projectCard ${isFlipped ? "flipped" : ""}`}>
              <div className="front">
                <div className="projectImage">
                  <img
                    src="/images/ChatApp.jpeg"
                    width="100%"
                    height="180px"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <p style={{ color: "blueviolet" }}>Simple Chat App</p>
              </div>
              <div className="back">
                <p>Project Description</p>
                <div className="back-style">
                  <p>
                    <b>Description</b> : A Simple Chat App
                  </p>
                  <p>
                    <b>Stack</b>: #React Native, #CSS, #Firebase{" "}
                  </p>
                  <p>
                    <b>GitHub Link</b>: Opeifa.olutoyin@premierfeedsltd.com
                  </p>
                  <p>
                    <b>Duration</b>: 1 week
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cardContainer" onClick={toggleFlip}>
            <div className={`projectCard ${isFlipped ? "flipped" : ""}`}>
              <div className="front">
                <div className="projectImage">
                  <img
                    src="/images/IgClone.jpeg"
                    width="100%"
                    height="180px"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <p style={{ color: "blueviolet" }}>Instagram Clone</p>
              </div>
              <div className="back">
                <p>Back of card</p>
              </div>
            </div>
          </div>
          <div className="cardContainer" onClick={toggleFlip}>
            <div className={`projectCard ${isFlipped ? "flipped" : ""}`}>
              <div className="front">
                <div className="projectImage"></div>
              </div>
              <div className="back">
                <p>Back of card</p>
              </div>
            </div>
          </div>
          <div className="cardContainer" onClick={toggleFlip}>
            <div className={`projectCard ${isFlipped ? "flipped" : ""}`}>
              <div className="front">
                <div className="projectImage"></div>
              </div>
              <div className="back">
                <p>Back of card</p>
              </div>
            </div>
          </div>
          <div className="cardContainer" onClick={toggleFlip}>
            <div className={`projectCard ${isFlipped ? "flipped" : ""}`}>
              <div className="front">
                <div className="projectImage">
                  <img
                    src="/images/payroll.png"
                    width="100%"
                    height="180px"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <p style={{ color: "blueviolet" }}>Automated Payroll System</p>
              </div>
              <div className="back">
                <p>Project Description</p>
                <div className="back-style">
                  <p>
                    <b>Description</b> : Automated Payroll Syatem based on Staff
                    attendance and Location.
                  </p>
                  <p>
                    <b>Stack</b>: #React JS, #BootStrapp, #CSS, #Node Js{" "}
                  </p>
                  <p>
                    <b>GitHub Link</b>: Opeifa.olutoyin@premierfeedsltd.com
                  </p>
                  <p>
                    <b>Duration</b>: 3 weeks
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cardContainer" onClick={toggleFlip}>
            <div className={`projectCard ${isFlipped ? "flipped" : ""}`}>
              <div className="front">
                <div className="projectImage"></div>
              </div>
              <div className="back">
                <p>Back of card</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
