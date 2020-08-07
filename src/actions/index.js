export const actionTypes = {
   CORRECT_GUESS: 'CORRECT_GUESS',
   GUESS_WORD: 'GUESS_WORD',
}


/**
 * Returns Redux Thunk function that dispatches Guess_Word action
 * and (conditionally) CORRECT_GUESS action
 * @param {string} guessedWord - Guessed word.
 * @returns {function} - Redux thunk function.
 */
export const guessWord = (guessedWord) => {
   return function (dispatch, getState) {

   };
};

// /**
//  * @function correctGuess
//  * @returns {object} - Action object with type 'CORRECT_GUESS'
//  */
// export function correctGuess() {
//    return { type: actionTypes.CORRECT_GUESS };
// }