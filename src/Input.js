import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);

    this.state = { currentGuess: null };

    this.guessWordHandler = this.guessWordHandler.bind(this);
  }

  guessWordHandler(evt) {
    evt.preventDefault();

    this.props.guessWord(this.state.currentGuess);
  }

  render() {
    let content;

    content = this.props.success ? null : (
      <div>
        <input
          value={this.state.guessWord}
          onChange={evt => this.setState({ currentGuess: evt.target.value })}
          data-test='input-box'
        ></input>
        <button
          onClick={evt => this.guessWordHandler(evt)}
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
