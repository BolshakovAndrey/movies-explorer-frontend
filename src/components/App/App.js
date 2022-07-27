import './App.css';
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Route, Switch} from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import {useState} from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function App() {

    const [currentUser, setCurrentUser] = useState({
        name: "Виталий",
        email: "vitaliy@email.com"
    });

    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <CurrentUserContext.Provider value={currentUser}>
        <div className="App">
            <Header loggedIn={loggedIn}/>

            <Switch>
                <Route exact path='/'>
                    <Main />
                </Route>
                <Route path='/movies'>
                    <Movies />
                </Route>
                <Route path='/saved-movies'>
                    <SavedMovies />
                </Route>
                <Route path='/profile'>
                    <Profile />
                </Route>
                <Route path='/signin'>
                    <Login />
                </Route>
                <Route path='/signup'>
                    <Register />
                </Route>
                <Route path="*">
                    <PageNotFound />
                </Route>
            </Switch>

            <Footer />
        </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
