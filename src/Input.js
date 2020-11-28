import React from 'react';
import { connect } from 'react-redux';

const Input = ({ success }) => {
  let content = !success ? (
    <form className='form-inline'>
      <input
        data-test='input-box'
        className='mb-2 mx-sm-3'
        type='text'
        placeholder='enter guess'
      />
      <button
        data-test='submit-button'
        type='submit'
        className='btn btn-primary mb-2'
      >
        Submit
      </button>
    </form>
  ) : null;

  return <div data-test='component-input'>{content}</div>;
};

const mapStateToProps = ({ success }) => {
  return { success };
};

// const mapDispatchToProps = dispatch => ({
//   // fnBlaBla: () => dispatch(action.name()),
// });

export default connect(
  mapStateToProps
  // mapDispatchToProps,
)(Input);
