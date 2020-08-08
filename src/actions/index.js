import { getLetterMatchCount } from "../Helpers";

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
      const secretWord = getState().secretWord;
      const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

      dispatch({
         type: actionTypes.GUESS_WORD,
         payload: { guessedWord, letterMatchCount}
      })

      if(guessedWord === secretWord) {
         dispatch({type: actionTypes.CORRECT_GUESS})
      }

   };
};

// /**
//  * @function correctGuess
//  * @returns {object} - Action object with type 'CORRECT_GUESS'
//  */
// export function correctGuess() {
//    return { type: actionTypes.CORRECT_GUESS };
// }