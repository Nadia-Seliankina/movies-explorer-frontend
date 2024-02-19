import "./PopupMenu.css";
import { NavLink } from "react-router-dom";
import userLogo from "../../images/user-logo.svg";

export default function PopupMenu() {
  return (
    <nav className="popupMenu">
      <NavLink to="/" className={({ isActive }) =>
          `navigation__link ${isActive ? "navigation__link_active" : ""}`
        }>
      Главная
      </NavLink>
    
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          `navigation__link ${isActive ? "navigation__link_active" : ""}`
        }
      >
        Фильмы
      </NavLink>
      <NavLink
        to="/saved-movies"
        className={({ isActive }) =>
          `navigation__link ${isActive ? "navigation__link_active" : ""}`
        }
      >
        Сохранённые фильмы
      </NavLink>
      <NavLink className="navigation__profile" to="/profile">
        <img className="navigation__profile-img" src={userLogo} alt="юзер" />
        <p className="navigation__profile-text">Аккаунт</p>
      </NavLink>
    </nav>
  );
}
