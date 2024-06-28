import { NavLink } from "react-router-dom";
import Button from "../../button";
import img from "../../../assets/images/vanessa.webp";
import english from "../../../assets/images/home-img.webp";
import maths from "../../../assets/images/ks2.webp";
import exam from "../../../assets/images/gcse.webp";
import CTA from "../../CTA";
import { useState, useEffect } from "react";
import WorkCard from "../../Cards/work-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import SubjectCards from "../../Cards/subjects-card";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./index.scss";

const Home = () => {
  const [scrolledFirst, setScrolledFirst] = useState(false);
  const [scrolledTuition, setScrolledTuition] = useState(false);
  const [scrolledSubjects, setScrolledSubjects] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollCards = window.scrollY;
      const thirdScroll = window.scrollY;
      const tuitionScroll = window.scrollY;

      setScrolledFirst(scrollCards > 150);
      setScrolledSubjects(thirdScroll > 1200);
      setScrolledTuition(tuitionScroll > 2400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="home-page">
        <section className="hero">
          <div className="text-container">
            <h1 className="title">Private or Group Tutoring</h1>
            <h2 className="sub-title">
              I provide online or in person tutoring for key stage 1 / 2 and for
              11 Plus prep
            </h2>
            <p></p>
            <Button
              text="Start Lessons now"
              link="/contact-me"
              background="var(--oposite)"
            />
          </div>
        </section>
        <section className="second-section">
          <div className="second-inner">
            <div className="title">
              <h1>Which level matches your needs?</h1>
            </div>
            <div
              className={`card-container ${scrolledFirst ? "firstAnim" : "none"}`}
            >
              <WorkCard />
            </div>
          </div>
        </section>
        <section className="third-section">
          <div
            className={`textbox ${scrolledSubjects ? "animSubjects" : "none"}`}
          >
            <h1 className="title">Subjects</h1>
            <p>
              I offer home and online tuition. I will assses the needs of each
              student and design a learning programme that will ensure success.
            </p>
            <div className="button-container">
              <Button text="Contact me" />
              <Button
                text="Resources"
                link="resources"
                background="var(--oposite)"
              />
            </div>
          </div>
          <div
            className={`subject-cards ${scrolledSubjects ? "animSubjects" : "none"}`}
          >
            <SubjectCards
              title1="English Tuition"
              src1={english}
              link1="english"
              title2="Maths Tuition"
              src2={maths}
              link2="maths"
              title3="11 Plus Prep"
              src3={exam}
              link3="11-plus"
              background="var(--secondary)"
            />
          </div>
        </section>
        <section className="forth-section">
          <div className="forth-inner">
            <NavLink to="tuition" className="work-container">
              <img src={img} alt="vanessa slade" className="img" />
              <h3 className="work-title">
                What to expect from my tutoring sessions
              </h3>
            </NavLink>
            <div className="about-container">
              <NavLink to="tuition">
                <div
                  className={`about-work ${scrolledTuition ? "left" : "none"} `}
                >
                  <FontAwesomeIcon icon={faHouseChimney} className="icon" />
                  <div className="text">
                    <h2>Home Tuition</h2>
                    <p>
                      If you live in the surrounding areas of Lewisham including
                      Dulwich, Peckham &amp; Camberwell, I can travel to you. I
                      will deliver sessions in the comfort of your own home.
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink to="tuition">
                <div
                  className={`about-work ${scrolledTuition ? "right" : "none"}`}
                >
                  <FontAwesomeIcon icon={faComputer} className="icon" />
                  <div className="text">
                    <h2>Online Tuition</h2>
                    <p>
                      I offer online tuition over various platforms like google
                      meet and skype so your child can access the same quality
                      of teaching as with face to face home tutoring lessons.
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </section>
        <section className="cta">
          <CTA />
        </section>
      </div>
      <div>
        <HelmetProvider>
          <Helmet>
            <title>Home | TelegraphHill Tutoring</title>
            <meta
              name="keywords"
              content="Tutoring, Home schooling, private tutor, GCSE tutoring, Key stage 2, Keystage 3"
            />
          </Helmet>
        </HelmetProvider>
      </div>
    </>
  );
};

export default Home;
