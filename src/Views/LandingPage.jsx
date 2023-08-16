import React from "react";
import Navbar from "../Components/Navbar1";
import "../CSS/landing.css";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter, FiLinkedin } from "react-icons/fi";
import { useState, useEffect } from "react";
import Typed from "react-typed";

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;
const AnimatedGradientText = styled.h1`
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "kern";
  font-size: 30px;
  font-weight: 700;
  line-height: 48px;
  overflow-wrap: break-word;

  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
`;

const TypingEffect = () => {
  const phrases = ["Front-End Web Developer", "Front-End Mobile Developer"];

  return (
    <div>
      <h4>
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
        <div className="introTxt">
          <h1>Hello, </h1>
          <AnimatedGradientText className="colorChange">
            I'm Demilade (DEMOS),
          </AnimatedGradientText>
          <div className="mobileFont typeEffect">
            <TypingEffect className="typeEfect2" />
            {/* <h1 style={{ fontSize: 16, marginLeft:5 }}> Developer</h1>{" "} */}
          </div>
          <h1 className="mobileFont Bitspace">Based In Lagos, Nigeria</h1>
          <div className="Bitmoji">
            <img src="/images/Bitmiji1.jpeg" width={250} />
          </div>
          <p className="Bitspace2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            ullam cupiditate officia quaerat aliquam quidem tempore quibusdam
            quis atque consequuntur? Repellendus, libero atque enim odio quas
            perspiciatis doloribus a magnam.
          </p>
          <div className="aboutBtn">
            <p>About Me</p>
            <AiOutlineArrowRight style={{ fontWeight: "bolder" }} />
          </div>
        </div>
        <div className="socialLinks link2">
          <div className="socialLinksHolder3"></div>
          <div className="socialLinksHolder2">
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
              width={800}
              height={500}
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
