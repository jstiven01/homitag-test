import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) => {
  if (error) {
    switch (error.type) {
      case 'required':
        return <p>This Field is required</p>;
      case 'minLength':
        return <p>This Field needs minimum 3 characters</p>;
      case 'pattern':
        return <p>{error.message}</p>;
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
    message: PropTypes.string,
  }),
};
ErrorMessage.defaultProps = {
  error: {
    type: '',
    message: '',
  },

};

export default ErrorMessage;
