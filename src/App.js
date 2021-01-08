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
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = secretWord => {
    dispatch({ type: 'setSecretWord', payload: secretWord });
  };

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  if (!state.secretWord) {
    return (
      <div className='container' data-test='spinner'>
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
        <p>Loading secret word</p>
      </div>
    );
  }

  return <div data-test='component-app'></div>;
};

export default App;
