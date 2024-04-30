import "index.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="foot-title">
                <div>Vanessa Slade</div>
            </div>

            <div className="socials-container">
                <p>Follow Me</p>
                {/* <Socials />  */}
            </div>

            <div className="link-container">
                <div className="studio">
                    <ul className="site-links">
                        <li>
                            <p>Tutor</p>
                        </li>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>Tuition</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="experts">
                    <ul>
                        <li>
                            <p>Specialse in</p>
                        </li>
                        <li>GCSE prep</li>
                        <li>A-Level prep</li>
                        <li>STEP Exam prep</li>
                        <li>Further education</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;