// компонент страницы авторизации
import { useState } from "react";
import FieldsetElement from "../FieldsetElement/FieldsetElement";
import FormElement from "../FormElement/FormElement";
import "./Login.css";
import { RegExEmail } from "../../../utils/RegExEmail";
import { RegExName } from "../../../utils/RegExName";
import { RegExPassword } from "../../../utils/RegExPassword";
import { useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../../../hooks/useForm";

export default function Login({ onLogin, isSending, messageErrorForm, loggedIn }) {

  const navigate = useNavigate();
  const {values, handleChange, errors, isValid, resetForm, setIsValid} = useFormWithValidation();

  // Стейт, в котором содержится значение инпута
  //const [userData, setUserData] = useState({
    //emailLogin: '',
    //passwordLogin: '',
  //});
  //const [message, setMessage] = useState("");

  //const resetForm = () => {
    //setUserData({
      //...userData,
      //emailLogin: '',
      //passwordLogin: '',
    //});
  //};

  //const handleChange = (evt) => {
    //const {name, value} = evt.target;
    //setUserData({
      //...userData,
      //[name]: value
    //});
  //};

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
      console.log('onLogin');
    })
  }

  if (!RegExEmail.test(values.emailLogin ) && values.emailLogin){
    errors.emailLogin = "Введите почту согласно шаблону. Допустимы точки, тире и нижнее подчеркивание.";
  };
  
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
          maxLength="16"
          autoComplete="off"
        />
      </FormElement>
    </main>
  );
}
