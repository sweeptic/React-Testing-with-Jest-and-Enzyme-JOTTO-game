import { storeFactory } from '../test/testUtils';
import guessWord from '../actions/index';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccesfullguess = 'train';

  describe('no guessed words', () => {
    const initialState = { secretWord: secretWord };
    const store = storeFactory(initialState);
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

  test('updates state correctly for unsuccessful guess', () => {});
  test('updates state correctly for successful guess', () => {});

  describe('some guessed words', () => {
    test('updates state correctly for unsuccessful guess', () => {});
    test('updates state correctly for successful guess', () => {});
  });
});
