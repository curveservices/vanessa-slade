import { useEffect } from "react";
import { useState } from "react";
import Loader from "react-loaders";
import CTA from "../../CTA";
import style from "./index.module.css";

const SingleSubject = (props) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scroll1 = window.scrollY;

            setScrolled(scroll1 > 150);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])
    return (
        <>
            <div className="single-subject">
                <section className={style.hero}>
                    <div className={style.innerHero}>
                        <div className={style.textbox}>
                            <h1>{props.heroH1}</h1>
                            <hr />
                            <p>{props.heroP}</p>
                        </div>
                        <div className={style.imgContainer}>
                            <img src={props.src} alt="" className={style.image} />
                        </div>
                    </div>
                </section>
                <section className={style.secondSection}>
                    <div className={`${style.left} ${scrolled ? style.anim : style.none}`}>
                        <h2>{props.leftH2}</h2>
                        <hr />
                        <p>{props.leftP}</p>
                        <p>{props.leftP2}</p>
                    </div>
                    <div className={`${style.right} ${scrolled ? style.anim : style.none}`}>
                        <h2>{props.rightH2}</h2>
                        <hr />
                        <p>{props.rightP}</p>
                        <p>{props.rightP2}</p>
                    </div>
                </section>
                <CTA />
            </div>
            <Loader type="ball-spin-fade-loader" color="black"/>
        </>
    );
}

export default SingleSubject;