import stringsModule from './strings';

const getStringByLanguage = stringsModule.getStringByLanguage;

const strings = {
  en: { submit: 'submit' },
  emoji: { submit: '🚀' },
  mermish: {},
};

describe('language string testing', () => {
  test('returns correct submit string for english', () => {
    const result = getStringByLanguage('en', 'submit', strings);
    expect(result).toBe('submit');
  });

  test('returns the correct submit string for emoji', () => {
    const result = getStringByLanguage('emoji', 'submit', strings);
    expect(result).toBe('🚀');
  });
  test('returns english submit string when language does not exist', () => {
    const result = getStringByLanguage('notALanguage', 'submit', strings);
    expect(result).toBe('submit');
  });
  test('returns english submit string when submit key does not exist for language', () => {
    const result = getStringByLanguage('mermish', 'submit', strings);
    expect(result).toBe('submit');
  });
});
