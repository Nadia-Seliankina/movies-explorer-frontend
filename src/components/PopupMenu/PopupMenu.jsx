import BtnProfile from "../BtnProfile/BtnProfile";
import "./PopupMenu.css";
import { NavLink } from "react-router-dom";


export default function PopupMenu({ isOpen, onClose, onMouseDown }) {
  // Исользуем JavaScript-шаблон для склейки значения атрибута
  const classNamePopup = `popupMenu ${isOpen ? "popupMenu_opened" : ""}`;

  return (
    <section className={classNamePopup} onMouseDown={onMouseDown}>
      <nav className="popupMenu__container">
        <button className="popupMenu__btn-close" type="button" onClick={onClose}></button>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `popupMenu__link ${isActive ? "popupMenu__link_active" : ""}`
          }
        >
          Главная
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `popupMenu__link ${isActive ? "popupMenu__link_active" : ""}`
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={({ isActive }) =>
            `popupMenu__link ${isActive ? "popupMenu__link_active" : ""}`
          }
        >
          Сохранённые фильмы
        </NavLink>
        <BtnProfile isNavigation={false} />
      </nav>
    </section>
  );
}
