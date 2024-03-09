// компонент страницы регистрации
import FormElement from "../FormElement/FormElement";
import FieldsetElement from "../FieldsetElement/FieldsetElement";
import "./Register.css";
import { useEffect, useState } from "react";
import { useFormWithValidation } from "../../../hooks/useForm";
import { useNavigate } from "react-router-dom";

export default function Register({ onRegister, isSending, messageErrorForm, loggedIn }) {

  //const [isValidForm, setIsValidForm] = useState(false);

  const navigate = useNavigate();

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  //useEffect(() => {
    //if(isValid.nameRegister && isValid.emailRegister && isValid.passwordRegister) {
      //setIsValidForm(true);
    //}
  //}, [isValidForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !values.passwordRegister ||
      !values.emailRegister ||
      !values.nameRegister
    ) {
      return;
    }
    //onRegister({ nameRegister, emailRegister, passwordRegister });
    let { nameRegister, emailRegister, passwordRegister } = values;
    onRegister(nameRegister, emailRegister, passwordRegister).then((res) => {
      resetForm({}, {}, true);
      console.log("onRegister");
    });
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/movies", { replace: true });
    }
  }, [loggedIn, navigate]);

  return (
    <main className="register">
      <FormElement
        greeting="Добро пожаловать!"
        button={isSending ? "Сохранение >>>" : "Зарегистрироваться"}
        isSignup={true}
        onSubmitForm={handleSubmit}
        isDisabled={!isValid || isSending}
        //isDisabled={isSending || !isValidForm}
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
          //placeholder=""
          onChangeInput={handleChange}
          spanMessage={errors.nameRegister || ""}
          minLength="2"
          autoComplete="off"
          //formId="formUser"
        />
        <FieldsetElement
          label="E-mail"
          inputId="emailRegister"
          type="email"
          name="emailRegister"
          value={values.emailRegister || ""}
          required={true}
          spanId="emailRegister-error"
          placeholder="pochta@yandex.ru"
          onChangeInput={handleChange}
          spanMessage={errors.emailRegister || ""}
          minLength="2"
          autoComplete="off"
          //formId="formUser"
        />
        <FieldsetElement
          label="Пароль"
          inputId="passwordRegister"
          type="password"
          name="passwordRegister"
          value={values.passwordRegister || ""}
          required={true}
          spanId="passwordRegister-error"
          //placeholder=""
          onChangeInput={handleChange}
          spanMessage={errors.passwordRegister || ""}
          minLength="8"
          maxLength="16"
          autoComplete="off"
          //formId="formUser"
        />
      </FormElement>
    </main>
  );
}
