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
      <span data-test="component-instruction">
        Try to guess the secret word!
      </span>
    )
  } else {

    let GuessedWordsRows = props.guessedWords.map((item, index) => (
      <tr data-test='guessed-word' key={index}>
        <td>{item.guessedWord}</td>
        <td>{item.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div data-test='guessed-words' className="style">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {GuessedWordsRows}
          </tbody>
        </table>
      </div>
    )
  }


  return (
    <div data-test='component-guessed-words' className="style">
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
/*
GuessedWords.defaultProps = {
   bla: 'test',
};
*/

export default GuessedWords;
