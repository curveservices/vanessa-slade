import { Link } from "react-router-dom";
import Button from "../../button";
import img from "../../../assets/images/vanessa.jpg"
import "./index.scss";
import CTA from "../../CTA";

const Home = () => {
    return ( 
        <div className="home-page">
            <section className="hero">
                <div className="text-container">
                    <h1>Private or Group Tutoring</h1>
                    <p>I provide online or in person tutoring </p>
                    <p>for key stage 2 / 3 and for GCSE prep</p>
                    <Button
                        text="Start Lessons now"
                        to=""
                        background="var(--oposite)"
                    />
                </div>
            </section>
            <section className="second-section">
                <div className="second-inner">
                    <h1>Which level matches your needs?</h1>
                    <p>I tutor all levels online on in person</p>
                    <div className="card-container">
                        <div className="image"></div>
                        <div className="text-container">
                            <h3>Key stage 2</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <Link to="">See More..</Link>
                        </div>
                        <div className="image"></div>
                        <div className="text-container">
                            <h3>Key stage 3</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <Link to="">See More..</Link>
                        </div>
                        <div className="image"></div>
                        <div className="text-container">
                            <h3>GCSE Prep</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <Link to="">See More..</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="third-section">
                <div className="third-inner">
                    <div className="work-container">
                        <img src={img} alt="vanessa slade" />
                        <h3 className="work-title">What to expect from my tutoring sessions</h3>
                    </div>
                    <div className="about-work">
                        <h3>Something about tutoring</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
                    </div>
                    <div className="about-work">
                        <h3>Something about tutoring</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
                    </div>
                </div>
            </section>
            <section className="forth-section">
                <div className="forth-inner">
                    <div className="proof-container">
                        <h4>Vanessa helped my daughter ace her GCSE's</h4>
                        <div className="social-img"></div>
                        <p>Happy customer</p>
                    </div>
                </div>
            </section>
            <CTA/>
        </div>
     );
}
 
export default Home;