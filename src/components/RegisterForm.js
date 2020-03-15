import React from 'react';
// import useForm from "react-hook-form";

const RegisterForm = () => {
  const onSubmit = data => {
    console.log((JSON.stringify(data)));
  };

  return (
    <form className="App" onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <label htmlFor="firstName">
        First Name:
        <input name="firstName" id="firstName" />
      </label>

      <label htmlFor="lastName">
        Last Name:
        <input name="lastName" id="lastName" />
      </label>

      <label htmlFor="email">
        Email
        <input name="email" id="email" />
      </label>

      <label htmlFor="password">
        Password
        <input name="password" id="password" />
      </label>

      <label htmlFor="picture">
        Profile Picture
        <input name="picture" id="picture" />
      </label>

      <label htmlFor="phone">
        Phone Number
        <input name="phone" id="phone" />
      </label>
      <label htmlFor="birth">
        Birth Date
        <input name="birth" id="bith" />
      </label>
      <label htmlFor="country">
        Country
        <input name="country" id="country" />
      </label>
      <input type="submit" />
    </form>
  );
};

export default RegisterForm;
