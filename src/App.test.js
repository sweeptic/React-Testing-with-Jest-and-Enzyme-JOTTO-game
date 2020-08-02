import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

configure({ adapter: new EnzymeAdapter() });

// /** 
// * Factory function to create ShallowWrapper for the App component
// * @function setup
// * @param {object} props - Component props specific to this setup
// * @param {object} state - Initial state for setup.
// * @returns {ShallowWrapper}
// */

// // const defaultProps = [{
// //   key: [{ key: value}]
// // }]


const setup = (props = {}, state = null) => {
  // const setupProps = { ...defaultProps, ...props }
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state);
  return wrapper;
}


/** 
* Return ShallowWrapper containing node(s) with the given data-test value.
* @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
* @param {string} val - Value of data-test attribute for search.
* @returns {ShallowWrapper}
*/
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}
test('renders without error ', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
})

// // test('does not throw warning with expected props ', () => {
// //   const expectedProps = { success: false };
// //   checkProps(Congrats, expectedProps)
// //	 checkProps(GuessedWords, defaultProps)
// // });


// export default App;
