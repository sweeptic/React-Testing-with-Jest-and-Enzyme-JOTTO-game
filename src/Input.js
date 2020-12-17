import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let content;

    content = this.props.success ? null : (
      <div>
        <input data-test='input-box'></input>
        <button data-test='submit-button'>send</button>
      </div>
    );

    return <div data-test='component-input'>{content}</div>;
  }
}

const mapStateToProps = state => {
  return { success: state.success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
