import React from 'react';
// import PropTypes from 'prop-types';

const GuessedWords = () => {
  return <div></div>;
};

//array of object proptypes
GuessedWords.propTypes = {
  GuessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      prop: PropTypes.type.isRequired,
      prop: PropTypes.type.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
