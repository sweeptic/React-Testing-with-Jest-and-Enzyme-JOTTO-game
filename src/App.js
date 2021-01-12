import React from 'react';
import hookActions, { getSecretWord } from './actions/hookActions';

const App = () => {
  const setSecretWord = secretWord => {};

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return <div data-test='component-app'></div>;
};

export default App;
