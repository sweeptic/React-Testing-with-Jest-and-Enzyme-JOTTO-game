import React from 'react';
import { shallow } from 'enzyme';


import Congrats from './Congrats';
import { findByTestAttr, checkProps } from '../../test/testUtils';


const defaultProps = { success: false };

/** 
* Factory function to create ShallowWrapper for the Congrats component
* @function setup
* @param {object} props - Component props specific to this setup
* @param {object} state - Initial state for setup.
* @returns {ShallowWrapper}
*/
const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props } //props overwrite defaultprops..
  const wrapper = shallow(<Congrats {...setupProps} />)
  if (state) wrapper.setState(state);
  return wrapper;
}


test('renders without error ', () => {
  const wrapper = setup();
  const congratsComponent = findByTestAttr(wrapper, 'component-congrats');
  expect(congratsComponent.length).toBe(1);
})

test('renders no text when `success` prop is false ', () => {
  const wrapper = setup({ success: false });
  const congratsComponent = findByTestAttr(wrapper, 'component-congrats');
  expect(congratsComponent.text()).toBe('');
})

test('renders none-empty congrats message when success prop is true ', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
})

test('does not throw warning with expected props ', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps)
});


export default Congrats;
