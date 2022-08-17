import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard";

// временные данные для разработки
const cards = [
    {
        _id: '1',
        name: '33 слова о дизайне',
        duration: '1h 17m',
        thumbnail: "https://via.placeholder.com/270x151",
    },
    {
        _id: '2',
        name: 'Киноальманах «100 лет дизайна»',
        duration: '1h 17m',
        thumbnail: "https://via.placeholder.com/270x151",
    },
    {
        _id: '3',
        name: 'В погоне за Бенкси',
        duration: '1h 17m',
        thumbnail: "https://via.placeholder.com/270x151",
    },
    {
        _id: '4',
        name: 'Баския: Взрыв реальности',
        duration: '1h 17m',
        thumbnail: "https://via.placeholder.com/270x151",
    },
    {
        _id: '5',
        name: 'Бег это свобода',
        duration: '1h 17m',
        thumbnail: "https://via.placeholder.com/270x151",
    },
    {
        _id: '6',
        name: 'Книготорговцы',
        duration: '1h 17m',
        thumbnail: "https://via.placeholder.com/270x151",
    },
    {
        _id: '7',
        name: 'Соберись перед прыжком',
        duration: '1h 47m',
        thumbnail: "https://via.placeholder.com/270x151",
    },
    {
        _id: '8',
        name: 'Зона',
        duration: '1h 42m',
        thumbnail: "https://via.placeholder.com/270x151",
    },
];

function MoviesCardList() {
    return (
        <section className="movies main__section">
            <div className="main__section-container main__section-container_size_xs">
                <ul className="movies__list">
                    {cards.map((card) => (
                        <MoviesCard
                            key={card._id}
                            card={card}
                        />
                    ))}
                </ul>
                <button
                    className="movies__btn"
                    type="submit"
                    aria-label="Показать больше фильмов"
                >
                    Ещё
                </button>
            </div>
        </section>
    )
}

export default MoviesCardList;
