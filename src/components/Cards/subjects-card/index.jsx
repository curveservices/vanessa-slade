import { NavLink } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import "./index.scss";

const SubjectCards = (props) => {
    return (
        <div className="card-container">
            <NavLink to={props.link1} >
                <Tilt tiltReverse glareEnable glareReverse glarePosition="all">
                    <div className="card">
                        <h2 className="title">{props.title1}</h2>
                        <img src={props.src1} alt="" className="cardImg" />
                    </div>
                </Tilt>
            </NavLink>
            <NavLink to={props.link2} >
                <Tilt tiltReverse glareEnable glareReverse glarePosition="all">
                    <div className="card">
                        <h2 className="title">{props.title2}</h2>
                        <img src={props.src2} alt="" className="cardImg" />
                    </div>
                </Tilt>
            </NavLink>
            <NavLink to={props.link3} >
                <Tilt tiltReverse glareEnable glareReverse glarePosition="all">
                    <div className="card">
                        <h2 className="title">{props.title3}</h2>
                        <img src={props.src3} alt="" className="cardImg" />
                    </div>
                </Tilt>
            </NavLink>
        </div>
    );
}

export default SubjectCards;