import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../test/testUtils';
import GuessedWords from '../GuessedWords';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for the  component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

describe('render tests', () => {
  describe('if no words guessed', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ guessedWords: [] });
    });

    test('renders component', () => {
      const component = findByTestAttr(wrapper, 'component-guessed-words');
      expect(component.length).toBe(1);
    });
    test('renders instruction ', () => {
      const component = findByTestAttr(wrapper, 'guess-instruction');
      expect(component.text().length).not.toBe(0);
    });
  });

  describe('if some words guessed', () => {
    let wrapper;
    const guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'agile', letterMatchCount: 2 },
      { guessedWord: 'party', letterMatchCount: 5 },
    ];

    beforeEach(() => {
      wrapper = setup({ guessedWords });
    });
    test('renders component', () => {
      const component = findByTestAttr(wrapper, 'component-guessed-words');
      expect(component.length).toBe(1);
    });
    test('doesnt renders instruction ', () => {
      const component = findByTestAttr(wrapper, 'guess-instruction');
      expect(component.length).toBe(0);
    });
    test('renders "guessed words" section ', () => {
      const component = findByTestAttr(wrapper, 'guessed-words');
      expect(component.length).toBe(1);
    });
    test('renders correct numbers of guessed words ', () => {
      const component = findByTestAttr(wrapper, 'guessed-word');
      expect(component.length).toBe(guessedWords.length);
    });
  });
});

test('proptypes - does not throw warning with expected props ', () => {
  checkProps(GuessedWords, defaultProps);
});
