import Loader from "react-loaders";
import SubjectCards from "../../../Cards/subjects-card";
import CTA from "../../../CTA";
import ResourceTable from "../../../resourceTable";
import english from "../../../../assets/images/home-img.webp";
import maths from "../../../../assets/images/ks2.webp";
import exam from "../../../../assets/images/gcse.webp";
import "../index.scss";

const NonVerbal = () => {
  return (
    <>
      <section className="table-page">
        <div className="hero">
          <div className="table">
            <ResourceTable
              name="verbal"
              header="11+ Verbal Reasoning Practice Papers"
              title="Verbal Reasoning Practice Question Papers"
            />
          </div>
        </div>
        <section className="second-section">
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
            background="var(--oposite)"
          />
        </section>
        <div className="cta">
          <CTA />
        </div>
      </section>
      <Loader type="ball-spin-fade-loader" color="black" />
    </>
  );
};

export default NonVerbal;
