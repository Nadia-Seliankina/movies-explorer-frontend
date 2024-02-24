// компонент страницы регистрации
import FormElement from "../FormElement/FormElement";
import FieldsetElement from "../FieldsetElement/FieldsetElement";
import "./Register.css";

export default function Register() {
  return (
    <main className="register">
      <FormElement
        greeting="Добро пожаловать!"
        button="Зарегистрироваться"
        isSignup={true}
      >
        <FieldsetElement
          label="Имя"
          inputId="userName"
          type="text"
          name="userName"
          value="Виталий"
          required={true}
          spanId="userName-error"
        />
        <FieldsetElement
          label="E-mail"
          inputId="userEmail"
          type="text"
          name="userEmail"
          value="pochta@yandex.ru"
          required={true}
          spanId="userEmail-error"
        />
        <FieldsetElement
          label="Пароль"
          inputId="password"
          type="password"
          name="password"
          value="••••••••••••••"
          required={true}
          spanId="password-error"
        />
      </FormElement>
    </main>
  );
}
