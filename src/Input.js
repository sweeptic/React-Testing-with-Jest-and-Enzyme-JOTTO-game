import React from 'react';
import { connect } from 'react-redux';

const Input = state => {
  console.log(state.success);

  let content;

  content = state.success ? null : (
    <div>
      <input data-test='component-input-box'></input>
      <button type='submit' data-test='component-submit-button'></button>
    </div>
  );

  return <div data-test='component-input'>{content}</div>;
};

const mapStateToProps = state => {
  return { success: state.success };
};

// const mapDispatchToProps = dispatch => {
//   return { fn: () => dispatch(action.name()) };
// };

export default connect(mapStateToProps /*mapDispatchToProps*/)(Input);
