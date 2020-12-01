import React from 'react';
import { connect } from 'react-redux';

const Input = state => {
  return (
    <div>
      <button></button>
    </div>
  );
};

const mapStateToProps = state => {
  return { success: state.success };
};

export default connect(mapStateToProps)(Input);
