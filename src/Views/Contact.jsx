import React from "react";
import "../CSS/contact.css";
import { BsTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter, FiLinkedin } from "react-icons/fi";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const Contact = () => {
  const [activeInfo, setActiveInfo] = useState(null);
  const [copied, setCopied] = useState(false);
  const [originalText, setOriginalText] = useState("");

  const handleClick = (content) => {
    setActiveInfo(content);
    navigator.clipboard.writeText(content);
    setCopied(true);
    setOriginalText(content);

    // Reset the "copied" state after a short delay
    setTimeout(() => {
      setCopied(false);
    }, 3000);

    if (content === "Download Resume") {
      const fileUrl = "https://drive.google.com/drive/my-drive";
      fetch(fileUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "document.pdf"; // Set the desired filename here
          link.click();
          URL.revokeObjectURL(url);
        })
        .catch((error) => console.log(error));
    }
  };

  const ContactUs = () => {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [displayDuration, setDisplayDuration] = useState(5000);

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_gy2fa8l",
          "template_4ps33ye",
          form.current,
          "rYssq24rMG1psukWK"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            setIsSubmitted(true); // Set the submission status to true
            form.current.reset(); // Reset the form inputs
            setTimeout(() => {
              setIsSubmitted(false); // Reset the submission status after the display duration
            }, displayDuration);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

    return (
      <form ref={form} onSubmit={sendEmail}>
        <div className="formImputHolder">
          <div className="formcomponents">
            <label>Name</label>
            <input type="text" name="user_name" className="textInput" />
          </div>
          <div className="formcomponents">
            <label>Email</label>
            <input type="email" name="user_email" className="textInput" />
          </div>
          <div className="formcomponents">
            <label>Message</label>
            <textarea name="message" className="textInput" />
          </div>
          <div className="formcomponents">
            <input type="submit" value="Send" className="textInput2" />
          </div>
          {isSubmitted && (
            <div data-aos="fade-left" className="messageCard">
              Message Submitted
            </div>
          )}
        </div>
      </form>
    );
  };

  return (
    <div className="contactHolder">
      <div className="contactInfo">
        <Link to="/" className="iconHolder2">
          <BiArrowBack fontSize={20} />
        </Link>

        <h1> Do you need Help ?</h1>
        <p>Fill up the form and our team will get back to you</p>
        <p> in the next 24hrs</p>
        <div className="contactInfoCopy">
          <div
            className={`infoHolder ${
              activeInfo === "+23451066930" ? "active1" : ""
            }`}
            onClick={() => handleClick("+23451066930")}
          >
            <BsTelephoneFill style={{ marginLeft: 10 }} />
            <p style={{ marginLeft: 10 }}>
              {activeInfo === "+23451066930" && copied
                ? "Copied!"
                : "+23451066930"}
            </p>
          </div>
          <div
            className={`infoHolder ${
              activeInfo === "Lagos, Nigeria" ? "active1" : ""
            }`}
            onClick={() => handleClick("Lagos, Nigeria")}
          >
            <HiLocationMarker style={{ marginLeft: 10 }} />
            <p style={{ marginLeft: 10 }}>
              {activeInfo === "Lagos, Nigeria" && copied
                ? "Copied!"
                : "Lagos, Nigeria"}
            </p>
          </div>
          <div
            className={`infoHolder ${
              activeInfo === "ladenas202@gmail.com" ? "active1" : ""
            }`}
            onClick={() => handleClick("ladenas202@gmail.com")}
          >
            <GrMail style={{ marginLeft: 10 }} />
            <p style={{ marginLeft: 10 }}>
              {activeInfo === "ladenas202@gmail.com" && copied
                ? "Copied!"
                : "ladenas202@gmail.com"}
            </p>
          </div>
          <div
            className={`infoHolder ${
              activeInfo === "Download Resume" ? "active1" : ""
            }`}
            onClick={() => handleClick("Download Resume")}
          >
            <GrMail style={{ marginLeft: 10 }} />
            <p style={{ marginLeft: 10 }}>Download Resume</p>
          </div>
        </div>
        <div className="socialLinks">
          <div className="socialLinksHolder">
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
      </div>

      {/* <div className="contactFormHolder">
        <div className="contactForm"> */}
      <div className="Form-Container">
        <h2 className="cardHeader" style={{marginTop:-40}}>Leave A Message ?</h2>
        <ContactUs />
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default Contact;
