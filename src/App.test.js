import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { findByTestAttr } from '../test/testUtils';
import hookActions from './actions/hookActions';

const mockSetSecretWord = jest.fn();

const setup = ({ secretWord = 'party', language = 'en' }) => {
  const mockUseReducer = jest
    .fn()
    .mockReturnValue([{ secretWord, language }, jest.fn()]);

  React.useReducer = mockUseReducer;

  return mount(<App />);
};

test('App renders without error ', () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.exists()).toBe(true);
});

describe('getSecretWord calls', () => {
  hookActions.getSecretWord = mockSetSecretWord;

  beforeEach(() => {
    mockSetSecretWord.mockClear();
    setup({});
  });

  test('getSecretWord gets called on App mount', () => {
    expect(mockSetSecretWord).toHaveBeenCalled();
  });

  test('secretWord does not update on App update', () => {
    let wrapper = setup({});
    mockSetSecretWord.mockClear();
    wrapper.setProps();
    expect(mockSetSecretWord).not.toHaveBeenCalled();
  });
});

describe('secretWord is not null', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup('party');
  });

  test('renders app when secretWord is not null', () => {
    const component = findByTestAttr(wrapper, 'component-app');
    expect(component.exists()).toBe(true);
  });

  test('does not render spinner when secretWord is not null', () => {
    const component = findByTestAttr(wrapper, 'component-spinner');
    expect(component.exists()).toBe(false);
  });
});

describe('secretWord is  null', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ secretWord: null });
  });
  test('does not renders app when secretWord is not null', () => {
    const component = findByTestAttr(wrapper, 'component-app');
    expect(component.exists()).toBe(false);
  });

  test('render spinner when secretWord is not null', () => {
    const component = findByTestAttr(wrapper, 'component-spinner');
    expect(component.exists()).toBe(true);
  });
});
