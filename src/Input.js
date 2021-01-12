import React from 'react';
import PropTypes from 'prop-types';

const Input = () => {
  return (
    <div data-test='component-app'>
      <form action=''>
        <input type='text' data-test='component-input' />

        <button data-test='component-button'></button>
      </form>
    </div>
  );
};

//simple proptypes
Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
