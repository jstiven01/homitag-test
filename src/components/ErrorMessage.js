import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) => {
  if (error) {
    switch (error.type) {
      case 'required':
        return <div className="errors"><p>This Field is required</p></div>;
      case 'minLength':
        return <div className="errors"><p>This Field needs minimum 3 characters</p></div>;
      case 'pattern':
        return <div className="errors"><p>{error.message}</p></div>;
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
