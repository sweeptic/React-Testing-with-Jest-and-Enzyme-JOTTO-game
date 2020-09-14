import { getLetterMatchCount } from "../helpers/Index/Index";
import axios from "axios";

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD',
    SET_SECRET_WORD: 'SET_SECRET_WORD'
}

// export function correctGuess() {
//     return { type: actionTypes.CORRECT_GUESS }
// }

//guess word action creator shell
export const guessWord = (guessedWord) => {
    //access to dispatch  and getstate functions
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

    }
}


// SET_SECRET_WORD action creator shell
export const getSecretWord = () => {
    return (dispatch) => {
        axios.get('http://localhost:3030');
    }
}