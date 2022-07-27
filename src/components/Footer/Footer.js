import {Link} from "react-router-dom";

function Footer() {
    return(
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div>
                <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
                <ul className="footer__links">
                    <li>
                        <Link
                            className="footer__link"
                            to={{ pathname: "https://practicum.yandex.ru/" }}
                            target="_blank" >
                            Яндекс.Практикум
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="footer__link"
                            to={{ pathname: "https://github.com/BolshakovAndrey" }}
                            target="_blank" >
                            Github
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="footer__link"
                            to={{ pathname: "https://t.me/Bolshakov_Andrey" }}
                            target="_blank" >
                            Telegram
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
