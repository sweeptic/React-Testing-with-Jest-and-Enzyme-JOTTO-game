import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import GuessedWords from './GuessedWords';
import { findByTestAttr } from '../../test/testUtils';

configure({ adapter: new EnzymeAdapter() });

/** 
* Factory function to create ShallowWrapper for the GuessedWords component
* @function setup
* @param {object} props - Component props specific to this setup
* @param {object} state - Initial state for setup.
* @returns {ShallowWrapper}
*/
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<GuessedWords {...props} />)
  if (state) wrapper.setState(state);
  return wrapper;
}


/** 
* Return ShallowWrapper containing node(s) with the given data-test value.
* @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
* @param {string} val - Value of data-test attribute for search.
* @returns {ShallowWrapper}
*/


// test('renders without error ', () => {
//   const wrapper = setup();
//   const guessedwordsComponent = findByTestAttr(wrapper, 'component-guessedwords');
//   expect(guessedwordsComponent.length).toBe(1);
// })


export default GuessedWords;
