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

describe('language string testing', () => {
  test('returns correct submit string for english', () => {
    const result = getStringByLanguage('en', 'submit', strings);
    expect(result).toBe('submit');
    expect(mockWarn).not.toHaveBeenCalled();
  });
  test('returns the correct submit string for emoji', () => {
    const result = getStringByLanguage('emoji', 'submit', strings);
    expect(result).toBe('🚀');
    expect(mockWarn).not.toHaveBeenCalled();
  });
  test('returns english submit string when language does not exist', () => {
    const result = getStringByLanguage('notALanguage', 'submit', strings);
    expect(result).toBe('submit');
    expect(mockWarn).toHaveBeenCalledWith(
      'Could not get string [submit] for [notALanguage]'
    );
  });
  test('returns english submit string when submit key does not exist for language', () => {
    const result = getStringByLanguage('mermish', 'submit', strings);
    expect(result).toBe('submit');
    expect(mockWarn).toHaveBeenCalledWith(
      'Could not get string [submit] for [mermish]'
    );
  });
});
