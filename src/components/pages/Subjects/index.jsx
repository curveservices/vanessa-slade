import SubjectCards from "../../Cards/subjects-card";
import english from "../../../assets/images/home-img.webp";
import maths from "../../../assets/images/ks2.webp";
import exam from "../../../assets/images/gcse.webp";
import CTA from "../../CTA";
import Button from "../../button";
import "./index.scss"

const Subjects = () => {
  return (
   
      <section className="subjects-page">
        <div className="hero">
          <div className="textbox">
            <h1 className="hero-title">Subjects</h1>
            <p>
              I offer home and online tuition. I will assess the needs of each
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
        <section className="second-section">
          <div className="second-inner">
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
                background="var(--oposite)"
              />
            </div>
          </div>
        </section>
        <section className="cta">
          <CTA />
        </section>
      </section>
  );
};

export default Subjects;
