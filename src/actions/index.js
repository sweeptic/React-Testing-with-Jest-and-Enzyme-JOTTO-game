import { getLetterMatchCount } from "../Helpers";
import axios from "axios";

export const actionTypes = {
   CORRECT_GUESS: 'CORRECT_GUESS',
   GUESS_WORD: 'GUESS_WORD',
   SET_SECRET_WORD: 'SET_SECRET_WORD'
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
         payload: { guessedWord, letterMatchCount }
      })

      if (guessedWord === secretWord) {
         dispatch({ type: actionTypes.CORRECT_GUESS })
      }

   };
};

export const getSecretWord = () => {
   return (dispatch) => {
      return axios.get('http://localhost:3030')
      .then(response => {
         dispatch({
            type: actionTypes.SET_SECRET_WORD,
            payload: response.data
         })
      })
   }
}

// /**
//  * @function correctGuess
//  * @returns {object} - Action object with type 'CORRECT_GUESS'
//  */
// export function correctGuess() {
//    return { type: actionTypes.CORRECT_GUESS };
// }