import React from "react";
import "../CSS/navbar.css";
import "../index.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropdownToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="navBarHolder">
      <div className="LandingNavBar">
        <div className="NavStart">
          <img src="/images/DemosV3.png" height="40px" />
        </div>
        <div className="NavmiddleSection">
          <div>
            <NavLink to="/" className="NavLinks" activeClassName="active">
              <p>Home</p>
            </NavLink>
          </div>

          <div>
            <NavLink to="/skills" className="NavLinks" activeClassName="active">
              <p>Skills</p>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/projects"
              className="NavLinks"
              activeClassName="active"
            >
              <p>Projects</p>
            </NavLink>
          </div>
        </div>
        <div className="NavEnd">
          <div className="NavBTN">
            <NavLink to="/contact">Lets Talk</NavLink>
          </div>
          <div className="hamburger" onClick={() => dropdownToggle()}>
            <GiHamburgerMenu />
          </div>
          {isMenuOpen && (
            <div className="DropdownContent">
              {/* <div className="contentSection1"> */}
              <Link to="/" className="DropdownLinks">
                Home
              </Link>
              <Link to="/skills" className="DropdownLinks">
                Skills
              </Link>
              {/* </div> */}
              {/* <div className="contentSection2"> */}
              <Link to="/projects" className="DropdownLinks">
                Projects
              </Link>
              <Link to="/contact" className="DropdownLinks">
                Contact
              </Link>
              {/* </div> */}
            </div>
          )}
        </div>
      </div>
      <div className="progressMainWrapper">
        <div
          className="progressMainStyle"
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
