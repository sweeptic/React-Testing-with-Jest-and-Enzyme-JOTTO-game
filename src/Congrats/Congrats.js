import React from 'react';
import PropTypes from 'prop-types';
//import style from './Congrats.module.css';


/** 
* Functional react component for congratulatory message.
* @function 
* @param {object} props - React props.
* @returns {JSX.Element} - Rendered component
*/

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test='component-congrats' className="alert alert-success">
        <span data-test='congrats-message' >
          Congratulations! You guessed the word!
        </span>
      </div>
    )
  } else {
    return (
      <div data-test='component-congrats' ></div>
    )
  }
}




Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

Congrats.defaultProps = {
  // bla: 'test',
};

export default Congrats;
