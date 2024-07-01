import React from "react";
import Navbar from "../Components/Navbar1";
import SkillBar from "../Components/SkillBar";
import "../CSS/project.css";

const Skills = () => {
  return (
    <div className="skill_page">
      <Navbar />
      <div className="skillSectionContainer">
        <p
          style={{ textAlign: "center", marginBottom: 40, fontSize: 25 }}
          className="projectTitle"
        >
          My Skills
        </p>
        <div className="skillSection" id="about">
          <div className="contentabc">
            <div className="landinganimation">
              <iframe
                src="https://embed.lottiefiles.com/animation/109119"
                width={600}
                height={350}
                style={{ border: "none" }}
                title="SkillIframe"
              ></iframe>
            </div>
            <div className="serviceTexts">
              <p style={{ fontSize: 30 }}>How can I be of Services to You ?</p>
              <p>
                As a fullstack developer i am well versed with a lot of exciting
                and powerful technology mainly focusing on Javascript and Java
                based solutions, with more than 4 years of experience in web
                development and about 2 in mobile and backend development. Feel
                free to engage me on the contact page, which also has
                information which can be used to reach out to me.
              </p>
            </div>
          </div>
          <SkillBar />
        </div>
      </div>
    </div>
  );
};

export default Skills;
