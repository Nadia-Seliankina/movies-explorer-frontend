// компонент, который отрисовывает шапку сайта на страницу.
// Шапка на главной странице, как и на других страницах, должна менять отображение,
// если пользователь авторизован или не авторизован. Такое поведение нужно сразу предусмотреть в вёрстке,
// даже несмотря на то, что сама авторизация ещё не реализована.
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <Link to="/">
        LOGO
      </Link>
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
