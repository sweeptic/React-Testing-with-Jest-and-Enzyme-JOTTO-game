import React from 'react';
import PropTypes from 'prop-types';
import stringsModule from './helpers/strings';
import languageContext from './contexts/languageContext';
import successContext from './contexts/successContext';

const Input = () => {
  const [guessWord, setGuessWord] = React.useState('');
  const language = React.useContext(languageContext);
  const [success, setSuccess] = successContext.useSuccess();

  if (success) {
    return null;
  }

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
        >
          {stringsModule.getStringByLanguage(language, 'submit')}
        </button>
      </form>
    </div>
  );
};

//simple proptypes
Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
