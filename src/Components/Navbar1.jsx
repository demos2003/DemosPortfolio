import React, { useContext } from "react";
import "../CSS/navbar.css";
import "../index.css";
import SwipeableTemporaryDrawer from "./SideNav";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../App";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="navBarHolder">
      <div className="LandingNavBar">
        <div className="NavStart">
          <img
            src="/images/DemosV3.png"
            alt=""
            height="40px"
            style={{ borderRadius: 10, marginTop: 1 }}
          />
        </div>
        <div className="NavmiddleSection">
          <div style={{cursor:"pointer"}}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="NavLinks"
              activeClass="active"
            >
              <p>Home</p>
            </Link>
          </div>
          <div style={{cursor:"pointer"}}>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="NavLinks"
              activeClass="active"
            >
              <p>Skills</p>
            </Link>
          </div>
          <div style={{cursor:"pointer"}}>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="NavLinks"
              activeClass="active"
            >
              <p>Projects</p>
            </Link>
          </div>
        </div>
        <div className="NavEnd">
          <div className="switch">
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
          <div className="NavBTN">
            <NavLink to="/contact">Lets Talk</NavLink>
          </div>
        </div>
      </div>
      <div className="hamburger">
        <SwipeableTemporaryDrawer />
      </div>
    </div>
  );
};

export default Navbar;
