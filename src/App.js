import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import { getSecretWord } from './actions';

// App tests: redux (state & action creator). Connected-component and 'component did mount' test. Unconnected-component

export class UnconnectedApp extends Component {
  /**
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    // get the secret word
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className='container'>
        <h1>Jotto</h1>
        {/*Congrats tests: render, show/hide text, propTypes test */}
        <Congrats success={this.props.success} />
        {/*Input: get 'success' state, 'guessWord' action-creator from redux */}
        {/*Input tests: render, show/hide text, access to redux props. Connected-components*/}
        {/*Input tests: redux action creator function mock test. Unconnected-components*/}
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
