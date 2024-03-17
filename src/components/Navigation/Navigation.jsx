// компонент, который отвечает за меню навигации на сайте
import "./Navigation.css";
import BtnProfile from "../BtnProfile/BtnProfile";
import { NavLink, Route, Routes } from "react-router-dom";

export default function Navigation({ isLogged, onClickMenu }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          isLogged ? (
            <nav className="navigation__user-online">
              <nav className="navigation__films">
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    `navigation__link ${isActive ? "navigation__link_active" : ""
                    }`
                  }
                >
                  Фильмы
                </NavLink>
                <NavLink
                  to="/saved-movies"
                  className={({ isActive }) =>
                    `navigation__link ${isActive ? "navigation__link_active" : ""
                    }`
                  }
                >
                  Сохранённые фильмы
                </NavLink>
              </nav>
              <BtnProfile isNavigation={true} />
              <button className="navigation__button" type="button"  onClick={onClickMenu}>
                <span className="navigation__button-span"></span>
              </button>
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
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `navigation__link ${isActive ? "navigation__link_active" : ""
                  }`
                }
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                className={({ isActive }) =>
                  `navigation__link ${isActive ? "navigation__link_active" : ""
                  }`
                }
              >
                Сохранённые фильмы
              </NavLink>
            </nav>
            <BtnProfile isNavigation={true} />
            <button className="navigation__button" type="button"  onClick={onClickMenu}>
              <span className="navigation__button-span"></span>
            </button>
          </nav>
        }
      />
      <Route
        path="/saved-movies"
        element={
          <nav className="navigation__user-online">
            <nav className="navigation__films">
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `navigation__link ${isActive ? "navigation__link_active" : ""
                  }`
                }
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                className={({ isActive }) =>
                  `navigation__link ${isActive ? "navigation__link_active" : ""
                  }`
                }
              >
                Сохранённые фильмы
              </NavLink>
            </nav>
            <BtnProfile isNavigation={true} />
            <button className="navigation__button" type="button"  onClick={onClickMenu}>
              <span className="navigation__button-span"></span>
            </button>
          </nav>
        }
      />
      <Route
        path="/profile"
        element={
          <nav className="navigation__user-online">
            <nav className="navigation__films">
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `navigation__link ${isActive ? "navigation__link_active" : ""
                  }`
                }
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                className={({ isActive }) =>
                  `navigation__link ${isActive ? "navigation__link_active" : ""
                  }`
                }
              >
                Сохранённые фильмы
              </NavLink>
            </nav>
            <BtnProfile isNavigation={true} />
            <button className="navigation__button" type="button"  onClick={onClickMenu}>
              <span className="navigation__button-span"></span>
            </button>
          </nav>
        }
      />
    </Routes>
  );
}
