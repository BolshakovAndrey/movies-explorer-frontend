import React from 'react';
import './LogoLink.css';
import Logo from "../../images/header-logo.svg";
import {Link} from "react-router-dom";

function LogoLink({ logoLinkModifier }) {
    return(
        <Link
            className={`logo-link logo-link${logoLinkModifier}`}
            to={{ pathname: '/' }}
            aria-label="Перейти на страницу о проекте"
        >
            <img
                className={`logo-link__image logo-link__image${logoLinkModifier}`}
                src={Logo}
                alt="Логотип сервиса Movies Explorer"
            />
        </Link>
    )
}

export default LogoLink
