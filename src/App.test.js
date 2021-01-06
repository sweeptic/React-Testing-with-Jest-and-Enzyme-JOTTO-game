import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

const setup = () => {
  const wrapper = shallow(<App />);
  // console.log(wrapper.debug());
  return wrapper;
};

test('App renders without error ', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});
