import React from 'react';
import './MoviesCard.css';
import {ReactComponent as CheckIcon} from '../../images/saved.svg';
import {ReactComponent as UnCheckIcon} from '../../images/unSaved.svg';
import {Link, useLocation} from "react-router-dom";
import getFullImageUrl from '../../utils/getFullImageUrl';
import convertDuration from '../../utils/convertDuration';

function MoviesCard({ card, onCardSaveToggle, onCardDelete }) {
    let location = useLocation();

    const movieTrailerPathName = (
        location.pathname === '/movies' ? card.trailerLink : card.trailer
    );

    const cardSaveToggleClassName = (
        `movies-card__btn movies-card__btn_use_save ${card.isSaved ? 'movies-card__btn_active' : ''}`
    );

    const cardSaveButtonContent = (
        card.isSaved ? <CheckIcon /> : <UnCheckIcon />
    );

    const handleSaveToggle = () => {
        onCardSaveToggle(card);
    };

    const handleDeleteClick = () => {
        onCardDelete(card);
    };

    return (
        <li className="movies-card">
            <Link
                to={{ pathname: movieTrailerPathName }}
                target="_blank"
                aria-label={`Открыть трейлер фильма ${card.nameRU} на youtube`}
            >
                <img
                    className="movies-card__image"
                    src={getFullImageUrl(card.image)}
                    alt={`Кадр из фильма ${card.nameRU}`}
                />
            </Link>
            <div className="movies-card__desc">
                <h3 className="movies-card__title">{card.nameRU}</h3>
            </div>
            <span className="movies-card__duration">{convertDuration(card.duration)}</span>

            {location.pathname === '/saved-movies' &&
            <button
                className="movies-card__btn movies-card__btn_use_delete"
                type="button"
                aria-label="Удалить из сохраненных"
                onClick={handleDeleteClick}
            />
            }
            {location.pathname === '/movies' &&
            <button
                className={cardSaveToggleClassName}
                type="button"
                aria-label="Сохранить фильм"
                onClick={handleSaveToggle}
            >
                {cardSaveButtonContent}
            </button>
            }
        </li>
    )
}

export default MoviesCard;
