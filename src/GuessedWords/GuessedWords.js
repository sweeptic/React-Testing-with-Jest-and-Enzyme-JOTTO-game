import React from 'react';
import PropTypes from 'prop-types';
//import style from './GuessedWords.module.css';


/** 
* Functional react component.
* @function 
* @param {object} props - React props.
* @returns {JSX.Element} - Rendered component
*/
const GuessedWords = (props) => {
  let contents;

  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">
        Try to guess the secret word!
      </span>
    )
  } else {
    const guessedWordsRows = props.guessedWords.map((item, index) => {
      return (
        <tr data-test="guessed-word" key={index}>
          <td>
            {item.guessedWord}
          </td>
          <td>
            {item.letterMatchCount}
          </td>
        </tr>
      )
    })


    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr><th>Guess</th> <th>Matching Letters</th> </tr>
          </thead>
          <tbody>
            {guessedWordsRows}
          </tbody>
        </table>
      </div>
    )
  }


  return (
    <div data-test='component-guessedwords' className="GuessedWordsWrapper">
      {contents}
    </div>
  )
};


GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

GuessedWords.defaultProps = {
  // bla: 'test',
};

export default GuessedWords;
