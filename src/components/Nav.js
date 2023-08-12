import MotoGP from '../components/MotoGP'
import Logo from '../images/logo.svg'
import Instagram from '../images/instagram.svg';
import Twitter from '../images/twitter.svg';
import LinkedIn from '../images/linkedin.svg';
import { Link } from "react-router-dom";

const Nav = () => {
    return(
    <nav className="main-nav">
        <div className="main-nav-wrapper">
        <div className="nav-left-wrapper">
            <div className="social-media-wrapper">
                <a href="/" className="social-icon">
                    <img alt="" src={Instagram} />
                </a>
                <a href="/" className="social-icon">
                    <img alt="" src={Twitter} />
                </a>
                <a href="/" className="social-icon">
                    <img alt="" src={LinkedIn} />
                </a>
            </div>
        </div>
        <Link to="/">
        <img alt="" className="logo" src={Logo} />
        </Link>
        <Link to="/motoGP">
        <button className="connect-btn">Connect <span className="mobile-connect">Your Wallet</span></button>
        </Link>
        </div>
    </nav>
    )
}

export default Nav;