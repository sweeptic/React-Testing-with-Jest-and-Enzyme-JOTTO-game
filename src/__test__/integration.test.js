import { guessWord } from '../actions';
import { storeFactory } from '../test/testUtils';

//test action creator and reducer together
describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';

  describe('no guessed words', () => {
    let store;

    const initialState = { secretWord: secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));

      const newState = store.getState();

      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };

      expect(newState).toEqual(expectedState);
    });
    test('updates state correctly for successful guess', () => {});
  });

  //   describe('some guessed words', () => {
  //     let wrapper;
  //     beforeEach(() => {
  //       wrapper = setup();
  //     });

  //     test('updates state correctly for unsuccessful guess', () => {});
  //     test('updates state correctly for successful guess', () => {});
  //   });
});
