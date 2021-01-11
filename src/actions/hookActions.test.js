import moxios from 'moxios';
import { getSecretWord } from './hookActions';

describe('moxios tests', () => {
  const mockSetSecretWord = jest.fn();
  const secretWord = 'party';

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('calls the getSecretWord callback on axios response', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    await getSecretWord(mockSetSecretWord);

    expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord);
  });
});
