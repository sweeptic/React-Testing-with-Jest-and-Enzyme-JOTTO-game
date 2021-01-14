import React from 'react';
import { mount, shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';
import Congrats from './Congrats';
import languageContext from './contexts/languageContext';

const defaultProps = { success: false };

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */

// const setup = (props = {}) => {
//   const setupProps = { ...defaultProps, ...props };
//   return shallow(<Congrats {...setupProps} />);
// };

const setup = ({ success, language }) => {
  success = success || false;
  language = language || 'en';
  return mount(
    <languageContext.Provider value={language}>
      <Congrats success={success} />
    </languageContext.Provider>
  );
};

describe('language picker', () => {
  test('correctly renders congrats string in English by default', () => {
    const wrapper = setup({ success: true });
    expect(wrapper.text()).toBe('Congratulations! You guessed the word!');
  });
  test('correctly renders congrats string in emoji', () => {
    const wrapper = setup({ success: true, language: 'emoji' });
    expect(wrapper.text()).toBe('🎯🎉');
  });
});

test('renders without error', () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});
test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});
test('renders non-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});
test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
