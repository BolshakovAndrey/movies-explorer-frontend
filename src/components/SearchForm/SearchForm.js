import {useEffect, useState} from 'react';
import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import {ReactComponent as SearchIcon} from '../../images/search-icon.svg';

function SearchForm({ onCheckboxChange, onSubmit, isShortfilmCheckboxOn }) {
    const [errorMessage, setErrorMessage] = useState('');
    const [searchQuery, setSearchQuery] = useState(localStorage.getItem("searchQuery"))
    useEffect(() => {
        setErrorMessage('');
    }, [searchQuery]);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!searchQuery) {
            setErrorMessage('Нужно ввести ключевое слово');
            return;
        }
        onSubmit(searchQuery);
    };

    const handleSearchQueryChange = (e) => {
        const target = e.target;
        console.log(e.target.value)
        localStorage.setItem('searchQuery', e.target.value)
        setSearchQuery(target.value);
    }

    const handleCheckboxChange = (e) => {
        const target = e.target;
        onCheckboxChange(target.checked);
    }

    return (
        <section className="search-form main__section">
            <div className="search-form__container main__section-container main__section-container_size_xs">
                <form onSubmit={handleSubmit} className="search-form__content" name="search-form" noValidate>
                    <label className="search-form__label" htmlFor="search-form-movie">
                        <input
                            className="search-form__item"
                            id="search-form-movie"
                            type="text"
                            name="keyword"
                            placeholder="Фильм"
                            required
                            onChange={handleSearchQueryChange}
                            value={searchQuery}
                        />
                        <p className="search-form__item-error">
                            {errorMessage}
                        </p>
                    </label>
                    <button
                        className="search-form__submit-btn"
                        type="submit"
                        aria-label="Найти фильмы"
                    >
                        <SearchIcon
                            className="search-form__submit-btn-icon"
                            fill="currentColor"
                        />
                    </button>
                    <FilterCheckbox
                        onChange={handleCheckboxChange}
                        isShortfilmCheckboxOn={isShortfilmCheckboxOn}

                    />
                </form>
            </div>
        </section>
    )
}

export default SearchForm;
