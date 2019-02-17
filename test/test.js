import Settings from '../src/function';

test('Установка пользовательских настроек сеттером', () => {
  const expected = {
    set: { theme: ['dark', 'light', 'gray'], music: ['trance', 'pop', 'rock', 'chillout', 'off'], difficulty: ['easy', 'normal', 'hard', 'nightmare'] },
    default: new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]),
    userSet: new Map([['theme', 'light'], ['music', 'chillout'], ['difficulty', 'hard']]),
  };
  const settings = new Settings();
  settings.setings = ['theme', 'light'];
  settings.setings = ['music', 'chillout'];
  settings.setings = ['difficulty', 'hard'];

  const received = settings;

  expect(received).toEqual(expected);
});

test('Запуск геттера', () => {
  const expected = new Map([['dark', 'light'], ['trance', 'chillout'], ['easy', 'hard']]);
  const settings = new Settings();
  settings.setings = ['theme', 'light'];
  settings.setings = ['music', 'chillout'];
  settings.setings = ['difficulty', 'hard'];
  const received = settings.setings;
  expect(received).toEqual(expected);
});

test('Попытка неправильной установки пользовательских настроек сеттером', () => {
  const expected = {
    set: { theme: ['dark', 'light', 'gray'], music: ['trance', 'pop', 'rock', 'chillout', 'off'], difficulty: ['easy', 'normal', 'hard', 'nightmare'] },
    default: new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]),
    userSet: new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]),
  };
  const settings = new Settings();
  settings.setings = ['difficulty1', 'hard'];

  const received = settings;

  expect(received).toEqual(expected);
});

test('Попытка неправильной установки пользовательских настроек сеттером', () => {
  const expected = {
    set: { theme: ['dark', 'light', 'gray'], music: ['trance', 'pop', 'rock', 'chillout', 'off'], difficulty: ['easy', 'normal', 'hard', 'nightmare'] },
    default: new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]),
    userSet: new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]),
  };
  const settings = new Settings();
  settings.setings = ['difficulty', 'hard1'];

  const received = settings;

  expect(received).toEqual(expected);
});
