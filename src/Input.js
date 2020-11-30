import React from 'react';
import { connect } from 'react-redux';

const Input = () => {
  return <div></div>;
};

const mapStateToProps = state => {
  return { success: state.success };
};

// const mapDispatchToProps = dispatch => {
//   return { fn: () => dispatch(action.name()) };
// };

export default connect(mapStateToProps /*mapDispatchToProps*/)(Input);
