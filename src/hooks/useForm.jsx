// возвращает значения, которые используем в компонентах
import { useCallback, useState } from "react";

//хук управления формой
export function useForm() {
  // хранит все данные инпутов форм
  const [values, setValues] = useState({});

  // при каждом изменении значения инпута
  const handleChange = (event) => {
    const target = event.target; // инпут, у кот. изменилось значение
    const value = target.value; // текущее значение
    const name = target.name; // значение атрибута
    setValues({...values, [name]: value});
  };

  return {values, handleChange, setValues}; // используем это внутри компонента
}

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage }); // validationMessage хранит текущую ошибку
    setIsValid(target.closest("form").checkValidity()); // получаем объект формы, получем статус валидности
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setIsValid };
}
