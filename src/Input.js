import React from 'react';
import { connect } from 'react-redux';

const Input = state => {
  console.log(state.success);

  let content;

  content = state.success ? null : (
    <div>
      <input data-test='input-box'></input>
      <button data-test='submit-button'>send</button>
    </div>
  );

  return <div data-test='component-input'>{content}</div>;
};

const mapStateToProps = state => {
  return { success: state.success };
};

export default connect(mapStateToProps)(Input);
