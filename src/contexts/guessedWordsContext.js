import React from 'react';

const guessedWordsContext = React.createContext();

export function useGuessedWords() {
  const context = React.useContext(guessedWordsContext);
  if (!context) {
    throw new Error('guessedWords must be used within a GuessedWordsProvider');
  }
  return context;
}

export function GuessedWordsProvider(props) {
  const [state, setState] = React.useState(false);

  const value = React.useMemo(() => [state, setState], [state]);

  return <guessedWordsContext.Provider value={value} {...props} />;
}

export default { GuessedWordsProvider, useGuessedWords };
