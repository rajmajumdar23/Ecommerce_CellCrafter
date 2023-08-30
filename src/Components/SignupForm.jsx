import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Styling/SignupForm.css';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    mobileNumber: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null]).required(),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const navigate = useNavigate();
  const redirectSubmit = (values) => {
    console.log(values);
    // You can perform any necessary actions here after form submission
    navigate('/login');
  };


  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isValid }) => (
        <Form className='Form'>
          <p className='Head'>Signup</p >
          <div className="form-field">
            <label htmlFor="firstName">First Name</label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage name="firstName" component="div" className="error" />

            <label htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" className="error" />

            <label htmlFor="mobileNumber">Mobile Number</label>
            <Field type="text" id="mobileNumber" name="mobileNumber" />
            <ErrorMessage name="mobileNumber" component="div" className="error" />

            <label htmlFor="email">Email</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />

            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div className="form-field">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" className="error" />
          </div>

          <button type="submit" id="signup" onClick={redirectSubmit} disabled={!isValid}>Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
