import { useState, useEffect, useRef } from "react";
import "../CSS/project.css";
import Button from "../Components/Button";

const Navo = () => {
  const [isExtended, setIsExtended] = useState(false);
  const [isExtended2, setIsExtended2] = useState(false);
  const navbarRef = useRef(null);

  const toggleExtend = () => {
    setIsExtended(!isExtended);
  };

  const toggleExtend2 = () => {
    setIsExtended2(!isExtended2);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsExtended(false);
      setIsExtended2(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  

  const [duplicatedButton, setDuplicatedButton] = useState(null);
  const buttons = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'];

  const handleDuplicate = (button) => {
    setDuplicatedButton(button);
  };

  const handleRemove = () => {
    setDuplicatedButton(null);
  };

  return (
    <div ref={navbarRef} className={`navbar ${isExtended ? "extended" : ""}`}>
      <div className="navbar-container">
        <div className={`extended-content ${isExtended ? "slide-down" : ""}`}>
          <p>This is the extended content.</p>
        </div>
        <ul className="navbar-items">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">About</li>
          <li className="navbar-item">Contact</li>
        </ul>

        <div>
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleDuplicate(button)}
          disabled={duplicatedButton === button}
        >
          {button}
        </button>
      ))}
      {duplicatedButton && (
        <div>
          <button onClick={handleRemove}>{duplicatedButton}</button>
          <div className="ReplaceThis">Duplicated Button: {duplicatedButton}</div>
        </div>
      )}
    </div>


        {/* <button className="extend-button" onClick={handleExtend}>
          {isExtended ? 'Collapse' : 'Extend'}
        </button> */}
        <Button
          toggleExtend={toggleExtend}
          isExtended={isExtended}
          toggleExtend2={toggleExtend2}
          isExtended2={isExtended2}
        />
      </div>
    </div>
  );
};

export default Navo;
