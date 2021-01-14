import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../test/testUtils';
import LanguagePicker from './LanguagePicker';

const mockSetLanguage = jest.fn();

const setup = () => {
  return shallow(<LanguagePicker setLanguage={mockSetLanguage} />);
};

test('LanguagePicker renders without error ', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-picker');
  expect(component.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  checkProps(LanguagePicker, { setLanguage: jest.fn() });
});

test('renders non-zero language icons', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-icons');
  expect(component.length).toBeGreaterThan(0);
});

test('calls setLanguage prop upon click', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-icons');
  const firstIcon = component.first();
  firstIcon.simulate('click');
  expect(mockSetLanguage).toHaveBeenCalled();
});
