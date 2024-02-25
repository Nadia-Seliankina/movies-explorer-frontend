// компонент страницы авторизации
import FieldsetElement from "../FieldsetElement/FieldsetElement";
import FormElement from "../FormElement/FormElement";
import "./Login.css";

export default function Login() {
  return (
    <main className="login">
      <FormElement greeting="Рады видеть!" button="Войти" isSignup={false}>
        <FieldsetElement
          label="E-mail"
          inputId="userEmail"
          type="text"
          name="userEmail"
          value="pochta@yandex.ru"
          required={true}
          spanId="userEmail-error"
          placeholder="pochta@yandex.ru"
        />
        <FieldsetElement
          label="Пароль"
          inputId="password"
          type="password"
          name="password"
          value="••••••••••••••"
          required={true}
          spanId="password-error"
          placeholder="Пароль"
        />
      </FormElement>
    </main>
  );
}
