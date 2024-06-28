import Loader from "react-loaders";
import Button from "../../../button";
import ResourceCards from "../../../Cards/Resource-cards";
import CTA from "../../../CTA";
import "./index.scss";

const Resources = () => {
  return (
    <>
      <section className="resources-page">
        <section className="hero">
          <div className="textbox">
            <h1 className="hero-title">Resources</h1>
            <p>
              Practice Papers &amp; Expert Tuition to Boost Your Child's
              Potential, please download these resources to practice at home.
              To unlock the please follow the answers please follow the link.
            </p>
            <div className="button-container">
              <Button text="Contact Me" link="/contact-me" />
              <Button text="Book a Call" link="" background="var(--oposite)" />
            </div>
          </div>
        </section>
        <section className="second-section">
           <div className="resource-cards">
          <ResourceCards />
        </div>
        </section>
        <div className="cta">
          <CTA />
        </div>
      </section>
      <Loader type="ball-spin-fade-loader" color="black" />
    </>
  );
};

export default Resources;
