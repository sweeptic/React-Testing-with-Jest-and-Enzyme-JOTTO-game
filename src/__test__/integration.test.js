import { guessWord } from '../actions';
import { storeFactory } from '../test/testUtils';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfullguess = 'train';

  let store;

  describe('no guessed words', () => {
    const initialState = { guessedWords: [], secretWord: secretWord };
    store = storeFactory(initialState);

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
    test('updates state correctly for successful guess', () => {});
  });

  describe('some guessed words', () => {
    test('updates state correctly for unsuccessful guess', () => {});
    test('updates state correctly for successful guess', () => {});
  });
});
