import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState(null);
  return (
    <div data-test='component-input'>
      <form>
        <input
          type='text'
          data-test='input-box'
          onChange={event => {
            setCurrentGuess(event.target.value);
          }}
        ></input>

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

//simple propTypes
Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
