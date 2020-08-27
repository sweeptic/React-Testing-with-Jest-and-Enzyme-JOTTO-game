import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import GuessedWords from './GuessedWords';
import checkPropTypes from 'check-prop-types'

configure({ adapter: new EnzymeAdapter() });

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
}


const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords {...setupProps} />)
}


test('does not throw warning with expected props', () => {
  const propError = checkPropTypes(GuessedWords.propTypes, defaultProps, 'prop', GuessedWords.name);
  expect(propError).toBeUndefined();
});


describe('if there are no words guessed', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  })

  //render test
  test('renders without error ', () => {
    const component = wrapper.find("[data-test='component-guessed-words']");
    expect(component.length).toBe(1);
  })

  test('renders instructions to guess a word', () => {
    const instruction = wrapper.find("[data-test='component-instruction']");
    expect(instruction.text().length).not.toBe(1);
  })


})

describe('if there are words guessed', () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 }
  ]
  beforeEach(() => {
    // console.log({ guessedWords })
    wrapper = setup({ guessedWords });
  })

  test('renders without error', () => {
    const component = wrapper.find("[data-test='component-guessed-words']");
    expect(component.length).toBe(1);
  })

  //table with title
  test('renders "guessed words" section', () => {
    const guessedWordsNode = wrapper.find("[data-test='guessed-words']");
    expect(guessedWordsNode.length).toBe(1);
  })

  // etc 3 word guessed -> three row in table
  test('correct number of guessed words', () => {
    const guessedWordsNode = wrapper.find("[data-test='guessed-word']");
    expect(guessedWordsNode.length).toBe(guessedWords.length);
  })


})


export default GuessedWords;
