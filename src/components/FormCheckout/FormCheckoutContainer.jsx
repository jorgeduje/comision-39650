import React from "react";
import FormCheckout from "./FormCheckout";

import { useFormik } from "formik";

import * as Yup from "yup";

export const FormCheckoutContainer = () => {
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      phone: null,
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("este campo es obligatorio")
        .min(3, "el nombre debe tener al menos 3 caracteres")
        .max(10, "el nombre no puede superar los 10 caracteres"),
      email: Yup.string()
        .email("El campo debe ser un email")
        .required("este campo es obligatorio"),
      phone: Yup.number().required("este campo es obligatorio"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      <FormCheckout
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={values}
      />
    </div>
  );
};
