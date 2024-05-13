import { Link, NavLink } from "react-router-dom";
import Button from "../../button";
import img from "../../../assets/images/vanessa.jpg";
import CTA from "../../CTA";
import { useState, useEffect } from "react";
import ks2 from "../../../assets/images/ks2.png";
import ks3 from "../../../assets/images/ks3.png";
import gcse from "../../../assets/images/gcse.png";
import "./index.scss";


const Home = () => {
    const [scrolledFirst, setScrolledFirst] = useState(false);
    const [scrolledSecond, setScrolledSecond] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollCards = window.scrollY;
            const secondScroll = window.scrollY;

            setScrolledSecond(secondScroll >1300)
            setScrolledFirst(scrollCards > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);

    return ( 
        <div className="home-page">
            <section className="hero">
                <div className="text-container">
                    <h1 className="title">Private or Group Tutoring</h1>
                    <p className="sub-title">I provide online or in person tutoring for key stage 2 / 3 and for GCSE prep </p>
                    <p></p>
                    <Button
                        text="Start Lessons now"
                        to=""
                        background="var(--oposite)"
                    />
                </div>
            </section>
            <section className="second-section">
                <div className="second-inner">
                    <div className="title">
                        <h1>Which level matches your needs?</h1>
                        <p>I tutor all levels online on in person</p>
                    </div>

                    <div className={`card-container ${scrolledFirst ? "firstAnim" : "none"}`}>
                        <NavLink to="key-stage-2" className="card">
                            <img src={ks2} alt="key stage 2" className="card-image" />
                            <div className="text-container">
                                <h3>Key stage 2</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <Link to="">See More..</Link>
                            </div>
                        </NavLink>
                        <NavLink to="key-stage-3" className="card">
                            <img src={ks3} alt="key stage 2" className="card-image" />
                            <div className="text-container">
                                <h3>Key stage 3</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <Link to="">See More..</Link>
                            </div>
                        </NavLink>
                        <NavLink to="gcse-prep" className="card">
                            <img src={gcse} alt="key stage 2" className="card-image" />
                            <div className="text-container">
                                <h3>GCSE Prep</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <Link to="">See More..</Link>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </section>
            <section className="third-section">
                <div className="third-inner">
                    <NavLink to="tuition" className="work-container">
                        <img src={img} alt="vanessa slade" className="img" />
                        <h3 className="work-title">What to expect from my tutoring sessions</h3>
                    </NavLink>
                    <div className="about-container">
                        <div className={`about-work ${scrolledSecond ? "left" : "none"} `}>
                            <h3>Something about tutoring</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
                        </div>
                        <div className={`about-work ${scrolledSecond ? "right" : "none"}`}>
                            <h3>Something about tutoring</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
                        </div>
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
            <section className="cta">
                <CTA/>
            </section>
        </div>
     );
}
 
export default Home;