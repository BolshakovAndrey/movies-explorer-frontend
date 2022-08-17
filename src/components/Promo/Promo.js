import React from 'react';
import './Promo.css';
import {Link} from 'react-router-dom'
import PromoImage from '../../images/color_landing-logo.png'

function Promo() {
    return (
        <section className="promo main__section">
            <div className="promo__container main__section-container main__section-container_size_xs">
                <div className="promo__main-content">
                    <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                    <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <Link
                        className="promo__link"
                        to={{pathname: '#project'}}
                        target="_top"

                    >
                        Узнать больше
                    </Link>
                </div>
                <img
                    className="promo__illustration"
                    src={PromoImage}
                    alt="Картинка лэндинга"
                />
            </div>
        </section>
    );
}

export default Promo;
