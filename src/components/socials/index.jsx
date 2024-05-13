import { faFacebook, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./index.scss";

const Socials = (props) => {
    return ( 
        <>
            <ul className="iconList">
                <li className="icons">
                    <Link to={props.fbLink} target="_blank" rel="noreferer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                </li>
                <li className="icons">
                    <Link to={props.lilink} target="_blank" rel="noreferer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                </li>
                <li className="icons">
                    <Link to={props.xlink} target="_blank" rel="noreferer">
                        <FontAwesomeIcon icon={faXTwitter} />
                    </Link>
                </li>
            </ul>
        </>
     );
}
 
export default Socials;