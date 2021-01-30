import React from 'react';
import PropTypes from 'prop-types';
import stringsModule from './helpers/strings';
import languageContext from './contexts/languageContext';
import successContext from './contexts/successContext';
import { getLetterMatchCount } from './helpers';
import guessedWordsContext from './contexts/guessedWordsContext';

const Input = ({ secretWord }) => {
  const language = React.useContext(languageContext);
  const [success, setSuccess] = successContext.useSuccess();
  const [guessedWords, setGuessedWords] = guessedWordsContext.useGuessedWords();
  const [currentGuess, setCurrentGuess] = React.useState('');

  if (success) {
    return null;
  }

  return (
    <div data-test='component-input'>
      <form action=''>
        <input
          type='text'
          data-test='input-box'
          value={currentGuess}
          onChange={evt => {
            setCurrentGuess(evt.target.value);
          }}
        />

        <button
          data-test='submit-button'
          onClick={evt => {
            evt.preventDefault();

            const letterMatchCount = getLetterMatchCount(
              currentGuess,
              secretWord
            );
            const newGuessedWords = [
              ...guessedWords,
              { guessedWord: currentGuess, letterMatchCount },
            ];
            setGuessedWords(newGuessedWords);

            if (currentGuess === secretWord) {
              setSuccess(true);
            }
            setCurrentGuess('');
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
