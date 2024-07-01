import React from "react";
import Navbar from "../Components/Navbar1";
import "../CSS/landing.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter, FiLinkedin } from "react-icons/fi";
import Typed from "react-typed";
import Skills from "./Skills";
import Projects from "./Projects";
import Headroom from "react-headroom";

const TypingEffect = () => {
  const phrases = [
    "Mobile Applications.",
    "Web Applications.",
    "Reliable and Performant APIs.",
    "Secure Database Systems.",
  ];

  return (
    <div>
      <h4 className="typed_phrase">
        <Typed
          strings={phrases}
          typeSpeed={50}
          backSpeed={30}
          loop
          backDelay={5000}
        />
      </h4>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="LandingBody">
      <Headroom>
        <Navbar />
      </Headroom>
      <div className="midBody" id="home">
        <div className="landing_section_left">
          <div className="introTxt">
            <h1 style={{ color: "blueviolet" }}>Hi, my name is</h1>
            <h1 className="introTxt_name">Nasiru Iyidemilade.</h1>
            <div className="introTxt_skills">
              <h1 className="introText_skills_text">I build </h1>
              <TypingEffect className="typeEfect2" />
            </div>
            <h1 className="colorChange">
              I'm a software Engineer specializing in building exceptional
              digital experiences, with real life use cases utilizing new and
              exciting technology
            </h1>
            <div className="aboutBtn">
              <p>About Me</p>
              <AiOutlineArrowRight style={{ fontWeight: "bolder" }} />
            </div>
          </div>
          <div className="icon_section_container">
            <div className="iconHolder">
              <FiTwitter fontSize={20} />
            </div>

            <div className="iconHolder">
              <AiOutlineInstagram fontSize={20} />
            </div>
            <div className="iconHolder">
              <FiLinkedin fontSize={20} />
            </div>
          </div>
        </div>
        <div className="introImg">
          <img src="/images/img2.png" width={500} alt="" />
        </div>
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
};

export default LandingPage;
