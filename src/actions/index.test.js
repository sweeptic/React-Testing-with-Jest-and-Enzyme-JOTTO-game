import { actionTypes, correctGuess } from '.';

describe('correct guess', () => {
  test('return an action with type "CORRECT GUESS"', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
