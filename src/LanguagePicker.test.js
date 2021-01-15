import React from 'react';
import { shallow } from 'enzyme';
import LanguagePicker from './LanguagePicker';
import { checkProps, findByTestAttr } from '../test/testUtils';

const mockLanguage = jest.fn();

const setup = () => {
  return shallow(<LanguagePicker language={mockLanguage} />);
};

test('LanguagePicker renders without error ', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-language-picker');
  expect(component.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  //   const expectedProps = { language: jest.fn() }; //will pass test
  const expectedProps = { language: 1 }; //for red-green testing
  checkProps(LanguagePicker, expectedProps);
});

test('renders non-zero language icons', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-language-icons');
  expect(component.length).toBeGreaterThan(0);
});

test('calls setLanguage prop upon click', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-language-icons').first();
  component.simulate('click');
  expect(mockLanguage).toHaveBeenCalledWith();
});
