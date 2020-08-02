
/**
 * @method getLetterMatchCount
 * @param {*} guessedWord
 * @param {*} secretWord
 */
export function getLetterMatchCount(guessedWord, secretWord) {
   const secretLetterSet = new Set(secretWord.split('')); //string to array
   const guessedLetterSet = new Set(guessedWord.split('')); //string to array

   return [...secretLetterSet].filter(item => guessedLetterSet.has(item)).length;
}