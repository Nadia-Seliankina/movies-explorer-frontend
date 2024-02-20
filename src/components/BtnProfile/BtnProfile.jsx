import "./BtnProfile.css";
import { NavLink } from "react-router-dom";
import userLogo from "../../images/user-logo.svg";

export default function BtnProfile({ isNavigation }) {
  // Исользуем JavaScript-шаблон для склейки значения атрибута
  const classNamePopup = `btnProfile ${
    isNavigation ? "btnProfile_navigation" : ""
  }`;

  return (
    <NavLink className={classNamePopup} to="/profile">
      <img className="btnProfile__img" src={userLogo} alt="юзер" />
      <p className="btnProfile__text">Аккаунт</p>
    </NavLink>
  );
}
