// компонент страницы авторизации
import FieldsetElement from "../FieldsetElement/FieldsetElement";
import FormElement from "../FormElement/FormElement";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../../../hooks/useForm";
import { useEffect } from "react";

export default function Login({ onLogin, isSending, messageErrorForm, loggedIn }) {

  const navigate = useNavigate();
  const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!values.emailLogin || !values.passwordLogin){
      return;
    }
    //onLogin({ emailLogin, passwordLogin });
    let { emailLogin, passwordLogin } = values;
    onLogin(emailLogin, passwordLogin)
    .then((res) => {
      resetForm({}, {}, true);
    })
  }

  useEffect(() => {
    if (loggedIn) {
      navigate("/movies", { replace: true });
    }
  }, [loggedIn, navigate]);
  
  return (
    <main className="login">
      <FormElement
        greeting="Рады видеть!"
        button={isSending ? "Сохранение >>>" : "Войти"}
        isSignup={false}
        onSubmitForm={handleSubmit}
        isDisabled={!isValid || isSending}
        messageErrorForm={messageErrorForm}
      >
        <FieldsetElement
          label="E-mail"
          inputId="emailLogin"
          type="email"
          name="emailLogin"
          value={values.emailLogin || ""}
          required={true}
          spanId="emailLogin-error"
          placeholder="pochta@yandex.ru"
          onChangeInput={handleChange}
          spanMessage={errors.emailLogin || ""}
          minLength="2"
          formId="formUser"
          autoComplete="off"
        />
        <FieldsetElement
          label="Пароль"
          inputId="passwordLogin"
          type="password"
          name="passwordLogin"
          value={values.passwordLogin || ""}
          required={true}
          spanId="passwordLogin-error"
          placeholder=""
          onChangeInput={handleChange}
          spanMessage={errors.passwordLogin || ""}
          minLength="8"
          formId="formUser"
          autoComplete="off"
        />
      </FormElement>
    </main>
  );
}
