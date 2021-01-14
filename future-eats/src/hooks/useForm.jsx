import { useState } from "react";

export const useForm = (initalState) => {
  const [form, setForm] = useState(initalState);

  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
    console.log("OnChange do UseForm:", form);
  };
  return { form, onChange };
};
