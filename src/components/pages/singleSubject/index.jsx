import { useEffect, useState } from "react";
import Loader from "react-loaders";
import Button from "../../button";
import CTA from "../../CTA";
import style from "./index.module.css";

const SingleSubject = (props) => {
  const [scrolled, setScrolled] = useState(true);
  const [secondScroll, setSecondScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scroll1 = window.scrollY;
      const scroll2 = window.scrollY;

      setScrolled(scroll1 > 100);
      setSecondScroll(scroll2 > 700);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="single-subject">
        <section className={style.hero}>
          <div className={style.innerHero}>
            <div className={style.textbox}>
              <h1>{props.heroH1}</h1>
              <hr />
              <p>{props.heroP}</p>
              <div className={style.buttonContainer}>
                <Button
                  text="start now"
                  link="/contact"
                  background="var(--button-default)"
                />
                <Button
                  text="Book a call"
                  link=""
                  background="var(--oposite)"
                />
              </div>
            </div>
            <div className={style.imgContainer}>
              <img
                src={props.src}
                alt="tutoring image"
                className={style.image}
              />
            </div>
          </div>
        </section>
        <section className={style.secondSection}>
          <div
            className={`${style.left} ${scrolled ? style.animLeft : style.none}`}
          >
            <h2>{props.leftH2}</h2>
            <hr />
            <p>{props.leftP}</p>
            <p>{props.leftP2}</p>
          </div>
          <div
            className={`${style.right} ${scrolled ? style.animRight : style.none}`}
          >
            <h2>{props.rightH2}</h2>
            <hr />
            <p>{props.rightP}</p>
            <p>{props.rightP2}</p>
          </div>
        </section>
        <section className={style.thirdSection}>
          <div
            className={`${style.thirdLeft} ${secondScroll ? style.animSecond : style.none}`}
          >
            <h2>{props.thirdLeftH2}</h2>
            <hr />
            <p>{props.thirdLeftP}</p>
            <p>{props.thirdLeftP2}</p>
            <div className={style.buttonContainer}>
              <Button
                text="Resources"
                background="var(--button-default)"
                link="/resources"
              />
              <Button
                text="Contact Me"
                background="var(--oposite)"
                link="/contact-me"
              />
            </div>
          </div>
          <div
            className={`${style.thirdRight} ${secondScroll ? style.animSecond : style.none}`}
          >
            <h2>{props.thirdRightH2}</h2>
            <hr />
            <p>{props.thirdRightP}</p>
            <p>{props.thirdRightP2}</p>
            <div className={style.buttonContainer}>
              <Button
                text="Resources"
                background="var(--button-default)"
                link="/resources"
              />
              <Button
                text="Contact Me"
                background="var(--oposite)"
                link="/contact-me"
              />
            </div>
          </div>
        </section>
        <CTA />
      </div>
      <Loader type="ball-spin-fade-loader" color="black" />
    </>
  );
};

export default SingleSubject;
