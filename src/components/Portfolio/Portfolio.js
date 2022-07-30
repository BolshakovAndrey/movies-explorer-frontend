import React from 'react';
import './Portfolio.css';
import {Link} from "react-router-dom";

function Portfolio() {
    const PORTFOLIO_LINKS = [
        {
            title: 'Статичный сайт',
            link: 'https://bolshakovandrey.github.io/how-to-learn/'
        },
        {
            title: 'Адаптивный сайт',
            link: 'https://bolshakovandrey.github.io/russian-travel/'
        },
        {
            title: 'Одностраничное приложение',
            link: 'https://bolshakov.nomoredomains.xyz/'
        }
    ]

    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__links">
                {PORTFOLIO_LINKS.map((item, index) => (
                    <li
                        className="portfolio__links-item"
                        key={index}
                    >
                        <Link
                            className="portfolio__link"
                            to={{pathname: item.link}}
                            target="_blank"
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Portfolio;
