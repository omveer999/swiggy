import myImage from "../../assets/img/logo.png"
import { Link } from "react-router-dom"

const Header=()=>(
    <div className="navbar">
        <div className="logo">
            <img src={myImage} alt="logo" />
        </div>
        <div className="menu">
            <ul className="menu-list">
                <li className="menu-item"><Link to="/">Home</Link> </li>
                <li className="menu-item"><Link to="/about-us">About</Link> </li>
                <li className="menu-item"><Link to="/contact-us"> Contact Us</Link></li>
            </ul>
        </div>
    </div>
);

export default Header;