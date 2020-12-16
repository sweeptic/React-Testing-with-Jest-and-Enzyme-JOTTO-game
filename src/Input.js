import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);

    // initialize state
    this.state = { currentGuess: null };

    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }

  submitGuessedWord(evt) {
    evt.preventDefault();
    const guessedWord = this.state.currentGuess;

    // if (guessedWord && guessedWord.length > 0) {
    //   this.props.guessWord(guessedWord);
    //   this.setState({ currentGuess: '' });
    // }
  }

  render() {
    let content;

    content = this.props.success ? null : (
      <div>
        <input
          value={this.state.currentGuess}
          onChange={evt => this.setState({ currentGuess: evt.target.value })}
          data-test='input-box'
        ></input>
        <button
          onClick={evt => this.submitGuessedWord(evt)}
          data-test='submit-button'
        >
          send
        </button>
      </div>
    );

    return <div data-test='component-input'>{content}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
