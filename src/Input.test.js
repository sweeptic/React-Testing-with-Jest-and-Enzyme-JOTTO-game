describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component without error', () => {});
    test('renders input box', () => {});
    test('renders submit button', () => {});
  });
  describe('word has been guessed', () => {
    test('renders component without error', () => {});
    test('does not render input box', () => {});
    test('does not render submit button', () => {});
  });
});

describe('redux props', () => {
  test('has success piece of state as prop', () => {});
  test('`guessWord` action creator is a function prop', () => {});
});

describe('`guessWord` action creator', () => {
  test('`guessWord` was called once', () => {});
  test('calls `guessWord with input value as argument`', () => {});
  test('input box clears on submit', () => {});
});
