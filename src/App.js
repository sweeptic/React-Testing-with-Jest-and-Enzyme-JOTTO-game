import React from 'react';
import hookActions, { getSecretWord } from './actions/hookActions';
import languageContext from './contexts/languageContext';
import Input from './Input';
import LanguagePicker from './LanguagePicker';

function reducer(state, action) {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, stateProp: action.payload };
    case 'setLanguage':
      return { ...state, language: action.payload };
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

  const setLanguage = language =>
    dispatch({ type: 'setLanguage', payload: language });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  if (!state.secretWord) {
    return <div data-test='component-spinner'></div>;
  }

  return (
    <div data-test='component-app'>
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <Input secretWord={state.secretWord} />
      </languageContext.Provider>
    </div>
  );
};

export default App;
