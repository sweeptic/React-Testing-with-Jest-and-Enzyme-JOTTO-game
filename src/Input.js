import React from 'react';
import PropTypes from 'prop-types';
import languageContext from './contexts/languageContext';
import stringsModule from './helpers/strings';

const Input = () => {
  const language = React.useContext(languageContext);
  const [guessWord, setGuessWord] = React.useState('');

  return (
    <div data-test='component-app'>
      <form action=''>
        <input
          type='text'
          placeholder={stringsModule.getStringByLanguage(
            language,
            'guessInputPlaceholder'
          )}
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
