import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSecretWord } from './actions';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

export class UnconnectedApp extends Component {
  componentDidMount() {
    // get the secret word
    this.props.getSecretWord();
  }

  render() {
    return (
      <div data-test='component-app' className='container'>
        {/* later this will be coming from the redux store */}
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords
          guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
