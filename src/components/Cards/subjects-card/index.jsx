import { NavLink } from "react-router-dom";
import "./index.scss";

const SubjectCards = (props) => {
  return (
    <div className="card-container">
      <NavLink to={props.link1}>
        <div className="card">
          <h2 className="title">{props.title1}</h2>
          <img src={props.src1} alt="" className="cardImg" />
        </div>
      </NavLink>
      <NavLink to={props.link2}>
        <div className="card">
          <h2 className="title">{props.title2}</h2>
          <img src={props.src2} alt="" className="cardImg" />
        </div>
      </NavLink>
      <NavLink to={props.link3}>
        <div className="card">
          <h2 className="title">{props.title3}</h2>
          <img src={props.src3} alt="" className="cardImg" />
        </div>
      </NavLink>
    </div>
  );
};

export default SubjectCards;
