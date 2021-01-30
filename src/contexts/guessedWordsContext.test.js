import React from 'react';
import { shallow } from 'enzyme';
import { GuessedWordsProvider, useGuessedWords } from './guessedWordsContext';

const FunctionalComponent = () => {
  useGuessedWords();
  return <div />;
};

test('useGuessedWords throws error when not wrapped in GuessedWordsProvider', () => {
  const setup = () => {
    return shallow(<FunctionalComponent />);
  };
  expect(setup).toThrow(
    'guessedWords must be used within a GuessedWordsProvider'
  );
});

test('useGuessedWords does not throw error when wrapped in GuessedWordsProvider', () => {
  //mount
  const setup = () => {
    return shallow(
      <GuessedWordsProvider>
        <FunctionalComponent />
      </GuessedWordsProvider>
    );
  };

  expect(setup).not.toThrow();
});
