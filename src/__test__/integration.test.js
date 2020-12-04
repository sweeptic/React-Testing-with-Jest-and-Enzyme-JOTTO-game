import { storeFactory } from '../test/testUtils';
import guessWord from '../actions/index';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccesfullguess = 'train';
  let store;

  describe('no guessed words', () => {
    const initialState = { secretWord: secretWord };

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccesfullguess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        secretWord: secretWord,
        guessedWords: [{ guessedWord: unsuccesfullguess, letterMatchCount: 3 }],
      };
      expect(newState).toEqual(expectedState);
    });
    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        secretWord: secretWord,
        guessedWords: [{ guessedWord: secretWord, letterMatchCount: 5 }],
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe('some guessed words', () => {
    const guessedWords = [
      { guessedWord: 'secretWord', letterMatchCount: 3 },
      { guessedWord: 'secretWord', letterMatchCount: 4 },
      { guessedWord: 'secretWord', letterMatchCount: 2 },
    ];

    const initialState = {
      secretWord: secretWord,
      guessedWords: guessedWords,
    };

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccesfullguess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        secretWord: secretWord,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccesfullguess, letterMatchCount: 3 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        secretWord: secretWord,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
