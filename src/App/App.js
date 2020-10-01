import React, { PureComponent } from 'react';
import GuessedWords from '../GuessedWords/GuessedWords'
import Congrats from '../Congrats/Congrats'
import { connect } from 'react-redux';
import { getSecretWord } from '../actions';
import Input from '../Input/Input'

export class UnconnectedApp extends PureComponent {


  componentDidMount() {
    //get the secret word
    this.props.getSecretWord()
  }

  render() {

    return (
      <div data-test='component-app' className="container">
        {/* later this will be coming from the redux store */}
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord }
}



export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp)