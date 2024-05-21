import SubjectCards from "../../Cards/subjects-card";
import english from "../../../assets/images/home-img.jpg";
import maths from "../../../assets/images/ks2.png";
import exam from "../../../assets/images/gcse.png";
import CTA from "../../CTA";
import "./index.scss";
import Loader from "react-loaders";

const Subjects = () => {
  return (
    <>
      <div className="subjects-page">
        <h1 className="hero-title">Subjects</h1>
        <div className="hero">
          <SubjectCards
            title1="English Tuition"
            src1={english}
            link1="english"
            title2="Maths Tuition"
            src2={maths}
            link2="maths"
            title3="11 Plus Prep"
            src3={exam}
            link3="11-plus"
          />
        </div>

        <CTA />
      </div>
      <Loader type="ball-spin-fade-loader" color="black" />
    </>
  );
};

export default Subjects;
