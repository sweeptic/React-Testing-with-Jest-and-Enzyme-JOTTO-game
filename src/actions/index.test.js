import moxios from 'moxios';
import { getSecretWord } from '.';
import { storeFactory } from '../test/testUtils';

describe('get secret word and test store', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('set secret word to store', () => {
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
      console.log('response received from action test');
      const newState = store.getState().secretWord;
      const expectedState = secretWord;
      expect(newState).toEqual(expectedState);
      // console.log(store.getState());
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
