import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { findByTestAttr } from '../test/testUtils';
import hookActions from './actions/hookActions';

const mockSetSecretWord = jest.fn();

const setup = () => {
  return mount(<App />);
};

test('App renders without error ', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

describe('getSecretWord calls', () => {
  hookActions.getSecretWord = mockSetSecretWord;

  beforeEach(() => {
    mockSetSecretWord.mockClear();
    setup();
  });

  test('getSecretWord gets called on App mount', () => {
    expect(mockSetSecretWord).toHaveBeenCalled();
  });

  test('secretWord does not update on App update', () => {
    let wrapper = setup();
    mockSetSecretWord.mockClear();
    wrapper.setProps();
    expect(mockSetSecretWord).not.toHaveBeenCalled();
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
