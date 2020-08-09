import React, { Component } from 'react';
import GuessedWords from './GuessedWords/GuessedWords'
import Congrats from './Congrats/Congrats'
import { connect } from 'react-redux';
import { getSecretWord } from './actions';
import Input from './Input/Input';

export class UnconnectedApp extends Component {


  /** 
 * @method componentDidMount
 * @returns {undefined}
 */
  componentDidMount() {
    //get the secret word
    this.props.getSecretWord();
  }


  render() {
    return (
      <div data-test='component-app' className="container">
        <h1>Jotto</h1>
        {/* <Congrats success={true} /> */}
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
        {/* <GuessedWords guessedWords={[
          { guessedWord: 'train', letterMatchCount: 3 }
        ]} /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord }
}


export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);