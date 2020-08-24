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
  const propError =checkPropTypes(GuessedWords.propTypes, defaultProps, 'prop', GuessedWords.name);
  expect(propError).toBeUndefined();
});

export default GuessedWords;
