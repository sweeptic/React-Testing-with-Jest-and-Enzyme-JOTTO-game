import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState('');

  return (
    <div data-test='component-input'>
      <form>
        <input
          type='text'
          data-test='input-box'
          value={currentGuess}
          onChange={evt => {
            setCurrentGuess(evt.target.value);
          }}
        />
        <button
          type='submit'
          data-test='submit-button'
          onClick={evt => {
            evt.preventDefault();
            setCurrentGuess('');
          }}
        ></button>
      </form>
    </div>
  );
};

//simple proptypes
Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
