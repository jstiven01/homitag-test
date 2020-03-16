import React from 'react';
import { useForm } from 'react-hook-form';
import SelectCountryList from './SelectCountryList';
import ErrorMessage from './ErrorMessage';

import 'react-flags-select/scss/react-flags-select.scss';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = data => {
    console.log((JSON.stringify(data)), 'asdsadsa', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <label htmlFor="firstName">
        First Name:
        <input name="firstName" type="text" id="firstName" ref={register({ required: true, minLength: 3 })} />
      </label>
      <ErrorMessage error={errors.firstName} />

      <label htmlFor="lastName">
        Last Name:
        <input name="lastName" type="text" id="lastName" ref={register({ required: true, minLength: 3 })} />
      </label>
      <ErrorMessage error={errors.lastName} />

      <label htmlFor="email">
        Email
        <input
          name="email"
          id="email"
          type="email"
          ref={register({
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Enter a valid email address',
            },
          })}
        />
      </label>
      <ErrorMessage error={errors.email} />

      <label htmlFor="password">
        Password
        <input
          name="password"
          type="password"
          id="password"
          ref={register({
            required: true,
            pattern: {
              value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*?[#?!@$%^&*-]).{8,}$/,
              message: 'At least 8 digits, 1 uppercase, 1 number and 1 special character',
            },
          })}
        />
      </label>
      <ErrorMessage error={errors.password} />

      <label htmlFor="picture">
        Profile Picture
        <input name="picture" id="picture" ref={register} />
      </label>

      <label htmlFor="phone">
        Phone Number
        <input name="phone" type="text" id="phone" ref={register} />
      </label>
      <label htmlFor="birth">
        Birth Date
        <input name="birth" type="date" id="birth" ref={register} />
      </label>

      <SelectCountryList name="country" id="country" formRef={register} />

      <input type="submit" />
    </form>
  );
};

export default RegisterForm;
