import React from "react";
import Navbar from "../Components/Navbar1";
import "../CSS/project.css";
import { ProjectData } from "../Components/data/Projects";

const Projects = ({ theme }) => {

  console.log(ProjectData)

  return (
    <div className="project_page">
      <Navbar />
      <div className="Myprojects" id={theme}>
        <p style={{ textAlign: "center", marginBottom: 40, fontSize: 25 }} className="projectTitle">My Projects</p>
        <div className="projectHolder">
          {
            ProjectData.map((project) => (

              <div className="cardContainer">
              <div className={`projectCard`}>
                <div className="projectImage">
                  <img
                    src="/images/ChatApp.jpeg"
                    width="100%"
                    height="180px"
                    style={{ borderRadius: "5px" }}
                    alt=""
                  />
                </div>
                <p className="projecttitle">{project.name}</p>
                <div className="card_links">
                  <div className="more_btn">
                    <p>See More..</p>
                  </div>
                  <div className="github_link">
                    <a href="/car">
                      <p>Github</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            ))
          }

        </div>
      </div>
    </div>
  );
};

export default Projects;
