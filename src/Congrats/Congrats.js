import React, { PureComponent } from 'react';
//import PropTypes from 'prop-types';
//import style from './Congrats.module.css';

class Congrats extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }


  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div data-test='component-congrats' className="CongratsWrapper">
        Hello from Congrats Component.
      </div>
    );
  }
}

/*
Congrats.propTypes = {
   bla: PropTypes.string,
};

Congrats.defaultProps = {
   bla: 'test',
};
*/

export default Congrats;
