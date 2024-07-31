import { NavLink } from "react-router-dom";
import "./index.scss";

const SubjectCards = (props) => {
  const cardStyle = {
    background: props.background,
    color: props.color,
    fontSize: props.fontSize + "px",
  };

  return (
    <div className="subject-card-container">
      <NavLink to={props.link1}>
        <div className="subjectCard">
          <h2 className="title" style={cardStyle}>
            {props.title1}
          </h2>
          <img src={props.src1} alt="Image of children learning" className="cardImg" />
        </div>
      </NavLink>
      <NavLink to={props.link2}>
        <div className="subjectCard">
          <h2 className="title" style={cardStyle}>
            {props.title2}
          </h2>
          <img src={props.src2} alt="Image of children learning" className="cardImg" />
        </div>
      </NavLink>
      <NavLink to={props.link3}>
        <div className="subjectCard">
          <h2 className="title" style={cardStyle}>
            {props.title3}
          </h2>
          <img src={props.src3} alt="Image of children learning" className="cardImg" />
        </div>
      </NavLink>
    </div>
  );
};

export default SubjectCards;
