import React, { PureComponent } from 'react';
import GuessedWords from '../GuessedWords/GuessedWords'
import Congrats from '../Congrats/Congrats'

//import PropTypes from 'prop-types';
//import style from './App.module.css';


class App extends PureComponent {
  constructor(props) {
    super(props);


  }

  render() {

    return (
      <div data-test='component-app' className="container">
        {/* later this will be coming from the redux store */}
        <h1>Jotto</h1>
        <Congrats success={true } />
        <GuessedWords guessedWords={[
          {guessedWord: 'train', letterMatchCount: 3}
        ]} />
      </div>
    );
  }
}



export default App;