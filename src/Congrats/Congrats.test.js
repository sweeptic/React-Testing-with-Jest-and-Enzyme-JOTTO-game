import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';

configure({ adapter: new EnzymeAdapter() });


//render test
test('renders without error ', (props = {}) => {
  const wrapper = shallow(<Congrats {...props} />);
  const appComponent = wrapper.find("[data-test='component-congrats']");
  expect(appComponent.length).toBe(1);
})

//if success true -> render non empty congrat message
test('if "success" prop is true -> render non empty congrat message ', (props = { success: true }) => {
  const wrapper = shallow(<Congrats {...props} />);
  const component = wrapper.find("[data-test='congrats-message']");
  expect(component.text().length).not.toBe(0)
})

//if success false -> render empty congrat message
test('if "success" prop is false -> render empty congrat message ', (props = { success: false }) => {
  const wrapper = shallow(<Congrats {...props} />);
  const component = wrapper.find("[data-test='component-congrats']");
  expect(component.text()).toBe('');
})


// 
export default Congrats;
