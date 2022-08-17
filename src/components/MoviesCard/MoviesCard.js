import React from 'react';
import './MoviesCard.css';
import {ReactComponent as CheckIcon} from '../../images/saved.svg';
import {ReactComponent as UnCheckIcon} from '../../images/unSaved.svg';
import {Link, useLocation} from "react-router-dom";
import {MOVIES_URL} from "../../utils/constants";
import convertDuration from '../../utils/convertDuration';

function MoviesCard({ card }) {
    let location = useLocation();

    // временный для целей разработки
    const [isSaved, setIsSaved] = React.useState(false);

    const handleSaveClick = () => {
        setIsSaved(true);
    };
    // end

    const cardSaveButtonClassName = (
        `movies-card__btn movies-card__btn_use_save ${isSaved ? 'movies-card__btn_active' : ''}`
    );

    const cardSaveButtonContent = (
        isSaved ? <CheckIcon /> : <UnCheckIcon />
    );

    return (
        <li className="movies-card">
            <Link
                to={{ pathname: card.trailerLink }}
                target="_blank"
                aria-label={`Открыть трейлер фильма ${card.nameRU} на youtube`}
            >
                <img
                    className="movies-card__image"
                    src={`${MOVIES_URL}${card.image.url}`}
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
            />
            }
            {location.pathname === '/movies' &&
            <button
                className={cardSaveButtonClassName}
                type="button"
                aria-label="Сохранить фильм"
                onClick={handleSaveClick}
            >
                {cardSaveButtonContent}
            </button>
            }
        </li>
    )
}

export default MoviesCard;
