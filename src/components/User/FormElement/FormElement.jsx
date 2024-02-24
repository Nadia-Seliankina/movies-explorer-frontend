import "./FormElement.css";
import Logo from "../../Logo/Logo";
import { NavLink } from "react-router-dom";

export default function FormElement({ children, greeting, button, isSignup }) {
  return (
    <form className="formElement">
      <div className="formElement__top">
        <Logo />
        <p className="formElement__greeting">{greeting}</p>
      </div>
      <fieldset className="formElement__fieldset">{children}</fieldset>
      <button className="formElement__btn-submit">{button}</button>
      {/*<Routes>
                <Route path="/signup" element={
                    <NavLink to="/signin/*">
                        Уже зарегистрированы? <span>Войти</span>
                    </NavLink>
                } />
                <Route path="/signin" element={
                    <NavLink to="/signup/*">
                    Ещё не зарегистрированы? <span>Регистрация</span>
                </NavLink>
                } />
            </Routes>*/}
      {isSignup ? (
        <NavLink className="formElement__link" to="/signin">
          Уже зарегистрированы? <span className="formElement__link formElement__link_span">Войти</span>
        </NavLink>
      ) : (
        <NavLink className="formElement__link" to="/signup">
          Ещё не зарегистрированы? <span className="formElement__link formElement__link_span">Регистрация</span>
        </NavLink>
      )}
    </form>
  );
}
