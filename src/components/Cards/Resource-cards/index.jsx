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
      <Link to="english-papers">
        <div className="resourceCard">
          <img src={english} alt="books" className="icon" />
          <h2>11+ English Solved Past Papers</h2>
          <p>
            Comprehension questions, creative writings, with hints and detailed
            answers.
          </p>
          <Button
            text="Free 11+ Sample Papers"
            background="var(--oposite)"
            width="300"
          />
        </div>
      </Link>
      <Link to="maths-papers">
        <div className="resourceCard">
          <img src={maths} alt="books" className="icon" />
          <h2>11+ Maths Solved Past Papers</h2>
          <p>
            11+ Maths Past Paper with detailed Answers and downloadable PDF
            Question Papers.
          </p>
          <Button
            text="Free 11+ Sample Papers"
            background="var(--oposite)"
            width="300"
          />
        </div>
      </Link>
      <Link to="verbal">
        <div className="resourceCard">
          <img src={bulb} alt="light bulb" className="icon" />
          <h2>11+ Verbal Reasoning Papers</h2>
          <p>
            11+ Verbal Reasoning exam-style practice questions with detailed
            answers.
          </p>
          <Button
            text="Free 11+ Sample Papers"
            background="var(--oposite)"
            width="300"
          />
        </div>
      </Link>
      <Link to="non-verbal">
        <div className="resourceCard">
          <img src={brain} alt="book brain" className="icon" />
          <h2>11+ Non-Verbal Reasoning Papers</h2>
          <p>
            11+ Non-verbal Reasoning exam-style practice questions with detailed
            answers.
          </p>
          <Button
            text="Free 11+ Sample Papers"
            background="var(--oposite)"
            width="300"
          />
        </div>
      </Link>
    </div>
  );
};

export default ResourceCards;
