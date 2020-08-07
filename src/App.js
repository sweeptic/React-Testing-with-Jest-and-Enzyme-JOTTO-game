import React, { PureComponent } from 'react';
import GuessedWords from './GuessedWords/GuessedWords'
import Congrats from './Congrats/Congrats'

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }


  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div data-test='component-app' className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
          {guessedWord: 'Train', letterMatchCount: 3}
        ]} />
      </div>
    );
  }
}

export default App