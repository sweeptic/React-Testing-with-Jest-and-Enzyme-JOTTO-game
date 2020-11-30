export const actionTypes = { SUCCESS_GUESS: 'SUCCESS_GUESS' };

export function correctGuess() {
  return { type: actionTypes.SUCCESS_GUESS };
}
