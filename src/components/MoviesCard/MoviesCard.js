import './MoviesCard.css';
import {ReactComponent as LikeIcon} from '../../images/like_invisible.svg';

function MoviesCard({card}) {
    return (
        <li className="movies-card">
            <img
                className="movies-card__image"
                src={card.thumbnail}
                alt={`Кадр из фильма ${card.name}`}
            />
            <div className="movies-card__desc">
                <h3 className="movies-card__title">{card.name}</h3>
                <button className="movies-card__btn"
                        type="button"
                        aria-label="Сохранить фильм"
                >
                    <LikeIcon
                        className="movies-card__btn-icon"
                        fill="currentColor"
                    />
                </button>
            </div>
            <p className="movies-card__duration">{card.duration}</p>
        </li>
    )
}

export default MoviesCard;
