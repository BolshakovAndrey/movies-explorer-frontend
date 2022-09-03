import {SHORT_FILM_MAX_DURATION} from './constants';

export const filterMoviesByDuration = (movie) => {
    return movie.duration <= SHORT_FILM_MAX_DURATION;
}

export const filterMovies = (searchQuery, isShortfilmSwitchOn, movies) => {

    const filterMoviesByKeyword = (movie) => {
        return movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
    }

    if (isShortfilmSwitchOn) {
        return movies.filter(filterMoviesByDuration).filter(filterMoviesByKeyword);
    } else {
        return movies.filter(filterMoviesByKeyword);
    }
}

export default filterMovies;


