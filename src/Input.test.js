import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';
import { checkProps, findByTestAttr } from '../test/testUtils';

const setup = () => {
  return shallow(<Input />);
};

test('render Input component ', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

test('propTypes - does not throw warning with expected props ', () => {
  const expectedProps = { secretWord: 1 };
  checkProps(Input, expectedProps);
});

describe('state controlled input field', () => {});

test('state updates with value of input box upon change', () => {});

test('field is cleared upon submit button click', () => {});
