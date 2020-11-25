import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = props => {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test='guess-instruction'>Try to guess the word!</span>
    );
  } else {
    const guessedWordsRow = props.guessedWords.map((item, index) => (
      <tr data-test='guessed-word' key={index}>
        <td>
          guessed word: {item.guessedWord} matched word: {item.letterMatchCount}
        </td>
      </tr>
    ));

    contents = <div data-test='guessed-words'>{guessedWordsRow}</div>;
  }

  return <div data-test='component-guessed-words'>{contents}</div>;
};

// array of object proptypes
GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
