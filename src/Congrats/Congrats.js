import React from 'react';
import PropTypes from 'prop-types';
//import style from './Congrats.module.css';

const Congrats = (props) => (
  <div data-test='component-congrats' className="CongratsWrapper">
    Test content
  </div>
);

Congrats.propTypes = {
  // bla: PropTypes.string,
};

Congrats.defaultProps = {
  // bla: 'test',
};

export default Congrats;
