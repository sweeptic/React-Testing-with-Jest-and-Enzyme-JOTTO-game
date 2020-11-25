import React from 'react';
// import PropTypes from 'prop-types';

const Congrats = props => {
  if (props.success) {
    return (
      <div data-test='component-congrats'>
        <span data-test='congrats-message'>
          Congratulation! You guessed te Gord!
        </span>
      </div>
    );
  } else {
    return <div data-test='component-congrats' />;
  }
};

// Congrats.propTypes = {
//   success: PropTypes.boolean.isRequired,
// };

export default Congrats;
