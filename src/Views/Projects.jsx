import React from "react";
import "../CSS/project.css";
import { ProjectData } from "../Components/data/Projects";
import { Link } from "react-router-dom";

const Projects = ({ theme }) => {

  console.log(ProjectData)

  return (
    <div className="project_page">

      <div className="Myprojects" id={theme}>
        <p style={{ textAlign: "center", marginBottom: 40, fontSize: 25 }} className="projectTitle">My Projects</p>
        <div className="projectHolder">
          {
            ProjectData.map((project) => (

              <div className="cardContainer">
              <div className={`projectCard`}>
                <div className="projectImage">
                  <img
                    src={project.image}
                    width="100%"
                    height="180px"
                    style={{ borderRadius: "5px" }}
                    alt=""
                  />
                </div>
                <p className="projecttitle">{project.name}</p>
                <div className="card_links">
                    <Link to={`/projectInfo/${project.id}`} className="more_btn">
                    <p>See More..</p>
                    </Link>
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
