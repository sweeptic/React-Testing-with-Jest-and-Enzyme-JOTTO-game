import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { findByTestAttr } from '../test/testUtils';
import hookActions, { getSecretWord } from './actions/hookActions';

const mockGetSecretWord = jest.fn();

const setup = () => {
  mockGetSecretWord.mockClear();

  hookActions.getSecretWord = mockGetSecretWord;

  // const mockUseReducer = jest.fn().mockReturnValue([{}, jest.fn()]);
  // React.useReducer = mockUseReducer;
  return mount(<App />);
};

test('App renders without error ', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

describe('getSecretWord calls', () => {
  test('getSecretWord gets called on App mount', () => {
    setup();
    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  test('secretWord does not update on App update', () => {
    let wrapper = setup();
    mockGetSecretWord.mockClear();
    wrapper.setProps();
    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});

describe('secretWord is not null', () => {
  test('renders app when secretWord is not null', () => {});

  test('does not render spinner when secretWord is not null', () => {});
});

describe('secretWord is  null', () => {
  test('does not renders app when secretWord is not null', () => {});

  test('render spinner when secretWord is not null', () => {});
});
