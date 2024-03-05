import "./FormElement.css";
import Logo from "../../Logo/Logo";
import { NavLink } from "react-router-dom";

export default function FormElement({ children, greeting, button, isSignup, onSubmitForm }) {
  return (
    <form className="formElement" noValidate onSubmit={onSubmitForm}>
      <div className="formElement__top">
        <Logo />
        <p className="formElement__greeting">{greeting}</p>
      </div>
      <fieldset className="formElement__fieldset">{children}</fieldset>
      <button className="formElement__btn-submit" type="submit">{button}</button>
      {isSignup ? (
        <NavLink className="formElement__link" to="/signin">
          Уже зарегистрированы? <span className="formElement__link-span">Войти</span>
        </NavLink>
      ) : (
        <NavLink className="formElement__link" to="/signup">
          Ещё не зарегистрированы? <span className="formElement__link-span">Регистрация</span>
        </NavLink>
      )}
    </form>
  );
}
