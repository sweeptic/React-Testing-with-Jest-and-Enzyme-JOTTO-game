import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';
import { findByTestAttr } from '../../test/testUtils';



configure({ adapter: new EnzymeAdapter() });

/** 
* Factory function to create ShallowWrapper for the Congrats component
* @function setup
* @param {object} props - Component props specific to this setup
* @param {object} state - Initial state for setup.
* @returns {ShallowWrapper}
*/
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Congrats {...props} />)
  if (state) wrapper.setState(state);
  return wrapper;
}


test('renders without error ', () => {
  const wrapper = setup();
  const congratsComponent = findByTestAttr(wrapper, 'component-congrats');
  expect(congratsComponent.length).toBe(1);
})

test('renders no text when `success` prop is false ', () => {
})

test('renders none-empty congrats message when success prop is true ', () => {
})

test('renders without error ', () => {
})


export default Congrats;
