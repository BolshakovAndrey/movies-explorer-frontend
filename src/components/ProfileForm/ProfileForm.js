import React, {useContext} from 'react';
import './ProfileForm.css';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function ProfileForm({ inputsData }) {
    const currentUser = useContext(CurrentUserContext);

    return (
        <form className="profile-form">
            <h2 className="profile-form__heading">Привет, {currentUser.name}!</h2>
            <fieldset className="profile-form__items">
                {inputsData.map((item) => (
                    <div className="profile-form__item-container" key={item.key}>
                        <label className="profile-form__label" htmlFor={item.id}>{item.label}</label>
                        <input
                            className={`profile-form__item profile-form__item_el_${item.name}`}
                            id={item.id}
                            type={item.type}
                            name={item.name}
                            value={item.value}
                            onChange={item.onChange}
                            placeholder={item.placeholder}
                            maxLength={item.maxLength}
                            minLength={item.minLength}
                            required={item.required}
                        />
                        <p className="profile-form__error" id={item.errorId}>{/* Что-то пошло не так... */}</p>
                    </div>
                ))}
            </fieldset>
            <div className="profile-form__btns">
                <button
                    className="profile-form__btn profile-form__btn_use_submit"
                    type="submit"
                >
                    Редактировать
                </button>
                <button
                    className="profile-form__btn profile-form__btn_use_signout"
                    type="submit"
                >
                    Выйти из аккаунта
                </button>
            </div>
        </form>
    );
}

export default ProfileForm;