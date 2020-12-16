import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSecretWord } from './actions';
import './App.css';

class App extends Component {
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

export default connect(mapStateToProps, { getSecretWord })(App);
