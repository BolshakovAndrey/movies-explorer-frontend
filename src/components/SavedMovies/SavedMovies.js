import {useContext, useEffect, useState} from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {filterMovies, filterMoviesByDuration} from '../../utils/filterMovies';

function SavedMovies({ moviesData, onCardDelete }) {
    const [isShortfilmCheckboxOn, setIsShortfilmCheckboxOn] = useState(false);
    const [isFilteringMoviesData, setIsFilteringMoviesData] = useState(false);
    const [filteredMoviesData, setFilteredMoviesData] = useState([]);
    const [noMoviesFound, setNoMoviesFound] = useState(false);

    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        let lastSearchResult = [];
        if (localStorage.getItem('savedMovies')) {
            lastSearchResult = JSON.parse(localStorage.getItem('savedMovies'));
        }

        if (isShortfilmCheckboxOn) {
            const lastSearchResultShortfilms = filteredMoviesData.filter(filterMoviesByDuration);
            setFilteredMoviesData(lastSearchResultShortfilms);

            if (lastSearchResultShortfilms.length === 0) {
                setNoMoviesFound(true);
            }

        } else {
            if (lastSearchResult.length !== 0) {
                moviesData = lastSearchResult;
                setFilteredMoviesData(lastSearchResult);
            } else {
                setFilteredMoviesData(filterCurrentUserMoviesData(moviesData));
            }
        }
    }, [isShortfilmCheckboxOn]);

    useEffect(() => {
        setFilteredMoviesData(filterCurrentUserMoviesData(moviesData));
    }, [moviesData]);

    const handleCheckboxChange = (state) => {
        setIsShortfilmCheckboxOn(state);
    };

    // поиск по запросу
    const handleSearchFormSubmit = (searchQuery) => {
        setIsFilteringMoviesData(true);

        let filteredMoviesData = [];
        filteredMoviesData = filterMovies(searchQuery, isShortfilmCheckboxOn, filterCurrentUserMoviesData(moviesData));

        if (filteredMoviesData.length === 0) {
            setNoMoviesFound(true);
        } else {
            setNoMoviesFound(false);
        }

        setFilteredMoviesData(filteredMoviesData);
        localStorage.setItem('savedMovies', JSON.stringify(filteredMoviesData));

        setIsFilteringMoviesData(false);
    }

    // проверка чекбокса в локальном хранилище
    useEffect(() => {
        if (localStorage.getItem(`isShortfilmCheckboxOn`) === 'true') {
            setIsShortfilmCheckboxOn(true);
        } else {
            setIsShortfilmCheckboxOn(false);
        }
    }, [currentUser]);

    const filterCurrentUserMoviesData = (moviesData) => {
        return moviesData.filter(
            (card) => !card.owner || (card.owner._id ?? card.owner) === currentUser._id,
        );
    }

    const handleCardDelete = (card) => {
        onCardDelete(card);
    }

    return (
        <main className="main page__content">
            <SearchForm
                onCheckboxChange={handleCheckboxChange}
                onSubmit={handleSearchFormSubmit}
                isShortfilmCheckboxOn={isShortfilmCheckboxOn}
            />
            <MoviesCardList
                isFilteringMoviesData={isFilteringMoviesData}
                noMoviesFound={noMoviesFound}
                cards={filteredMoviesData}
                onCardDelete={handleCardDelete}
            />
        </main>
    )
}

export default SavedMovies;
