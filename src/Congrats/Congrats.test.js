import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';

configure({ adapter: new EnzymeAdapter() });


test('renders without error ', () => {
  const wrapper = shallow(<Congrats />);
  const appComponent = wrapper.find("[data-test='component-congrats']");
  expect(appComponent.length).toBe(1);
})



export default Congrats;
