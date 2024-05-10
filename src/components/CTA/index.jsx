import Button from "../button";
import "./index.scss";

const CTA = () => {
    return (
        <>
            <div className="text-container">
                <h2 className="cta-title">Ready to get started</h2>
                <p className="cta-p">
                    Contact me to discuss tutoring sessions, or book a call
                </p>
            </div>
            <div className="btn-container">
                <Button
                    text="Contact Me"
                    to=""
                    target="_blank"
                    background="#fff"
                />
                <Button
                    text="Book a Call"
                    to=""
                    background="var(--oposite)"
                />
            </div>
        </>
    );
}

export default CTA;