import React from 'react';
import hookActions, { getSecretWord } from './actions/hookActions';

function reducer(state, action) {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
    default:
      throw new Error(`invalid action type ${action.type}`);
  }
}
const App = () => {
  //put outside here
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = secretWord => {
    dispatch({ type: 'setSecretWord', payload: secretWord });
  };

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return <div data-test='component-app'></div>;
};

export default App;
