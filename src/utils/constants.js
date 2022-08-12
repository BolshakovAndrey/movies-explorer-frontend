export const BASE_URL = 'https://api.bolshakovav.nomoredomains.xyz';

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
    CONFLICT: 'Пользователь с такими email уже существует.',
    BAD_REQUEST: 'Ошибка обновления профиля.'
};

export const DEFAULT_ERROR_MESSAGE = 'Ошибка сервера.';
