import React from 'react';
import './AboutMe.css';
import AboutMeImage from '../../images/about-me-image.jpg'
import {Link} from "react-router-dom";

import SectionTitle from '../SectionTitle/SectionTitle';
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
    const ABOUT_ME_LINKS = [
        {
            title: 'Telegram',
            link: 'https://t.me/Bolshakov_Andrey'
        },
        {
            title: 'Github',
            link: 'https://github.com/BolshakovAndrey'
        },
    ];

    return (
        <section className="about-me main__section">
            <div className="main__section-container main__section-container_size_s">
                <SectionTitle
                    title="Студент"
                />
                <div className="about-me__content">
                    <img className="about-me__image"
                         src={AboutMeImage}
                         alt="Фото автора"
                    />
                    <div className="about-me__student">
                        <div className="about-me__bio">
                            <h2 className="about-me__subtitle">Андрей</h2>
                            <p className="about-me__headline">
                                Веб-разработчик, 47 лет
                            </p>
                            <p className="about-me__text">
                                Я родился в Омске, живу в Москве. Закончил факультет менеджмента РАНХиГС.
                                У меня большая семья, жена и три дочери.
                                Я люблю музыку, а ещё увлекаюсь фитнесом. Освоил Python и
                                Javascript.
                                Закончил курс по веб-разработке, начал делать сайты и веб приложения.
                            </p>
                        </div>
                        <ul className="about-me__links">
                            {ABOUT_ME_LINKS.map((item, index) => (
                                <li
                                    key={index}>
                                    <Link
                                        className="about-me__link"
                                        to={{pathname: item.link}}
                                        target="_blank"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Portfolio/>
            </div>
        </section>
    );
}

export default AboutMe;
