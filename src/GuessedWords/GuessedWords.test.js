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
  test('renders without error ', (props = {}) => {
    // const setupProps = { ...defaultProps, ...props }
    // const wrapper = shallow(<GuessedWords {...setupProps} />);
    const component = wrapper.find("[data-test='component-guessed-words']");
    expect(component.length).toBe(1);
  })

  test('renders instructions to guess a word', () => {
    const instruction = wrapper.find("[data-test='component-instruction']");
    expect(instruction.text().length).not.toBe(1);
  })


})

describe('if there are words guessed', () => {

})


export default GuessedWords;
