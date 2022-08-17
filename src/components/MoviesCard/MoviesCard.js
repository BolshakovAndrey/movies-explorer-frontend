import React, {useState} from 'react';
import './MoviesCard.css';
import {ReactComponent as CheckIcon} from '../../images/saved.svg';
import {ReactComponent as UnCheckIcon} from '../../images/unSaved.svg';
import {useLocation} from "react-router-dom";

function MoviesCard({card}) {

    let location = useLocation();

    const [isSaved, setIsSaved] = useState(false);
    // временно для целей разработки
    const handleSaveClick = () => {
        setIsSaved(true);
    }

    const cardSaveButtonClassName = (
        `movies-card__btn movies-card__btn_use_save ${isSaved ? 'movies-card__btn_active' : ''}`
    )

    const cardSaveButtonContent = (
        isSaved ? <CheckIcon /> : <UnCheckIcon />
    );

    return (
        <li className="movies-card">
            <img
                className="movies-card__image"
                src={card.thumbnail}
                alt={`Кадр из фильма ${card.name}`}
            />
            <div className="movies-card__desc">
                <h3 className="movies-card__title">{card.name}</h3>
                {location.pathname === '/movies' &&
                <button className={cardSaveButtonClassName}
                        type="button"
                        aria-label="Сохранить фильм"
                        onClick={handleSaveClick}
                >
                    {cardSaveButtonContent}
                </button>
                }
                {location.pathname === '/saved-movies' &&
                <button
                    className="movies-card__btn movies-card__btn_use_delete"
                    type="button"
                    aria-label="Удалить из сохраненных"
                />
                }
            </div>
            <p className="movies-card__duration">{card.duration}</p>
        </li>
    )
}

export default MoviesCard;
