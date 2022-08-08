import React, {useState} from 'react';
import './MoviesCard.css';
import {ReactComponent as CheckIcon} from '../../images/saved.svg';
import {ReactComponent as UnCheckIcon} from '../../images/unSaved.svg';

function MoviesCard({card}) {

    const [isSaved, setIsSaved] = useState(false);
    // временно для целей разработки
    const handleSaveClick = () => {
        setIsSaved(true);
    }

    const cardSaveButtonClassName = (
        `movies-card__save-btn ${isSaved ? 'movies-card__save-btn_active' : ''}`
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
                <button className={cardSaveButtonClassName}
                        type="button"
                        aria-label="Сохранить фильм"
                        onClick={handleSaveClick}
                >
                    {cardSaveButtonContent}
                </button>
            </div>
            <p className="movies-card__duration">{card.duration}</p>
        </li>
    )
}

export default MoviesCard;
