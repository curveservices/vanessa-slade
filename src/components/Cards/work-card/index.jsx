import { NavLink } from "react-router-dom";
import abc from "../../../assets/images/abc.png";
import stack from "../../../assets/images/stack-of-books.png";
import brain from "../../../assets/images/book.png";
import Button from "../../button";

import "./index.scss";

const WorkCard = () => {
  return (
    <>
      <NavLink to="" className="card">
        <div className="text-container">
          <img src={abc} alt="abc blocks" className="card-image" />
          <h2>Key stage 1</h2>
          <ul>
            <li>English reading</li>
            <li>English grammar, punctuation &amp; spelling</li>
            <li>Maths</li>
          </ul>

          <p>
            Your child will be ready to take tests in May. You’ll be sent the
            results of your child’s teacher assessments automatically.
          </p>
          <Button
            text="Get Lessons"
            background="var(--button-default)"
            link="contact-me"
          />
          <Button
            text="Find out more"
            background="var(--oposite)"
            link="subjects"
          />
        </div>
      </NavLink>
      <NavLink to="" className="card">
        <div className="text-container">
          <img src={stack} alt="stack of books" className="card-image" />
          <h2>Key stage 2</h2>
          <ul>
            <li>English reading</li>
            <li>English grammar, punctuation &amp; spelling</li>
            <li>Maths</li>
          </ul>
          <p>
            Your child will be ready to take tests in July. The school will send
            results of your child’s tests and teacher assessments.
          </p>
          <Button
            text="Get Lessons"
            background="var(--button-default)"
            link="contact-me"
          />
          <Button
            text="Find out more"
            background="var(--oposite)"
            link="subjects"
          />
        </div>
      </NavLink>
      <NavLink to="" className="card">
        <div className="text-container">
          <img src={brain} alt="book with brain" className="card-image" />
          <h2>11 Plus</h2>
          <ul>
            <li>English reading</li>
            <li>English grammar, punctuation &amp; spelling</li>
            <li>Maths</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <Button
            text="Get Lessons"
            background="var(--button-default)"
            link="contact-me"
          />
          <Button
            text="Find out more"
            background="var(--oposite)"
            link="subjects/11-plus"
          />
        </div>
      </NavLink>
    </>
  );
};

export default WorkCard;