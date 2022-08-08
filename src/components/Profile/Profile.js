import {useContext} from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext"
import './Profile.css'

function Profile() {
    const currentUser = useContext(CurrentUserContext);
    return (
        <form className="profile">
            <h2 className="profile__heading">Привет, {currentUser.name}!</h2>
            <fieldset>
                <lavel className="profile__info" htmlFor="name">Имя</lavel>
                <input className="form__item form__item_el_name"
                       id="name"
                       type="text"
                       name="name"
                       value={currentUser.name}
                       placeholder="Имя"
                       minLength="2" maxLength="30"
                       required
                />
                <lavel className="profile__info" htmlFor="email">E-mail</lavel>
                <input className="form__item form__item_el_email"
                       id="email"
                       type="email"
                       name="email"
                       value={currentUser.email}
                       placeholder="E-mail"
                       minLength="2" maxLength="30"
                       required
                />
            </fieldset>
            <button className="form__submit"
                     type="submit" >
                Редактировать
            </button>
            <button className="form__submit"
                    type="button" >
                Выйти из аккаунта
            </button>
        </form>
    );
}

export default Profile;
