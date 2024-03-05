// компонент страницы авторизации
import { useState } from "react";
import FieldsetElement from "../FieldsetElement/FieldsetElement";
import FormElement from "../FormElement/FormElement";
import "./Login.css";

export default function Login({ onLogin }) {
  // Стейт, в котором содержится значение инпута
  const [userData, setUserData] = useState({
    emailLogin: '',
    passwordLogin: '',
  });
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setUserData({
      ...userData,
      emailLogin: '',
      passwordLogin: '',
    });
  };

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!userData.emailLogin || !userData.passwordLogin){
      return;
    }
    //onLogin({ emailLogin, passwordLogin });
    let { emailLogin, passwordLogin } = userData;
    onLogin(emailLogin, passwordLogin)
    .then((res) => {
      resetForm();
      console.log('onLogin');
    })
    .catch((err) => {
      setMessage(err.message || "Что-то пошло не так");
    });
  }
  
  return (
    <main className="login">
      <FormElement
        greeting="Рады видеть!"
        button="Войти"
        isSignup={false}
        onSubmitForm={handleSubmit}
      >
        <FieldsetElement
          label="E-mail"
          inputId="emailLogin"
          type="text"
          name="emailLogin"
          value={userData.emailLogin}
          required={true}
          spanId="emailLogin-error"
          placeholder=""
          onChangeInput={handleChange}
          spanMessage={message}
        />
        <FieldsetElement
          label="Пароль"
          inputId="passwordLogin"
          type="password"
          name="passwordLogin"
          value={userData.passwordLogin}
          required={true}
          spanId="passwordLogin-error"
          placeholder=""
          onChangeInput={handleChange}
          spanMessage={message}
        />
      </FormElement>
    </main>
  );
}
