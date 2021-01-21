import React from 'react';
import hookActions from './actions/hookActions';
import languageContext from './contexts/languageContext';
import Input from './Input';
import LanguagePicker from './LanguagePicker';

import Congrats from './Congrats';
import successContext from './contexts/successContext';
import { useGuessedWords } from './contexts/guessedWordsContext';

function reducer(state, action) {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
    case 'setLanguage':
      return { ...state, language: action.payload };
    default:
      throw new Error(`invalid action type ${action.type}`);
  }
}

const App = () => {
  //put outside here
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: null,
    language: 'en',
  });

  const setSecretWord = secretWord => {
    dispatch({ type: 'setSecretWord', payload: secretWord });
  };

  const setLanguage = language => {
    dispatch({ type: 'setLanguage', payload: language });
  };

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
        <successContext.SuccessProvider>
          <Congrats />
          <Input secretWord={state.secretWord} />
        </successContext.SuccessProvider>
        {/*GuessedWords*/}
      </languageContext.Provider>
    </div>
  );
};

export default App;
