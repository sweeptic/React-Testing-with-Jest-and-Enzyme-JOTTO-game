import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {


  render() {
    return (
      <div data-test='component-input' />
    );
  }
}


const mapStateToProps = state => {
  return {};
};

// const mapDispatchToProps = dispatch => ({
//   // fnBlaBla: () => dispatch(action.name()),
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Input);