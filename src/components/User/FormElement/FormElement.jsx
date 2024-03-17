import "./FormElement.css";
import Logo from "../../Logo/Logo";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export default function FormElement({ children, greeting, button, isSignup, onSubmitForm, isDisabled, messageErrorForm="" }) {
  const classNameBtnSubmit = `formElement__btn-submit ${isDisabled ? "formElement__btn-submit_inactive" : ""}`;

  return (
    <form id="formUser" className="formElement" onSubmit={onSubmitForm}>
      <div className="formElement__top">
        <Logo />
        <p className="formElement__greeting">{greeting}</p>
      </div>
      <div className="formElement__fieldset">{children}</div>
      <span className="formElement__error">{messageErrorForm}</span>
      <button className={classNameBtnSubmit} type="submit" disabled={isDisabled} >{button}</button>
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
