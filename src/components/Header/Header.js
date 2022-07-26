import {Link} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HeaderLogo from "../../images/header-logo.svg";

function Header() {
    return(
        <header className="header">
            <div className="header__container">
                <Link className=""
                      to={{ pathname: '/' }} >
                    <img className=""
                         src={HeaderLogo}
                         alt="Логотип сайта"
                    />
                </Link>
                <Navigation />
            </div>
        </header>
    )
}

export default Header;
