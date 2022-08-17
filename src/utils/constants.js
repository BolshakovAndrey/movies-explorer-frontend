export const MAIN_API = 'https://api.bolshakovav.nomoredomains.xyz';
export const MOVIES_URL = 'https://api.nomoreparties.co';
export const MOVIES_API = 'https://api.nomoreparties.co/beatfilm-movies';

export const SHORT_FILM_MAX_DURATION = 40;

export const registrationErrorMessages = {
    CONFLICT: 'Пользователь с такими данными уже существует.',
    BAD_REQUEST: 'Ошибка регистрациию.'
};

export const loginErrorMessages = {
    INVALID_CREDENTIALS: 'Введены не верные логин или пароль.',
    UNAUTHORIZED: 'Ошибка авторизации. Токен не передан.',
    BAD_REQUEST: 'Ошибка авторизации. Передан не корректный токен.'
};

export const profileErrorMessages = {
    SUCCESS: 'Ваш профиль был успешно обновлен',
    CONFLICT: 'Пользователь с такими email уже существует.',
    BAD_REQUEST: 'Ошибка обновления профиля.'
};


export const patterns = {
    NAME: '[a-zA-Z -]{2,30}',
    EMAIL: '^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\\.)+[A-Za-z]+$',
};

export const customErrorMessages = {
    NAME: 'Используйте только латиницу, пробел или дефис',
    EMAIL: 'Используйте email формата name@domain.ru',
    PASSWORD: 'Минимальная длина пароля - 8 символов',
};

export const SERVER_ERROR_MESSAGE = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

export const DEFAULT_ERROR_MESSAGE = 'На сервере произошла ошибка';
