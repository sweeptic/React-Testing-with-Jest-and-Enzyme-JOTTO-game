import { guessWord } from '../actions';
import { storeFactory } from '../test/testUtils';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfullguess = 'train';
  let store;

  describe('no guessed words', () => {
    const initialState = { guessedWords: [], secretWord: secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfullguess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          { guessedWord: unsuccessfullguess, letterMatchCount: 3 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });

    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        guessedWords: [{ guessedWord: secretWord, letterMatchCount: 5 }],
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe('some guessed words', () => {
    const guessedWords = [
      { guessedWord: 'agile', letterMatchCount: 2 },
      { guessedWord: 'apple', letterMatchCount: 3 },
      { guessedWord: 'succubus', letterMatchCount: 0 },
    ];
    const initialState = {
      guessedWords: guessedWords,
      secretWord: secretWord,
    };
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfullguess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccessfullguess, letterMatchCount: 3 },
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
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
