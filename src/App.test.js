// setup file
import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import App from './App'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/** 
* Factory function to create ShallowWrapper for the App component
* @function setup
* @param {object} props - Component props specific to this setup
* @param {object} state - Initial state for setup.
* @returns {ShallowWrapper}
// */
// const setup = (props = {}, state = null) => {
//   const wrapper = shallow(<App {...props} />)
//   if (state) wrapper.setState(state);
//   return wrapper;
// }



// /** 
// * Return ShallowWrapper containing node(s) with the given data-test value.
// * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
// * @param {string} val - Value of data-test attribute for search.
// * @returns {ShallowWrapper}
// */
// const findByTestAttr = (wrapper, val) => {
//   return wrapper.find(`[data-test="${val}"]`);
// }


// test('renders without error ', () => {
//   const wrapper = setup();
//   const appComponent = findByTestAttr(wrapper, 'component-app');
//   expect(appComponent.length).toBe(1);
// })

// test('renders increment button ', () => {
//   const wrapper = setup();
//   const button = findByTestAttr(wrapper, 'increment-button');
//   expect(button.length).toBe(1);
// })

// test('renders decrement button', () => {
//   const wrapper = setup();
//   const button = findByTestAttr(wrapper, 'decrement-button');
//   expect(button.length).toBe(1);
// })


// test('renders counter display ', () => {
//   const wrapper = setup();
//   const counterDisplay = findByTestAttr(wrapper, 'counter-display');
//   expect(counterDisplay.length).toBe(1);
// })

// test('counter starts at 0 ', () => {
//   const wrapper = setup();
//   const initialCounterState = wrapper.state('counter');
//   expect(initialCounterState).toBe(0);
// })


// test('clicking button increments counter display', () => {
//   const counter = 7;
//   const wrapper = setup(null, { counter });
//   const button = findByTestAttr(wrapper, 'increment-button');
//   button.simulate('click');
//   const counterDisplay = findByTestAttr(wrapper, 'counter-display');
//   expect(counterDisplay.text()).toContain(counter + 1);
// })

// test('clicking button decrements counter display', () => {
//   const counter = 7;
//   const wrapper = setup(null, { counter });
//   const button = findByTestAttr(wrapper, 'decrement-button');
//   button.simulate('click');
//   const counterDisplay = findByTestAttr(wrapper, 'counter-display');
//   expect(counterDisplay.text()).toContain(counter - 1);
// })

// test('clicking button decrements doesnt go below 0', () => {
//   const counter = 0;
//   const wrapper = setup(null, { counter });
//   const button = findByTestAttr(wrapper, 'decrement-button');
//   button.simulate('click');
//   const counterDisplay = findByTestAttr(wrapper, 'counter-display');
//   expect(counterDisplay.text()).toContain(counter);
// })

// test('show warning message when below 0', () => {
//   const counter = 0;
//   const wrapper = setup(null, { counter });
//   const button = findByTestAttr(wrapper, 'decrement-button');
//   button.simulate('click');
//   const counterDisplay = findByTestAttr(wrapper, 'warning-text');
//   expect(counterDisplay.text()).toBe('The counter cannot go below 0')
// })

// test('hide show warning message when increment from 0 to 1', () => {
//   const counter = 0;
//   const errorMessage = "The counter cannot go below 0";
//   const wrapper = setup(null, { counter, errorMessage });
//   const button = findByTestAttr(wrapper, 'increment-button');
//   button.simulate('click');
//   const counterDisplay = findByTestAttr(wrapper, 'warning-text');
//   expect(counterDisplay.text()).toBe("")
// })


// // test('renders without error', () => {
// //   const wrapper = shallow(<App />);
// //   console.log(wrapper.debug());
// //   expect(wrapper).toBeTruthy();
// // });
