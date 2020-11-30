export const actionTypes = { SUCCESS_GUESS: 'SUCCESS_GUESS' };

export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS };
}
