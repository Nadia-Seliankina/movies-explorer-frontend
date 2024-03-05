// компонент страницы регистрации
import FormElement from "../FormElement/FormElement";
import FieldsetElement from "../FieldsetElement/FieldsetElement";
import "./Register.css";
import { useState } from "react";

export default function Register({ onRegister }) {
  // Стейт, в котором содержится значение инпута
  const [userData, setUserData] = useState({
    nameRegister: '',
    emailRegister: '',
    passwordRegister: '',
  });
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setUserData({
      ...userData,
      nameRegister: '',
      emailRegister: '',
      passwordRegister: '',
    });
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!userData.passwordRegister || !userData.emailRegister || !userData.nameRegister){
      return;
    }
    //onRegister({ nameRegister, emailRegister, passwordRegister });
    let { nameRegister, emailRegister, passwordRegister } = userData;
    onRegister(nameRegister, emailRegister, passwordRegister)
    .then((res) => {
      resetForm();
      console.log('onLogin');
    })
    .catch((err) => {
      setMessage(err.message || "Что-то пошло не так");
    });;
    
    console.log('onRegister');
  }

  return (
    <main className="register">
      <FormElement
        greeting="Добро пожаловать!"
        button="Зарегистрироваться"
        isSignup={true}
        onSubmitForm={handleSubmit}
      >
        <FieldsetElement
          label="Имя"
          inputId="nameRegister"
          type="text"
          name="nameRegister"
          value={userData.nameRegister}
          required={true}
          spanId="nameRegister-error"
          placeholder=""
          onChangeInput={handleChange}
          spanMessage={message}
        />
        <FieldsetElement
          label="E-mail"
          inputId="emailRegister"
          type="text"
          name="emailRegister"
          value={userData.emailRegister}
          required={true}
          spanId="emailRegister-error"
          placeholder=""
          onChangeInput={handleChange}
          spanMessage={message}
        />
        <FieldsetElement
          label="Пароль"
          inputId="passwordRegister"
          type="password"
          name="passwordRegister"
          value={userData.passwordRegister}
          required={true}
          spanId="passwordRegister-error"
          placeholder=""
          onChangeInput={handleChange}
          spanMessage={message}
        />
      </FormElement>
    </main>
  );
}
