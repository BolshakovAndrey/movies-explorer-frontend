import React from 'react';
import { Link } from 'react-router-dom'
import PromoImage from '../../images/color_landing-logo.png'

function Promo() {
    return(
        <section className="promo">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <img
                className="promo__illustration"
                src={PromoImage}
                alt="Картинка лэндинга"
            />
            <Link
                className="promo__link"
                to={{ pathname: '#project' }}
                target="top"

            >
                Узнать больше
            </Link>
        </section>
    );
}

export default Promo;
