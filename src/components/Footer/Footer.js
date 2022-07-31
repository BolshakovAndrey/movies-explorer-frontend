import React from 'react';
import {Link} from "react-router-dom";
import './Footer.css';

function Footer() {
    const FOOTER_LINKS = [
        {
            title: 'Яндекс.Практикум',
            link: 'https://practicum.yandex.com',
        },
        {
            title: 'Github',
            link: "https://github.com/BolshakovAndrey",
        },
        {
            title: 'Telegram',
            link: "https://t.me/Bolshakov_Andrey" ,
        },
    ];

    return(
        <footer className="footer page__footer">
            <div className="footer__container">
                <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__content">
                    <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
                    <ul className="footer__links">
                        {FOOTER_LINKS.map((item, index) => (
                            <li
                                key={index}
                            >
                                <Link
                                    className="footer__link"
                                    to={{ pathname: item.link }}
                                    target="_blank"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
