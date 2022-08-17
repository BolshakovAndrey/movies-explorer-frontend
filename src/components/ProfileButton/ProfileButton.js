import React from 'react';
import './ProfileButton.css';
import {NavLink} from 'react-router-dom';


function ProfileButton({onClick}) {
    return (
        <NavLink
            className="profile-btn"
            to={{pathname: '/profile'}}
            onClick={onClick}
        >
            Аккаунт
        </NavLink>
    );
}

export default ProfileButton;
