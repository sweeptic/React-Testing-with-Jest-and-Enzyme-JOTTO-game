import React from 'react';
//import PropTypes from 'prop-types';
//import style from './Test.module.css';


/** 
* Functional react component.
* @function 
* @param {object} props - React props.
* @returns {JSX.Element} - Rendered component
*/
const Congrats = (props) => {

  let returnedMessage = null ;

  if (props.success) {
    returnedMessage = ( 
        <div data-test='congrats-message' className="style">
          Congratulations! You guessed the word!
       </div>
    )
  }


  return (
    <div data-test='component-congrats' className="style">
     {returnedMessage}
    </div>
  )
}

/*
Test.propTypes = {
   bla: PropTypes.string,
};

Test.defaultProps = {
   bla: 'test',
};
*/

export default Congrats;
