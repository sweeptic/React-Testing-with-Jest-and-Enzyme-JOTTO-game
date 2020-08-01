import React from 'react';
import PropTypes from 'prop-types';
//import style from './GuessedWords.module.css';


/** 
* Functional react component.
* @function 
* @param {object} props - React props.
* @returns {JSX.Element} - Rendered component
*/
const GuessedWords = (props) => (
  <div data-test='component-guessedwords' className="GuessedWordsWrapper">
    Test content
  </div>
);

GuessedWords.propTypes = {
  // bla: PropTypes.string,
};

GuessedWords.defaultProps = {
  // bla: 'test',
};

export default GuessedWords;
