import React from 'react';
import PropTypes from 'prop-types';

const Congrats = ({ success }) => {
  let content = '';
  if (success) {
    content = (
      <span data-test='congrats-message'>
        Congratulation! You guessed te Gord!
      </span>
    );
  }

  return <div data-test='component-congrats'>{content}</div>;
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
