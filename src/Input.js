import React from 'react';
import PropTypes from 'prop-types';

const Input = () => {
  return (
    <div>
      <form action=''>
        <input type='text' data-test='input-box' />
        <button type='submit' data-test='submit-button'></button>
      </form>
    </div>
  );
};

//simple proptypes
Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
