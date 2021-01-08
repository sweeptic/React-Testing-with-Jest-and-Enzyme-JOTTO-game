import React from 'react';
import PropTypes from 'prop-types';

const Input = () => {
  return <div data-test='component-app'></div>;
};

//simple propTypes
Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
