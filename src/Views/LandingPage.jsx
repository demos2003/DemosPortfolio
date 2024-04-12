import React from "react";
import Navbar from "../Components/Navbar1";
import "../CSS/landing.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter, FiLinkedin } from "react-icons/fi";
import Typed from "react-typed";



const TypingEffect = () => {
  const phrases = ["Front-End Web Developer.", "Front-End Mobile Developer.", "Back-End Developer.", "Tech Enthusiast."];

  return (
    <div>
      <h4 style={{fontSize:31}}>
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
      <Navbar />

      <div className="midBody">
        <div className="landing_section_left">
        <div className="introTxt">
          <h1>Hi,  I'm Iyidemilade Nasiru, </h1>
          {/* <h1 className="colorChange">
           
          </h1> */}
          <h1 className="colorChange">
            BSc Software Engineering.
          </h1>
          <div className="mobileFont typeEffect">
            <TypingEffect className="typeEfect2" />
          </div>
          <h1 className="mobileFont Bitspace">Based In Lagos, Nigeria</h1>
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
          <div className="landinganimation">
            <iframe
              src="https://embed.lottiefiles.com/animation/63487"
              width={690}
              height={"100%"}
              title="LandingIframe"
              style={{ border: "none", marginTop: -30 }}

            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
