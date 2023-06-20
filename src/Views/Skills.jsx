import React from "react";
import Navbar from "../Components/Navbar1";
import SkillBar from "../Components/SkillBar";

const Skills = () => {
  return (
    <div>
      <Navbar />
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
            <p>Our Services</p>
            <p style={{ fontSize: 30 }}>How can I be of Services to You.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              enim nesciunt optio veniam nulla, natus doloribus. Rerum,
              cupiditate inventore. Explicabo aperiam nisi, accusantium enim
              illo autem quia tempore molestias deserunt.
            </p>
          </div>
        </div>

        <SkillBar />
      </div>
    </div>
  );
};

export default Skills;
