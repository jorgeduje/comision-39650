import React from "react";
import FormCheckout from "./FormCheckout";

import { useFormik } from "formik";

import * as Yup from "yup";

export const FormCheckoutContainer = () => {
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
      confirmPassword: "",
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
      password: Yup.string()
        .required("este campo es obligatorio")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            "la contraseña debe tener 1 mayuscula 1 minuscula 1 caracter especial y un numero",
        }),
      confirmPassword: Yup.string()
        .required("este campo es obligatorio")
        .oneOf([Yup.ref("password")], "las contraseñas no coinciden"),
    }),
    validateOnChange: false,
  });

  // /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
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
