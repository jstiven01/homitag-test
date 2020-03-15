import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) => {
  if (error) {
    switch (error.type) {
      case 'required':
        return <p>This Field is required</p>;
      case 'minLength':
        return <p>Your last name need minimum 3 characters</p>;
      case 'pattern':
        return <p>Enter a valid email address</p>;
      case 'patternPassword':
        return (
          <p>
            at least 8 digits, 1 uppercase, 1 number and 1 special
            character
          </p>
        );
      case 'min':
        return <p>Minimum age is 18</p>;
      case 'validate':
        return <p>Username is already used</p>;
      default:
        return null;
    }
  }

  return null;
};

ErrorMessage.propTypes = {
  error: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
};

export default ErrorMessage;
