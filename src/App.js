import React from 'react';
import hookActions, { getSecretWord } from './actions/hookActions';
import Input from './Input';

function reducer(state, action) {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, stateProp: action.payload };
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

  if (!state.secretWord) {
    return <div data-test='component-spinner'></div>;
  }

  return (
    <div data-test='component-app'>
      <Input secretWord={state.secretWord} />
    </div>
  );
};

export default App;
