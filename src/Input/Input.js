import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../actions';


export class UnconnectedInput extends Component {
  /**
 * @method constructor
 * @param {object} props - Component props.
 * @returns {undefined}
 */
  constructor(props) {
    super(props);

    //init state
    this.state = { currentGuess: null }
  }

  submitGuessedWord = (evt) => {
    evt.preventDefault();
    const guessedWord = this.state.currentGuess;

    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord)
      this.setState({ currentGuess: '' })
    }
  }


  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline" action="">
        <input
          data-test='input-box'
          type="text"
          value={this.state.currentGuess}
          onChange={(evt) => this.setState({ currentGuess: evt.target.value })}
          className="mb-2 mx-sm-3"
          placeholder="enter guess"
        />
        <button
          data-test='submit-button'
          className="btn btn-primary mb-2"
          onClick={(evt) => this.submitGuessedWord(evt)}
          type="submit"
        >
          Submit
        </button>
      </form>
    )

    return (
      <div data-test='component-input' className="">
        {contents}
      </div>
    )

  }
}

const mapStateToProps = ({ success }) => {
  return { success };
}


export default connect(mapStateToProps, { guessWord })(UnconnectedInput);