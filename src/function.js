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

    this._setings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
  }

  set setings(value) {
    if (typeof (this.set[value[0]]) !== 'undefined') {
      if (this.set[value[0]].indexOf(value[1]) >= 0) {
        this._setings.set(value[0], value[1]);
      }
    }
  }

  get setings() {
    const defUs = new Map([
      [this.default.get('theme'), this._setings.get('theme')],
      [this.default.get('music'), this._setings.get('music')],
      [this.default.get('difficulty'), this._setings.get('difficulty')],
    ]);
    return defUs;
  }
}
