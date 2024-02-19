// компонент, который отвечает за меню навигации на сайте
import "./Navigation.css";
import { NavLink, Route, Routes } from "react-router-dom";
import userLogo from "../../images/user-logo.svg"
/*import burger from "../../images/burger.svg"*/

export default function Navigation({ isLogged }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          isLogged ? (
            <nav className="navigation__user-online">
              <nav className="navigation__films">
                <NavLink to="/movies" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>
                  Фильмы
                </NavLink>
                <NavLink to="/saved-movies" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>
                  Сохранённые фильмы
                </NavLink>
              </nav>
              <NavLink className="navigation__profile" to="/profile">
                <img className="navigation__profile-img" src={userLogo} alt="юзер" />
                <p className="navigation__profile-text">Аккаунт</p>
              </NavLink>
              {/*<button className="navigation__button"><img className="navigation__burger" src={burger} alt="меню" /></button>*/}
              <button className="navigation__button"><span className="navigation__button-span"></span></button>
            </nav>
          ) : (
            <nav className="navigation__user-offline">
              <NavLink className="navigation__signup" to="/signup">
                Регистрация
              </NavLink>
              <NavLink className="navigation__signin" to="/signin">
                Войти
              </NavLink>
            </nav>
          )
        }
      />
      <Route
        path="/movies"
        element={
          <nav className="navigation__user-online">
              <nav className="navigation__films">
                <NavLink to="/movies" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>
                  Фильмы
                </NavLink>
                <NavLink to="/saved-movies" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>
                  Сохранённые фильмы
                </NavLink>
              </nav>
              <NavLink className="navigation__profile" to="/profile">
                <img className="navigation__profile-img" src={userLogo} alt="юзер" />
                <p className="navigation__profile-text">Аккаунт</p>
              </NavLink>
            </nav>
        }
      />
      <Route
        path="/saved-movies"
        element={
          <nav className="navigation__user-online">
              <nav className="navigation__films">
                <NavLink to="/movies" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>
                  Фильмы
                </NavLink>
                <NavLink to="/saved-movies" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>
                  Сохранённые фильмы
                </NavLink>
              </nav>
              <NavLink className="navigation__profile" to="/profile">
                <img className="navigation__profile-img" src={userLogo} alt="юзер" />
                <p className="navigation__profile-text">Аккаунт</p>
              </NavLink>
            </nav>
        }
      />
      <Route
        path="/profile"
        element={
          <nav className="navigation__user-online">
              <nav className="navigation__films">
                <NavLink to="/movies" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>
                  Фильмы
                </NavLink>
                <NavLink to="/saved-movies" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>
                  Сохранённые фильмы
                </NavLink>
              </nav>
              <NavLink className="navigation__profile" to="/profile">
                <img className="navigation__profile-img" src={userLogo} alt="юзер" />
                <p className="navigation__profile-text">Аккаунт</p>
              </NavLink>
            </nav>
        }
      />
    </Routes>
  );
}
