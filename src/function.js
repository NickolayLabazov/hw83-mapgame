export default class Settings {
  constructor() {
    this.set = {
      theme: ['dark', 'light', 'gray'],
      music: ['trance', 'pop', 'rock', 'chillout', 'off'],
      difficulty: ['easy', 'normal', 'hard', 'nightmare'],
    };

    this.default = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.userSet = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
  }

  set setings(value) {
    if (typeof (this.set[value[0]]) !== 'undefined') {
      if (this.set[value[0]].indexOf(value[1]) >= 0) {
        this.userSet.set(value[0], value[1]);
      }
    }
  }

  get setings() {
    const defUs = new Map([
      [this.default.get('theme'), this.userSet.get('theme')],
      [this.default.get('music'), this.userSet.get('music')],
      [this.default.get('difficulty'), this.userSet.get('difficulty')],
    ]);
    return defUs;
  }
}
