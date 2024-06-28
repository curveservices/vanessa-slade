import Button from "../../button";
import tuition from "../../../assets/images/ks2.webp";
import online from "../../../assets/images/ks3.webp";
import exam from "../../../assets/images/gcse.webp";
import CTA from "../../CTA";
import { useEffect, useState } from "react";
import style from "./index.module.css";

const Tuition = () => {
  const [secondAnim, setSecondAnim] = useState(false);
  const [thirdAnim, setThirdAnim] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll2 = window.scrollY;
      const scroll3 = window.scrollY;

      setSecondAnim(scroll2 > 150);
      setThirdAnim(scroll3 > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <section className="tuition-page">
        <section className={style.hero}>
          <div className={`${style.textbox} ${style.anim}`}>
            <h1>Home Tuition £40</h1>
            <p>
              If you want one to one tutoring, and live in the surrounding areas
              of Lewisham including Dulwich, Peckham &amp; Camberwell, I can
              travel to you. I will deliver sessions in the comfort of your own
              home. With home tuition, your child will have the opportunity to
              work with me in person, which can help them better understand the
              material and ask questions n real time. It also allows for a
              multi-sensory style of teaching if your child tends to learn
              better through this approach.
            </p>
            <p>
              You can be reassured that your child is in safe hands as I have
              enhanced DBS checks and always maintain a high level of
              professionalism.
            </p>
            <div className={style.buttonContainer}>
              <Button
                text="Book Lessons"
                link="/contact-me"
                background="var(--oposite)"
                width="200"
              />
            </div>
          </div>
          <div className={`${style.imgContainer} ${style.imgAnim}`}>
            <img src={tuition} alt="tuition" className={style.tuitionImg} />
          </div>
        </section>
        <section className={style.secondSection}>
          <div
            className={`${style.textbox} ${secondAnim ? style.anim : style.none}`}
          >
            <h1>Online Tuition £35</h1>
            <p>
              I offer online tuition over various platforms like google meet and
              skype so your child can access the same quality of teaching as
              with face to face home tutoring lessons.
            </p>
            <p>
              The added benefit is that lessons can be recorded so that you can
              revisit them at a later date. Online tutoring also offers more
              flexibility and choice at a lower price as travel costs do not
              need to be taken into account.
            </p>

            <div className={style.buttonContainer}>
              <Button
                text="Book Lessons"
                link="/contact-me"
                background="var(--oposite)"
                width="200"
              />
            </div>
          </div>
          <div
            className={`${style.imgContainer} ${secondAnim ? style.imgAnim : style.none}`}
          >
            <img
              src={online}
              alt="online tuition"
              className={style.tuitionImg}
            />
          </div>
        </section>
        <section className={style.thirdSection}>
          <div
            className={`${style.textbox} ${thirdAnim ? style.anim : style.none}`}
          >
            <h1>11 Plus Exam Prep</h1>
            <p>
              I specialise in 11+ exam preparation. I have an excellent student
              pass rate and will work with your child to develop the academic
              skills needed to pass the exam, as well as giving them the
              confidence, exam technique and resilience needed to stand out
              amongst the rest. I will assess your child and tailor the scheme
              of learning to ensure success. While most independent schools
              write and mark their own common entrance exams, 11+ entrance exams
              are based on GL and CEM syllabi. I will tailor the learning for
              the specific local requirements.
            </p>
            <div className={style.buttonContainer}>
              <Button
                text="Book Lessons"
                link="/contact-me"
                background="var(--oposite)"
                width="200"
              />
            </div>
          </div>
          <div
            className={`${style.imgContainer} ${thirdAnim ? style.imgAnim : style.none}`}
          >
            <img src={exam} alt="11 Plus" className={style.tuitionImg} />
          </div>
        </section>

        <section className={style.forthSection}>
          <CTA />
        </section>
      </section>
  );
};

export default Tuition;
