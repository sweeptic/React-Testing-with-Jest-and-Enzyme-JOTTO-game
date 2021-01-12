import React from 'react';
import PropTypes from 'prop-types';

const Input = () => {
  const [guessWord, setGuessWord] = React.useState('');

  return (
    <div data-test='component-app'>
      <form action=''>
        <input
          type='text'
          data-test='component-input'
          value={guessWord}
          onChange={evt => {
            setGuessWord(evt.target.value);
          }}
        />

        <button
          data-test='component-button'
          onClick={evt => {
            evt.preventDefault();
            setGuessWord('');
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
