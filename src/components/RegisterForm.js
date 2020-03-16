import React from 'react';
import { useForm } from 'react-hook-form';
import SelectCountryList from './SelectCountryList';
import ErrorMessage from './ErrorMessage';

import '../assets/scss/RegisterForm.scss';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    errors,
  } = useForm();

  const svg = (<svg width="35" height="35" viewBox="5 5 35 35" className="q"><path d="M5 40V5h35v35H5zm8.56-12.63c0 .56-.03.69-.32 1.03L10.8 31.4v.4h6.97v-.4L15.3 28.4c-.29-.34-.34-.5-.34-1.03v-8.95l6.13 13.36h.71l5.26-13.36v10.64c0 .3 0 .35-.19.53l-1.85 1.8v.4h9.2v-.4l-1.83-1.8c-.18-.18-.2-.24-.2-.53V15.94c0-.3.02-.35.2-.53l1.82-1.8v-.4h-6.47l-4.62 11.55-5.2-11.54h-6.8v.4l2.15 2.63c.24.3.29.37.29.77v10.35z" /></svg>);

  const onSubmit = data => {
    console.log((JSON.stringify(data)));
  };

  return (
    <div className="container form-container">
      <div className="header d-flex justify-content-center mb-3">
        <div className="svg align-self-center mr-2">
          {svg}
        </div>

        <h1 className="title-form m-0">Register</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName" className="d-flex flex-column">
            <span>First Name</span>
            <input name="firstName" type="text" id="firstName" ref={register({ required: true, minLength: 3 })} />
          </label>
          <ErrorMessage error={errors.firstName} />


        </div>
        <div className="form-group">

          <label htmlFor="lastName" className="d-flex flex-column">
            <span>Last Name</span>
            <input name="lastName" type="text" id="lastName" ref={register({ required: true, minLength: 3 })} />
          </label>
          <ErrorMessage error={errors.lastName} />

        </div>
        <div className="form-group">
          <label htmlFor="email" className="d-flex flex-column">
            <span>Email</span>

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

        </div>
        <div className="form-group">
          <label htmlFor="password" className="d-flex flex-column">
            <span>Password</span>
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
          <ErrorMessage error={errors.password} className="errors" />

        </div>
        <div className="form-group">

          <label htmlFor="picture" className="d-flex flex-column">
            <span>Profile Picture</span>
            <input type="file" name="picture" id="picture" ref={register} />
          </label>

        </div>
        <div className="form-group">
          <label htmlFor="phone" className="d-flex flex-column">
            <span>Phone Number</span>
            <input name="phone" type="text" id="phone" ref={register} />
          </label>

        </div>
        <div className="form-group">

          <label htmlFor="birth" className="d-flex flex-column">
            <span>Birth Date</span>
            <input name="birth" type="date" id="birth" ref={register} />
          </label>

        </div>
        <div className="form-group">
          <SelectCountryList name="country" id="country" formRef={register} />
        </div>


        <input type="submit" className="btn mt-3 submit-register" value="Sign Up" />
      </form>


    </div>
  );
};

export default RegisterForm;
