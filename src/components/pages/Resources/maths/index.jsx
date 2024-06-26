import SubjectCards from "../../../Cards/subjects-card";
import english from "../../../../assets/images/home-img.webp";
import maths from "../../../../assets/images/ks2.webp";
import exam from "../../../../assets/images/gcse.webp";
import CTA from "../../../CTA";
import ResourceTable from "../../../resourceTable";
import "../index.scss";

const MathsPapers = () => {
  return (
      <section className="table-page">
        <div className="hero">
          <div className="table">
            <ResourceTable
              name="maths"
              header="11 Plus Maths"
              title="11+ Maths Independent &amp; Grammar School Past Exam Papers"
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
  );
};

export default MathsPapers;
