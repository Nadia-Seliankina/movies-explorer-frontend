// компонент, который отвечает за меню навигации на сайте
import "./Navigation.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
      <nav>
        <NavLink to="/movies">Фильмы</NavLink>
        <NavLink to="/saved-movies">Сохранённые фильмы</NavLink>
      </nav>
      <nav>
        <NavLink to="/signup">Регистрация</NavLink>
        <NavLink to="/signin">Авторизация</NavLink>
        <NavLink to="/profile">Аккаунт</NavLink>
      </nav>
    </div>
  );
}
