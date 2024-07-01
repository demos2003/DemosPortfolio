import React, { useState } from "react";
import "../CSS/skillbar.css";

const skills = [
  { name: "HTML & CSS", percentage: "90%" },
  { name: "TYPESCRIPT", percentage: "90%" },
  { name: "JAVASCRIPT", percentage: "80%" },
  { name: "REACT JS", percentage: "83%" },
  { name: "REACT NATIVE", percentage: "80%" },
  { name: "JAVA (Spring boot)", percentage: "90%" },
  { name: "GIT & GITHUB", percentage: "80%" },
  { name: "NODE JS", percentage: "70%" },
  { name: "MONGODB & POSTGRESQL", percentage: "90%" },
];

const SkillBar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="skillItems">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="skillItem"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="skillInfo">
            <p>{skill.name}</p>
            <p>{skill.percentage}</p>
          </div>
          <div
            className={`progress-line ${hoveredIndex === index ? 'show' : 'hide'}`}
            data-percent={skill.percentage}
          >
            <span style={{ width: skill.percentage }}></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBar;
