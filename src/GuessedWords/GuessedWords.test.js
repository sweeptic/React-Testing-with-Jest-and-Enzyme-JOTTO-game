import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import GuessedWords from './GuessedWords';
import { findByTestAttr, checkProps } from '../../test/testUtils';

configure({ adapter: new EnzymeAdapter() });



const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
}

/** 
* Factory function to create ShallowWrapper for the GuessedWords component
* @function setup
* @param {object} props - Component props specific to this setup
* @param {object} state - Initial state for setup.
* @returns {ShallowWrapper}
*/
const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<GuessedWords {...setupProps} />)
  if (state) wrapper.setState(state);
  return wrapper;
}

test('does not throw warning with expected props ', () => {
  checkProps(GuessedWords, defaultProps)
});

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  })

  test('renders without error ', () => {
    const guessedWordComponent = findByTestAttr(wrapper, 'component-guessedwords');
    expect(guessedWordComponent.length).toBe(1);
  })

  test('renders instruction to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions')
    expect(instructions.text().length).not.toBe(0);
  })
})


describe('if there are words guessed', () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 }
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  })

  test('renders without error ', () => {
    const component = findByTestAttr(wrapper, 'component-guessedwords');
    expect(component.length).toBe(1);
  })

  test('renders "guessed words" section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  })

  test('correct number of guessed words', () => {
    const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsNodes.length).toBe(guessedWords.length);
  })
})


export default GuessedWords;
