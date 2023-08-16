import React from "react";
import Navbar from "../Components/Navbar1";
import "../CSS/landing.css";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter, FiLinkedin } from "react-icons/fi";
import { useState, useEffect } from 'react';


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
  const [text, setText] = useState('');
  const phrases = ['Front-End Web ', 'Front-End Mobile'];

  useEffect(() => {
    let currentPhrase = 0;
    let currentText = '';
    let isDeleting = false;
    let currentIndex = 0;

    const type = () => {
      const currentPhraseLength = phrases[currentPhrase].length;

      if (isDeleting) {
        // Deleting characters
        currentText = phrases[currentPhrase].substring(0, currentIndex - 1);
        currentIndex--;

        if (currentText === '') {
          // Deleting complete for current phrase
          isDeleting = false;
          currentPhrase = (currentPhrase + 1) % phrases.length;
        }
      } else {
        // Typing characters
        currentText = phrases[currentPhrase].substring(0, currentIndex + 1);
        currentIndex++;

        if (currentText === phrases[currentPhrase]) {
          // Typing complete for current phrase
          isDeleting = true;
        }
      }

      setText(currentText);
    };

    const intervalId = setInterval(type, 200);

    return () => clearInterval(intervalId);
  }, []);

  return <h1 style={{marginRight:10, fontSize:16}}>{text }</h1>;
};



const LandingPage = () => {

  return (
    <div className="LandingBody">
       <Navbar  />
      <div className="midBody">
        <div className="introTxt" >
          <h1>Hello, </h1>
          <AnimatedGradientText className="colorChange">
            I'm Demilade (DEMOS),
          </AnimatedGradientText>
          <div className="mobileFont typeEffect"><TypingEffect className="typeEfect2"/><h1 style={{ fontSize:16}}> Developer</h1> </div>
          <h1 className="mobileFont Bitspace">Based In Lagos, Nigeria</h1>
          <div className="Bitmoji">
            <img src="/images/Bitmiji1.jpeg" width={250}/>
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
