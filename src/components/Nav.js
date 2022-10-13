import Logo from '../images/logo.svg'
import Instagram from '../images/instagram.svg';
import Twitter from '../images/twitter.svg';
import LinkedIn from '../images/linkedin.svg';

const Nav = () => {
    return(
    <nav className="main-nav">
        <div className="main-nav-wrapper">

        <img alt="" className="logo" src={Logo} />
        <div class="nav-right-wrapper">
            <button className="connect-btn">Connect Wallet</button>
            <div class="social-media-wrapper">
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
        </div>
    </nav>
    )
}

export default Nav;