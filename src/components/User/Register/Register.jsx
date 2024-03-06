// компонент страницы регистрации
import FormElement from "../FormElement/FormElement";
import FieldsetElement from "../FieldsetElement/FieldsetElement";
import "./Register.css";
import { useContext, useEffect, useState } from "react";
import { useForm, useFormWithValidation } from "../../../hooks/useForm";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import { RegExEmail } from "../../../utils/RegExEmail";
import { RegExName } from "../../../utils/RegExName";
import { RegExPassword } from "../../../utils/RegExPassword";
import { useNavigate } from "react-router-dom";

export default function Register({ onRegister, isSending, messageErrorForm, loggedIn }) {
  //const currentUser = useContext(CurrentUserContext);

  const navigate = useNavigate();

  const {values, handleChange, errors, isValid, resetForm, setIsValid} = useFormWithValidation();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!values.passwordRegister || !values.emailRegister || !values.nameRegister){
      return;
    }
    //onRegister({ nameRegister, emailRegister, passwordRegister });
    let { nameRegister, emailRegister, passwordRegister } = values;
    onRegister(nameRegister, emailRegister, passwordRegister)
    .then((res) => {
      resetForm({}, {}, true);
      console.log('onRegister');
    });
  }

  if (!RegExEmail.test(values.emailRegister ) && values.emailRegister){
    errors.emailRegister = "Введите почту согласно шаблону. Допустимы точки, тире и нижнее подчеркивание.";
  };

  if (!RegExName.test(values.nameRegister ) && values.nameRegister){
    errors.nameRegister = "Имя может содержать только латиницу, кириллицу, пробел или дефис.";
  };
 
  useEffect(() => {
    if (!RegExPassword.test(values.passwordRegister ) && values.passwordRegister){
      errors.passwordRegister = "Введите от 8 до 16 символов.";
      setIsValid(false);
    };
  }, [values.passwordRegister]);

  // для сброса значения формы
  //useEffect(() => {
    //if(currentUser) {
      //resetForm(currentUser, {}, true);
    //}
  //}, [currentUser, resetForm]);

  useEffect(() => {
    if (loggedIn){
      navigate("/movies", { replace: true });
    };
  }, [loggedIn]);

  return (
    <main className="register">
      <FormElement
        greeting="Добро пожаловать!"
        button={isSending ? "Сохранение >>>" : "Зарегистрироваться"}
        isSignup={true}
        onSubmitForm={handleSubmit}
        isDisabled={!isValid || isSending}
        messageErrorForm={messageErrorForm}
      >
        <FieldsetElement
          label="Имя"
          inputId="nameRegister"
          type="text"
          name="nameRegister"
          value={values.nameRegister || ""}
          required={true}
          spanId="nameRegister-error"
          placeholder=""
          onChangeInput={handleChange}
          spanMessage={errors.nameRegister || ""}
          minLength="2"
        />
        <FieldsetElement
          label="E-mail"
          inputId="emailRegister"
          type="text"
          name="emailRegister"
          value={values.emailRegister || ""}
          required={true}
          spanId="emailRegister-error"
          placeholder="pochta@yandex.ru"
          onChangeInput={handleChange}
          spanMessage={errors.emailRegister || ""}
          minLength="2"
        />
        <FieldsetElement
          label="Пароль"
          inputId="passwordRegister"
          type="password"
          name="passwordRegister"
          value={values.passwordRegister || ""}
          required={true}
          spanId="passwordRegister-error"
          placeholder=""
          onChangeInput={handleChange}
          spanMessage={errors.passwordRegister || ""}
          minLength="8"
          maxLength="16"
        />
      </FormElement>
    </main>
  );
}
