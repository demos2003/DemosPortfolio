import React from "react";
import Navbar from "../Components/Navbar1";
import SimpleAccordion from "../Components/SimpleAccordion";
import "../CSS/project.css";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="Myprojects">
        <p style={{ textAlign: "center" }}>My Projects</p>
        <div className="projectHolder">
          <div className="cardContainer">
            <div className="projectCard">
              <div className="front">
                <div className="projectImage"></div>
              </div>
              <div className="back">
                <p>Back of card</p>
              </div>
            </div>
          </div>
          <div className="cardContainer">
            <div className="projectCard">
              <div className="front">
                <div className="projectImage"></div>
              </div>
              <div className="back">
                <p>Back of card</p>
              </div>
            </div>
          </div>
          <div className="cardContainer">
            <div className="projectCard">
              <div className="front">
                <div className="projectImage"></div>
              </div>
              <div className="back">
                <p>Back of card</p>
              </div>
            </div>
          </div>
          <div className="cardContainer">
            <div className="projectCard">
              <div className="front">
                <div className="projectImage"></div>
              </div>
              <div className="back">
                <p>Back of card</p>
              </div>
            </div>
          </div>
          <div className="cardContainer">
            <div className="projectCard">
              <div className="front">
                <div className="projectImage"></div>
              </div>
              <div className="back">
                <p>Project Description</p>
                <div className="back-style">
                  <p><b>Description</b> : Automated Payroll Syatem based on
                  Staff attendance and Location.</p>
                  <p><b>Stack</b>: #React JS, #BootStrapp, #CSS, #Node Js </p>
                  <p><b>GitHub Link</b>: Opeifa.olutoyin@premierfeedsltd.com</p>
                  <p><b>Duration</b>: 3 weeks</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cardContainer">
            <div className="projectCard">
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
