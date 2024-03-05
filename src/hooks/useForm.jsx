import { useState } from "react";


export function useForm() {
  const [values, setValues] = useState({});

  const handleChangeInput = (evt) => {
    const input = evt.target;
    const value = input.value;
    const name = input.name;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChangeInput, setValues };
}