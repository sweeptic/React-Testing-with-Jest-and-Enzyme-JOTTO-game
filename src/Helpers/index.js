
/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word.
 * @param {string} secretWord - Secret word.
 * @returns {number} - Number of letters matched between guessed word and 
 */
export function getLetterMatchCount(guessedWord, secretWord) {
   const secretLetterSet = new Set(secretWord.split('')); //string to array
   const guessedLetterSet = new Set(guessedWord.split('')); //string to array

   return [...secretLetterSet].filter(item => guessedLetterSet.has(item)).length;
}