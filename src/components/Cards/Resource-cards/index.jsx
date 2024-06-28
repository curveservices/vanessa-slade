import "./index.scss";
import Button from "../../button";
import { Link } from "react-router-dom";
import english from "../../../assets/images/stack-of-books.png";
import brain from "../../../assets/images/book.png";
import maths from "../../../assets/images/atom.png";
import bulb from "../../../assets/images/light-bulb.png";

const ResourceCards = (props) => {
  return (
    <div className="cardContainer">
        <div className="resourceCard">
         <Link to="english-papers">
          <img src={english} alt="books" className="icon" />
          <h2>11+ English Solved Past Papers</h2>
          <p>
            Comprehension questions, creative writings, with hints and detailed
            answers.
          </p>
          </Link>
          <Button
            text="Free 11+ Sample Papers"
            background="var(--oposite)"
            link="english-papers"
          />
        </div>
      
        <div className="resourceCard">
        <Link to="maths-papers">
          <img src={maths} alt="books" className="icon" />
          <h2>11+ Maths Solved Past Papers</h2>
          <p>
            11+ Maths Past Paper with detailed Answers and downloadable PDF
            Question Papers.
        </p>
        </Link>
          <Button
            text="Free 11+ Sample Papers"
            background="var(--oposite)"
            link="math-papers"
          />
        </div>
        <div className="resourceCard">
         <Link to="verbal">
          <img src={bulb} alt="light bulb" className="icon" />
          <h2>11+ Verbal Reasoning Papers</h2>
          <p>
            11+ Verbal Reasoning exam-style practice questions with detailed
            answers.
        </p>
         </Link>
          <Button
            text="Free 11+ Sample Papers"
            background="var(--oposite)"
            link="verbal"
          />
        </div>
     
      <div className="resourceCard">
         <Link to="non-verbal">
          <img src={brain} alt="book brain" className="icon" />
          <h2>11+ Non-Verbal Reasoning Papers</h2>
          <p>
            11+ Non-verbal Reasoning exam-style practice questions with detailed
            answers.
          </p>
          </Link>
          <Button
            text="Free 11+ Sample Papers"
            background="var(--oposite)"
            link="non-verbal"
          />
        </div>
      
    </div>
  );
};

export default ResourceCards;
