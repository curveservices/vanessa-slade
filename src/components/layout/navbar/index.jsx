import {
  faBars,
  faClose,
  faEnvelope,
  faSchool,
  faSuitcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import logo1 from "../../../assets/images/logobgr1.png";
import "./index.scss";
import Button from "../../button";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <NavLink to="/">
        <div className="title-container">
          <img src={logo1} className="logo" alt="Telegraph tutoring" />
        </div>
      </NavLink>
      <nav className={showNav ? "mobile-show" : ""}>
        {/* <NavLink
                  to="/"
                  title="Home"
                  className="home-link"
                  activeclassname="active"
                  exact="true"
                  onClick={() => setShowNav(false)}
              >
                  <FontAwesomeIcon icon={faHouseChimney} className="mobile-icon" />
                  <div className="text">Home</div>
              </NavLink> */}
        <NavLink
          to="tuition"
          title="Tuition"
          className="link"
          activeclassname="active"
          exact="true"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSchool} className="mobile-icon" />
          <div className="text">Tuition</div>
        </NavLink>
        <NavLink
          to="subjects"
          title="Subjects"
          className="link"
          activeclassname="active"
          exact="true"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} className="mobile-icon" />
          <div className="dropdown">
            <div className="text">Subjects</div>
            {/* <div className="dropdown-content">
                            <div className="drop-inner">
                                <NavLink
                                    to="english"
                                    title="English"
                                    className="link"
                                    activeclassname="active"
                                    exact="true"
                                    onClick={() => setShowNav(false)}
                                >
                                  <FontAwesomeIcon icon={faPenAlt} /> English
                                </NavLink>
                                <NavLink
                                    to="maths"
                                    title="Maths"
                                    className="link"
                                    activeclassname="active"
                                    exact="true"
                                    onClick={() => setShowNav(false)}
                                >
                                  <FontAwesomeIcon icon={faPieChart} /> Maths
                                </NavLink>
                                <NavLink
                                    to="11-pluus"
                                    title="11 Plus"
                                    className="link"
                                    activeclassname="active"
                                    exact="true"
                                    onClick={() => setShowNav(false)}
                                >
                                    11 Plus Prep
                                </NavLink>
                            </div>
                        </div> */}
          </div>
        </NavLink>
        <NavLink
          to="resources"
          title="Resources"
          className="link"
          activeclassname="active"
          exact="true"
          onClick={() => setShowNav(false)}
        >
          Resources
        </NavLink>
        <NavLink
          to="about-me"
          title="About"
          className="link"
          activeclassname="active"
          exact="true"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} className="mobile-icon" />
          <div className="text">About Me</div>
        </NavLink>
        <NavLink
          to="contact-me"
          title="Contact Me"
          className="contact-link"
          activeclassname="active"
          exact="true"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} className="mobile-icon" />
          <div className="text">Contact Me</div>
        </NavLink>
        <FontAwesomeIcon
          icon={faClose}
          size="2x"
          className="close-icon"
          onClick={() => setShowNav(false)}
        />
        <Button
          className="nav-btn"
          text="Book a Call"
          to=""
          target="_blank"
          background="#DD98B0"
          color="000"
        />
      </nav>

      <FontAwesomeIcon
        icon={faBars}
        size="2x"
        className="hamburger"
        onClick={() => setShowNav(true)}
      />
    </header>
  );
};

export default Navbar;
