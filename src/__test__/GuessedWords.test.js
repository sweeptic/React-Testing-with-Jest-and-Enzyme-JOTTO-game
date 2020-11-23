import React from 'react';
import { shallow } from 'enzyme';

const defaultProps = {
  guessedWords: [{ guessedword: 'train', letterMatch: 3 }],
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
    const guessedWords = [
      { guessedword: 'train', letterMatch: 3 },
      { guessedword: 'agile', letterMatch: 1 },
      { guessedword: 'party', letterMatch: 5 },
    ];

    let wrapper;
    beforeEach(() => {
      wrapper = setup(guessedWords);
    });

    test('renders component', () => {
      const component = findByTestAttr(wrapper, 'component-guessed-words');
      expect(component.length).toBe(1);
    });

    test('renders "guessed words" section ', () => {
      const component = findByTestAttr(wrapper, 'guessed-words');
      expect(component.length).toBe(1);
    });

    test('renders correct numbers of guessed words ', () => {
      const component = findByTestAttr(wrapper, 'guessed-words');
      expect(component.length).toBe(guessedWords.length);
    });
  });
});

test('proptypes - does not throw warning with expected props ', () => {
  checkProps(GuessedWords, defaultProps);
});
