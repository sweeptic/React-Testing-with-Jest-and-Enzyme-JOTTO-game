import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);

    this.state = { guessWordState: null };

    // this.guessWordSubmit = this.guessWordSubmit.bind(this);
  }

  guessWordSubmit(evt) {
    evt.preventDefault();
    const guessedWord = this.state.guessWordState;

    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ guessWordState: '' });
    }
  }

  render() {
    let content;

    content = this.props.success ? null : (
      <div>
        <input
          onChange={evt => {
            this.setState({ guessWordState: evt.target.value });
          }}
          value={this.state.guessWordState}
          data-test='input-box'
        ></input>
        <button
          onClick={evt => this.guessWordSubmit(evt)}
          data-test='submit-button'
        >
          send
        </button>
      </div>
    );

    return <div data-test='component-input'>{content}</div>;
  }
}

const mapStateToProps = state => {
  return { success: state.success, secretWord: state.secretWord };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
