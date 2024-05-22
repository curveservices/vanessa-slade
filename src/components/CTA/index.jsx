import Button from "../button";
import "./index.scss";

const CTA = () => {
  return (
    <div className="call-to-action">
      <div className="text-container">
        <h2 className="cta-title">Ready to get started?</h2>
        <p className="cta-p">
          Contact me to discuss tutoring sessions, or book a call
        </p>
      </div>
      <div className="btn-container">
        <Button
          text="Contact Me"
          link="/contact-me"
          background="var(--button-default)"
        />
        <Button
          text="Book a Call"
          link=""
          target="_blank"
          background="var(--oposite)"
        />
      </div>
    </div>
  );
};

export default CTA;
