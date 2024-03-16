// возвращает значения, которые используем в компонентах
import { useCallback, useState } from "react";
import { RegExName } from "../utils/RegExName";
import { RegExEmail } from "../utils/RegExEmail";
import { RegExPassword } from "../utils/RegExPassword";

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  
  const handleChange = (event) => {
    const target = event.target; // инпут, у кот. изменилось значение
    const name = target.name; // значение атрибута
    const value = target.value; // текущее значение
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage }); // validationMessage хранит текущую ошибку
    setIsValid(target.closest(".formElement").checkValidity()); // получаем объект формы, получем статус валидности

    if(name === "nameRegister") {
      const isValidName = RegExName.test(value);
      setIsValid(target.closest(".formElement").checkValidity());
      setErrors({ ...errors, [name]: isValidName ? target.validationMessage : "Имя может содержать только латиницу, кириллицу, пробел или дефис." });
      if(!isValidName) {
        setIsValid(false);
      }
    }

    if(name === "nameProfile") {
      const isValidName = RegExName.test(value);
      setIsValid(target.closest(".profile__form").checkValidity());
      setErrors({ ...errors, [name]: isValidName ? target.validationMessage : "Имя может содержать только латиницу, кириллицу, пробел или дефис." });
      if(!isValidName) {
        setIsValid(false);
      }
    }

    if(name === "emailRegister" || name === "emailLogin") {
      const isValidEmail = RegExEmail.test(value);
      setIsValid(target.closest(".formElement").checkValidity());
      setErrors({ ...errors, [name]: isValidEmail ? target.validationMessage : "Введите почту согласно шаблону. Допустимы точки, тире и нижнее подчеркивание." });
      if(!isValidEmail) {
        setIsValid(false);
      }
    }

    if(name === "emailProfile") {
      const isValidEmail = RegExEmail.test(value);
      setIsValid(target.closest(".profile__form").checkValidity());
      setErrors({ ...errors, [name]: isValidEmail ? target.validationMessage : "Введите почту согласно шаблону. Допустимы точки, тире и нижнее подчеркивание." });
      if(!isValidEmail) {
        setIsValid(false);
      }
    }

    if(name === "passwordRegister" || name === "passwordLogin") {
      const isValidPassword = RegExPassword.test(value);
      setIsValid(target.closest(".formElement").checkValidity());
      setErrors({ ...errors, [name]: isValidPassword ? target.validationMessage : "Введите от 8 до 16 символов." });
      if(!isValidPassword) {
        setIsValid(false);
      }
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
