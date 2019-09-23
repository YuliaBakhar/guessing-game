class GuessingGame {
  constructor() {
    this.max = 0;
    this.min = 0;
    this.yourNumber = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.yourNumber = Math.ceil((this.max - this.min) / 2 + this.min);

    return this.yourNumber;
  }

  lower() {
    this.max = this.yourNumber;
  }

  greater() {
    this.min = this.yourNumber;
  }
}

module.exports = GuessingGame;
