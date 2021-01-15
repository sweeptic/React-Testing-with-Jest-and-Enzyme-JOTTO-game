import stringModule from './strings';

const { getStringByLanguage } = stringModule;

const strings = {
  en: { submit: 'submit' },
  emoji: { submit: '🚀' },
  mermish: {},
};

const mockWarn = jest.fn();
let originalWarn;

beforeEach(() => {
  originalWarn = console.warn;
  console.warn = mockWarn;
});

afterEach(() => {
  console.warn = originalWarn;
});

//expect(mockWarn).not.toHaveBeenCalled();
//expect(mockWarn).toHaveBeenCalledWith(
//  'Could not get string [submit] for [...]'
//);

describe('language string testing', () => {
  test('returns the correct submit string for english', () => {
    const result = getStringByLanguage('en', 'submit', strings);
    expect(mockWarn).not.toHaveBeenCalled();
    expect(result).toBe('submit');
  });

  test('returns the correct submit string for emoji', () => {
    const result = getStringByLanguage('emoji', 'submit', strings);
    expect(mockWarn).not.toHaveBeenCalled();
    expect(result).toBe('🚀');
  });

  test('returns english submit string when language does not exist', () => {
    const result = getStringByLanguage('notALanguage', 'submit', strings);
    expect(mockWarn).toHaveBeenCalledWith(
      'Could not get string [submit] for [notALanguage]'
    );
    expect(result).toBe('submit');
  });

  test('returns english submit string when submit key does not exist for language', () => {
    const result = getStringByLanguage('mermish', 'submit', strings);
    expect(mockWarn).toHaveBeenCalledWith(
      'Could not get string [submit] for [mermish]'
    );
    expect(result).toBe('submit');
  });
});
