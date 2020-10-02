import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Contact from "../../../models/contact";

const SignupSchema = Yup.object().shape({
  oib: Yup.number().required("Required"),
  code: Yup.string().required("Required"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

interface EditContactProps {
  contact: Contact;
  handleFormSubmision: Function;
  title: string;
}

export default ({ contact, handleFormSubmision, title }: EditContactProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <Formik
        initialValues={contact}
        validate={(values: Contact) => {
          let errors: any = {};
          if (!values.email) {
            errors.email = "Wrong email address";
          }

          const phoneRegex = /\+\d{9}$/;
          if (!values.phone) {
            errors.phone = "Required";
          } else if (!phoneRegex.test(values.phone)) {
            errors.phone = "Invalida phone. Must contain sign + and 9 numbers";
          }

          return errors;
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          handleFormSubmision(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="code">Code</label>
            <Field name="code" />
            {errors.code && touched.code ? (
              <div className="input-feedback">{errors.code}</div>
            ) : null}
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div className="input-feedback">{errors.firstName}</div>
            ) : null}
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div className="input-feedback">{errors.lastName}</div>
            ) : null}
            <label htmlFor="oib">Oib</label>
            <Field name="oib" />
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            {errors.email && touched.email ? (
              <div className="input-feedback">{errors.email}</div>
            ) : null}

            <label htmlFor="phone">Phone number</label>
            <Field name="phone" />
            {errors.phone && touched.phone ? (
              <div className="input-feedback">{errors.phone}</div>
            ) : null}
            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
