import React from 'react';
import hookActions from './actions/hookActions';

const App = () => {
  const setSecretWord = () => {};

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return <div data-test='component-app'></div>;
};

export default App;
