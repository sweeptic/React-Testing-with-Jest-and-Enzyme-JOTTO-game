import React from 'react';
import { shallow } from 'enzyme';
import LanguagePicker from './LanguagePicker';
import { checkProps, findByTestAttr } from '../test/testUtils';

const mockSetLanguage = jest.fn();

const setup = () => {
  return shallow(<LanguagePicker setLanguage={mockSetLanguage} />);
};

test('LanguagePicker renders without error ', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-languagePicker');
  expect(component.exists()).toBe(true);
});

test('does not throw warning with expected props', () => {
  const expectedProps = { setLanguage: jest.fn() };
  checkProps(LanguagePicker, expectedProps);
});

test('renders non-zero language icons', () => {
  const wrapper = setup();
  const languageIcons = findByTestAttr(wrapper, 'language-icon');
  expect(languageIcons.length).toBeGreaterThan(0);
});

test('calls setLanguage prop upon click', () => {
  const wrapper = setup();
  const languageIcons = findByTestAttr(wrapper, 'language-icon');
  const firstIcon = languageIcons.first();
  firstIcon.simulate('click');
  expect(mockSetLanguage).toHaveBeenCalled();
});
