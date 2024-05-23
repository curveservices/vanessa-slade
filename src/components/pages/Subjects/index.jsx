import SubjectCards from "../../Cards/subjects-card";
import english from "../../../assets/images/home-img.webp";
import maths from "../../../assets/images/ks2.webp";
import exam from "../../../assets/images/gcse.webp";
import "./index.scss";
import Loader from "react-loaders";
import CTA from "../../CTA";
import Button from "../../button";

const Subjects = () => {
  return (
    <>
      <section className="subjects-page">
        <div className="hero">
          <div className="textbox">
            <h1 className="hero-title">Subjects</h1>
            <p>
              I offer home and online tuition. I will assses the needs of each
              student and design a learning programme that will ensure success.
            </p>
            <div className="button-container">
              <Button text="Contact Me" link="/contact-me" />
              <Button
                text="Resources"
                link="/resources"
                background="var(--oposite)"
              />
            </div>
          </div>
        </div>
        <div className="subject-cards">
          <SubjectCards
            title1="English Tuition"
            src1={english}
            link1="/english"
            title2="Maths Tuition"
            src2={maths}
            link2="/maths"
            title3="11 Plus Prep"
            src3={exam}
            link3="/11-plus"
            background="var(--secondary)"
          />
        </div>
      </section>
      <section className="cta">
        <CTA />
      </section>
      <Loader type="ball-spin-fade-loader" color="black" />
    </>
  );
};

export default Subjects;
