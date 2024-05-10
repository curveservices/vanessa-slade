import { faArrowDown, faBars, faClose, faEnvelope, faHouseChimney, faSchool, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../../assets/images/image-holder.png'
import "./index.scss"
import Button from "../../button";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);

  return (
      <header className={isScrolled ? "navbar-scroll" : ""}>
          <nav className={`"nav-bar" ${showNav ? "mobile-show" : ""}`}>
              <NavLink to="/">
                  <div className="title">Vanessa Slade</div>
                  <img src={logo} className="logo" alt="Vanessa slade" />
              </NavLink>
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
                  className='tuition-link'
                  activeclassname="active"
                  exact="true"
                  onClick={() => setShowNav(false)}
              >
                  <FontAwesomeIcon icon={faSchool} className="mobile-icon" />
                  <div className="text">Tuition</div>
              </NavLink>
              <NavLink
                  to="services"
                  title="Services"
                  className='services-link'
                  activeclassname="active"
                  exact="true"
                  onClick={() => setShowNav(false)}
              >
                  <FontAwesomeIcon icon={faSuitcase} className="mobile-icon" />
                  <div className="dropdown">
                      <div className="text">Subjects <FontAwesomeIcon icon={faArrowDown} /></div>
                      <div className="dropdown-content">
                          <NavLink
                              to="gcse-prep"
                              title="GCSE Preperation"
                              className="gcse-link"
                              activeclassname="active"
                              exact="true"
                              onClick={() => setShowNav(false)}
                          >
                              GCSE Preperation
                          </NavLink>
                          <NavLink
                              to="gcse-prep"
                              title="STEP Exam Preperation"
                              className="gcse-link"
                              activeclassname="active"
                              exact="true"
                              onClick={() => setShowNav(false)}
                          >
                              STEP Exam Preperation
                          </NavLink>
                      </div>
                  </div>
              </NavLink>
              <NavLink
                  to="about"
                  title="About"
                  className="about-link"
                  activeclassname="active"
                  exact="true"
                  onClick={() => setShowNav(false)}
              >
                  <FontAwesomeIcon icon={faUser} className="mobile-icon" />
                  <div className="text">About Me</div>
              </NavLink>
              <NavLink
                  to="contact"
                  title="Contact Us"
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
          </nav>
          <Button
              className="nav-btn"
              text="Book a Call"
              to=""
              target="_blank"
              background="#DD98B0"
              color="000"
          />
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
