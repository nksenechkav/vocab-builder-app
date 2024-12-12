// src/components/registrationForm/RegistrationForm.jsx

import { Formik, Form, Field } from 'formik';
import { ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import toast, { Toaster } from 'react-hot-toast';
import css from './RegistrationForm.module.scss';
import { RiEyeOffLine, RiEyeLine } from 'react-icons/ri';
import { MdError } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const FeedbackSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email address')
    .required("Required"),

  password: Yup.string()
    .trim()
    .matches(
      /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/, 
      'Password must contain at least 6 letters, at least 1 digit, and be exactly 7 characters long'
    )
    .required("Required"),
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const [showPassword, setShowPassword] = useState(false);
  const [passwordValid, setPasswordValid] = useState(null); // State to track password validity

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordValidation = (value) => {
    const isValid = /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/.test(value);
    setPasswordValid(isValid);
  };

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => toast.success('Registration success. Congratulations!'))
      .catch(() => toast.error('Registration failed. Please check your credentials!'));
    actions.resetForm();
    setPasswordValid(null);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
        <Form className={css.form} autoComplete="off">
          <p className={css['form-header']}>Register</p>
          <p className={css['form-text']}>
            To start using our services, please fill out the registration form below. All fields are mandatory:
          </p>
          <div className={css['form-wrapper']}>
            <Field
              className={css.field}
              type="text"
              name="name"
              id={nameFieldId}
              placeholder="Name"
              autoComplete="current-username"
            />
            <ErrorMessage name="name" component="p" className={css.error} />
          </div>
          <div className={css['form-wrapper']}>
            <Field
              className={css.field}
              type="email"
              name="email"
              id={emailFieldId}
              placeholder="Email"
              autoComplete="current-email"
            />
            <ErrorMessage name="email" component="p" className={css.error} />
          </div>
          <div className={css['form-wrapper']}>
            <Field
              className={css.field}
              type={showPassword ? 'text' : 'password'}
              name="password"
              id={passwordFieldId}
              placeholder="Password"
              autoComplete="current-password"
              onKeyUp={(e) => handlePasswordValidation(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={css['my-icon']}
            >
              {showPassword ? <RiEyeLine size={20} /> : <RiEyeOffLine size={20} />}
            </button>
            <div className={css.feedback}>
              {passwordValid === false && (
                <p className={css.errorMessage}>
                  <MdError size={20} style={{ color: 'white', fill: 'red', borderRadius: '50%' }} /> Error password
                </p>
              )}
              {passwordValid === true && (
                <p className={css.successMessage}>
                  <AiFillCheckCircle size={20} style={{ color: 'white', fill: 'green', borderRadius: '50%' }} /> Success password
                </p>
              )}
            </div>
            <ErrorMessage name="password" component="p" className={css.error} />
          </div>
          <button className={css.btn} type="submit">
            Register
          </button>
          <p className={css.loginLink}>
            <Link to="/login" className={css['login-link']}>
              Login
            </Link>
          </p>
          <Toaster />
        </Form>
    </Formik>
  );
};
