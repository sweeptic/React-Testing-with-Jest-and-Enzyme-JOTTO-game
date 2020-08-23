import React, { PureComponent } from 'react';
//import PropTypes from 'prop-types';
//import style from './App.module.css';

class App extends PureComponent { 
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
      <div data-test='component-app' className="AppWrapper">
        Hello from App Component.
      </div>
    );
  }
}

/*
App.propTypes = {
   bla: PropTypes.string,
};

App.defaultProps = {
   bla: 'test',
};
*/

export default App;