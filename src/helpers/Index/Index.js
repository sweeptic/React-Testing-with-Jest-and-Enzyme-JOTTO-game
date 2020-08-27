export function getLetterMatchCount(guessedWord, secretWord) {

  const secretLetterSet = new Set(secretWord.split(''));  // alma -> alm
  const guessedLetterSet = new Set(guessedWord.split('')); //mama -> ma

  return [...secretLetterSet].filter(item => guessedLetterSet.has(item)).length
}