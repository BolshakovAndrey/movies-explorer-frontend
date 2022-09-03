import isValidUrl from './isValidUrl';
import {MOVIES_URL} from './constants';

const getFullImageUrl = (param) => {
    if (isValidUrl(param)) {
        return param;
    }
    /* API фильмов предоставляет только путь, который хранится .url */
    return `${MOVIES_URL}${param.url}`;
};

export default getFullImageUrl;
