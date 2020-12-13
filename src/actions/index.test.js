import moxios from 'moxios';
import { getSecretWord } from '.';
import { storeFactory } from '../test/testUtils';

describe('test for axios async call ', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('succesfull async action for set guessword piece of state', () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    return store.dispatch(getSecretWord()).then(response => {
      const newState = store.getState().secretWord;
      expect(newState).toEqual(secretWord);
    });
  });
});

// import { correctGuess, actionTypes } from '.';

// describe('correct guess', () => {
//   test('return an action with type "CORRECT GUESS"', () => {
//     const action = correctGuess();
//     expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
//   });
// });
