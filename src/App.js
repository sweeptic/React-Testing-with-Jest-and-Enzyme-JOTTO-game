import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSecretWord } from './actions';
import './App.css';

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className='container'>
        <h1>Jotto</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    success: state.success,
    secretWord: state.secretWord,
    guessedWords: state.guessedWords,
  };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
