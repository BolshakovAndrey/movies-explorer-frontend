import AboutMe from '../AboutMe/AboutMe'
import AboutProject from '../AboutProject/AboutProject'
import Promo from '../Promo/Promo';
import NavTab from "../NavTab/NavTab";
import Techs from "../Techs/Techs";

function Main() {
    return (
        <>
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
        </>
    );
}

export default Main;


