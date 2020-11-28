import React from 'react';
import { connect } from 'react-redux';

const Input = props => {
  return <div></div>;
};

const mapStateToProps = state => {
  return {};
};

// const mapDispatchToProps = dispatch => ({
//   // fnBlaBla: () => dispatch(action.name()),
// });

export default connect(
  mapStateToProps
  // mapDispatchToProps,
)(Input);
