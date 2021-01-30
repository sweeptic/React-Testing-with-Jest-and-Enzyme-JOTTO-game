import moxios from 'moxios';
import hookActions, { getSecretWord } from './hookActions';

describe('moxios tests', () => {
  const secretWord = 'party';
  const mockSetSecretWord = jest.fn();

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: secretWord,
    });
  });

  test('calls the getSecretWord callback on axios response', async () => {
    await hookActions.getSecretWord(mockSetSecretWord);

    expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord);
  });
});
