import moxios from 'moxios';
import { getSecretWord } from '.';
import { storeFactory } from '../test/testUtils';

describe('set secret word test', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('axios async call integration test', () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    return store.dispatch(getSecretWord()).then(() => {
      expect(store.getState().secretWord).toEqual(secretWord);
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
