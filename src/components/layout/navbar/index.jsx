import { faArrowDown, faEnvelope, faHouseChimney, faSchool, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "../../breadcrumbs";
import "./index.scss"

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
      <NavLink to="/">
        <div className="title">Vanessa Slade</div>
        <img src={logo} alt="Vanessa slade" />
      </NavLink>
          <Breadcrumbs />
          <nav className={showNav ? "mobile-show" : ""}>
              <NavLink
                  to="/"
                  title="Home"
                  className="home-link"
                  activeClassName="active"
                  exact="true"
                  onClick={() => setShowNav(false)}
              >
                  <FontAwesomeIcon icon={faHouseChimney} className="mobile-icon" />
                  <div className="text">Home</div>
              </NavLink>
              <NavLink
                  to="tuition"
                  title="Tuition"
                  className='tuition-link'
                  activeClassName="active"
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
                  activeClassName="active"
                  exact="true"
                  onClick={() => setShowNav(false)}
              >
                  <FontAwesomeIcon icon={faSuitcase} className="mobile-icon" />
                  <div className="dropdown">
                      <div className="text">Services <FontAwesomeIcon icon={faArrowDown} /></div>
                      <div className="dropdown-content">
                          <NavLink
                              to="gcse-prep"
                              title="GCSE Preperation"
                              className="gcse-link"
                              activeClassName="active"
                              exact="true"
                              onClick={() => setShowNav(false)}
                          >
                              GCSE Preperation
                          </NavLink>
                          <NavLink
                              to="gcse-prep"
                              title="STEP Exam Preperation"
                              className="gcse-link"
                              activeClassName="active"
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
                  <div className="text">About</div>
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
                  <div className="text">Contact</div>
              </NavLink>
              <FontAwesomeIcon
                  icon={faClose}
                  size="2x"
                  className="close-icon"
                  onClick={() => setShowNav(false)}
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
