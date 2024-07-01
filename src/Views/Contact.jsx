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
import { TailSpin } from "react-loader-spinner";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

AOS.init();

const Contact = () => {
  const [activeInfo, setActiveInfo] = useState(null);
  const [copied, setCopied] = useState(false);
  const [originalText, setOriginalText] = useState("");
  

  const fileToDownload = "http://localhost:3000/file_cv.pdf";

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

  const handleDownload = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const ContactUs = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
      user_name: '',
      user_email: '',
      user_phone: '',
      message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [displayDuration, setDisplayDuration] = useState(5000);
    const [isLoading, setIsLoading] = useState(false);


    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };



    const sendEmail = (e) => {
      e.preventDefault();
      setIsLoading(true); // Set loading to true when email sending starts

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
            toast.success("Demilade Adores Anastasia!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
            setTimeout(() => {
              setIsSubmitted(false); // Reset the submission status after the display duration
            }, displayDuration);
            setIsLoading(false); // Set loading to false when email is successfully sent
          },
          (error) => {
            console.log(error.text);
            toast.error("Failed to send the message. Please try again.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
            setIsLoading(false); // Set loading to false if an error occurs
          }
        );
    };

    return (
      <form ref={form} onSubmit={sendEmail}>
      <div className="formImputHolder">
        <div className="formcomponents">
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            className="textInput"
            value={formData.user_name}
            onChange={handleInputChange}
            placeholder="Nasiru Iyidemilade"
          />
          {errors.user_name && <span className="error">{errors.user_name}</span>}
        </div>
        <div className="formcomponents">
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            className="textInput"
            value={formData.user_email}
            onChange={handleInputChange}
            placeholder="ladenas202@gmail.com"
          />
          {errors.user_email && <span className="error">{errors.user_email}</span>}
        </div>
        <div className="formcomponents">
          <label>Phone Number</label>
          <input
            type="number"
            name="user_phone"
            className="textInput"
            value={formData.user_phone}
            onChange={handleInputChange}
            placeholder="+234 90 616 989 66"
          />
          {errors.user_phone && <span className="error">{errors.user_phone}</span>}
        </div>
        <div className="formcomponents">
          <label>Message</label>
          <textarea
            name="message"
            className="textAreaInput"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Thanks for reaching out.... "
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <div className="formcomponents">
          {isLoading ? (
            <div
              className="textInput2"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black',
              }}
            >
              <div>
                <TailSpin
                  visible={true}
                  height="30"
                  width="30"
                  color="blueviolet"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            </div>
          ) : (
            <input type="submit" value="Send" className="textInput2" />
          )}
        </div>
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
            onClick={() => handleDownload(fileToDownload)}
          >
            <GrMail style={{ marginLeft: 10 }} />
            <p style={{ marginLeft: 10 }}>Download Resume</p>
          </div>
        </div>
        <div className="icon_section_container2">
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
      <div className="Form-Container" style={{ zIndex: 1000 }}>
        <img src="/images/DemosV3.png" alt="" />
        <h2 className="cardHeader" style={{ marginTop: 67 }}>
          Leave A Message ?
        </h2>
        <div>
          <ContactUs />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
