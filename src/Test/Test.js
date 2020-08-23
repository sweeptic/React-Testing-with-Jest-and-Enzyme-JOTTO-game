import React from 'react';
import PropTypes from 'prop-types';
//import style from './Test.module.css';


/** 
* Functional react component.
* @function 
* @param {object} props - React props.
* @returns {JSX.Element} - Rendered component
*/
const Test = (props) => (
  <div data-test='component-test' className="style">
    Hello from Test functional component.
  </div>
);

/*
Test.propTypes = {
   bla: PropTypes.string,
};

Test.defaultProps = {
   bla: 'test',
};
*/

export default Test;
